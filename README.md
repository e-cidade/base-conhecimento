# Base de Conhecimento da comunidade e-Cidade

Candidato à **v0.1.0**, em revisão no [PR #1](https://github.com/e-cidade/base-conhecimento/pull/1). Documentação pública, versionada e independente de fornecedor de IA. Pertence à comunidade e-Cidade e destina-se a instituições, empresas, profissionais e voluntários, preservando a autonomia dos participantes e a autoria das fontes.

**Escopo:** auditoria documental e amostral de 19 repositórios em 2026-11-20. Não é homologação de distribuições nem manual universal de instalação do ERP. Licença definitiva pendente de aprovação comunitária.

## Comece aqui

1. Identifique distribuição, repositório de origem e commit do sistema que está analisando.
2. Consulte o [inventário com evidências](documentacao/fontes/repositorios-e-cidade.md).
3. Leia [arquitetura](arquitetura/README.md), [desenvolvimento](desenvolvimento/README.md) e [segurança](seguranca/README.md).
4. Abra o manual de sua ferramenta e forneça apenas os documentos pertinentes.
5. Exija caminhos e commits para conclusões técnicas; valide no código antes de implementar.

O [hub comunitário](https://github.com/e-cidade/e-cidade) orienta descoberta; não contém o ERP. Mirrors representam linhas independentes e encaminham contribuições funcionais às respectivas origens.

## Base local no Windows

Pré-requisitos: Git disponível no terminal; VS Code é opcional. Esta base contém documentação e não exige PHP, banco ou Docker. Para executar o ERP, consulte os requisitos da distribuição em [ambiente local](desenvolvimento/README.md).

```powershell
git --version
git clone https://github.com/e-cidade/base-conhecimento.git C:\ecidade\base-conhecimento
cd C:\ecidade\base-conhecimento
git status
git pull --ff-only
code .
```

Enquanto o PR #1 não for integrado, a main contém apenas o ponto de partida. Para consultar o candidato completo:

```powershell
git fetch origin
git switch --track origin/feature/estrutura-inicial-base-conhecimento
```

Se a branch local já existir, use `git switch feature/estrutura-inicial-base-conhecimento`. Confirme `git status` antes de atualizar. `git pull --ff-only` não resolve divergências e não substitui alterações locais; em caso de erro, revise sem usar reset destrutivo. Após aprovação e merge pela comunidade, volte à main para acompanhar versões integradas. Não use a branch de revisão como versão estável.

Mantenha código e base em pastas irmãs. No VS Code, use **File → Add Folder to Workspace** para adicionar o código e salve o workspace. Isso disponibiliza arquivos, mas não garante que toda IA carregue instruções de todas as pastas.

## Ferramentas de IA

| Ferramenta | Como começar | Manual |
| --- | --- | --- |
| Codex | Abra a base, peça leitura de AGENTS.md e informe caminho/commit do código | [Codex](ferramentas/codex/README.md) |
| VS Code / Copilot | Abra as pastas, adicione os documentos ao Chat e confira referências | [Copilot](ferramentas/copilot/README.md) |
| Claude Code | Abra a base e confira CLAUDE.md e fontes carregadas | [Claude](ferramentas/claude/README.md) |
| ChatGPT | Anexe um recorte versionado ou use GitHub autorizado, quando disponível | [ChatGPT](ferramentas/chatgpt/README.md) |
| Outras LLMs | Forneça documentos canônicos e contrato de tarefa explicitamente | [Guia independente](ferramentas/outras-llms/README.md) |

Exemplo: “Analise a distribuição e o commit informados. Leia o inventário e os arquivos aplicáveis. Separe fatos, hipóteses e pendências; cite repositório, caminho e commit. Não altere o ambiente.”

Apenas informar uma URL não garante leitura integral, permanente ou atualizada. Uploads são fotografias da revisão enviada. RAG é proposta futura; não há indexador ou MCP implementado nesta base.

## Navegação

- [Arquitetura e diferenças entre distribuições](arquitetura/README.md)
- [Ambiente e qualidade](desenvolvimento/README.md)
- [Padrões documentais](padroes/README.md)
- [Documentação e proveniência](documentacao/README.md)
- [Manuais e instalação](manuais/README.md)
- [Contratos de agentes](agentes/README.md)
- [Procedimentos reutilizáveis](skills/README.md)
- [Prompts práticos](prompts/README.md)
- [Integrações](integracoes/README.md)
- [Segurança e privacidade](seguranca/README.md)
- [Contribuição](governanca/contribuicao.md)
- [Atualização e consumo da inteligência comunitária](governanca/atualizacao-e-consumo.md)
- [Licenciamento proposto](governanca/licenciamento.md)
- [Relatório de preparação v0.1.0](documentacao/relatorio-v0.1.0.md)

## Contribuição e licença

Use issues e PRs conforme o guia. Nenhum conteúdo desta branch constitui regra comunitária aprovada antes da revisão. Não há licença definitiva adotada nesta entrega; consulte a proposta e as pendências. Materiais externos conservam autoria e licenças. Não copiar conteúdo apenas por estar publicamente acessível.
