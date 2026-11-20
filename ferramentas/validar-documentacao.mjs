import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
function walk(dir) {
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap(entry => {
    if (entry.name === '.git' || entry.name === 'node_modules') return [];
    const p = path.join(dir, entry.name);
    return entry.isDirectory() ? walk(p) : [p];
  });
}
const files = walk(root).filter(p => p.endsWith('.md'));
let links = 0;
let external = 0;
const errors = [];
for (const file of files) {
  const text = fs.readFileSync(file, 'utf8');
  // Excluir blocos de código: exemplos não são links navegáveis.
  const prose = text.replace(/^```[^\n]*\n[\s\S]*?^```\s*$/gm, '');
  const fences = (text.match(/^```/gm) || []).length;
  if (fences % 2) errors.push(file + ': bloco de código não fechado');
  for (const match of prose.matchAll(/\[[^\]]*\]\(([^)]+)\)/g)) {
    const target = match[1];
    if (/^https?:\/\//.test(target)) {
      external++;
      try { new URL(target); } catch { errors.push(file + ': URL inválida ' + target); }
      continue;
    }
    if (target.startsWith('#')) {
      errors.push(file + ': âncora requer validação explícita ' + target);
      continue;
    }
    links++;
    const [relative, anchor] = target.split('#');
    const resolved = path.resolve(path.dirname(file), decodeURIComponent(relative));
    if (path.relative(root, resolved).startsWith('..')) errors.push(file + ': link fora da base');
    if (!fs.existsSync(resolved)) errors.push(file + ': destino ausente ' + target);
    if (anchor) errors.push(file + ': âncora requer validação explícita ' + target);
  }
  // Triagem limitada; não substitui scanner de segredos nem revisão humana.
  if (/-----BEGIN (?:RSA |EC |OPENSSH )?PRIVATE KEY-----|gh[pousr]_[A-Za-z0-9]{20,}/.test(text)) {
    errors.push(file + ': possível segredo');
  }
}
console.log(JSON.stringify({ markdown: files.length, linksInternos: links, linksExternosSintaxe: external, errors }, null, 2));
process.exitCode = errors.length ? 1 : 0;
