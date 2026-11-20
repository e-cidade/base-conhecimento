# Claude Code

Abra a base no Claude Code disponível no seu ambiente e confira as instruções carregadas de [CLAUDE.md](../../CLAUDE.md). Solicite também leitura de AGENTS.md, inventário e documentos do domínio.

Forneça o caminho do checkout da distribuição e seu commit. A disponibilidade de arquivos fora da pasta depende de permissões e configuração; confirme quais foram lidos. Não assuma que CLAUDE.md de uma pasta irmã seja carregado apenas porque o diretório existe.

O adaptador referencia a documentação canônica em vez de duplicá-la. Arquivos CLAUDE.md mantêm contexto de projeto, mas não garantem que todo documento referenciado caiba na janela de contexto ou seja consultado em toda tarefa.

Prompt: “Confirme as instruções e fontes lidas. Investigue o bug na distribuição/revisão informadas. Traga hipótese, evidência por arquivo, proposta mínima, regressões e plano de validação. Não execute migrações ou operações de produção.”

Revise comandos antes da execução, confirme dados sintéticos e valide diff/testes. Registre base e código por commit e atualize explicitamente as referências após mudanças.

Fonte oficial consultada em 2026-11-20: [memória e CLAUDE.md](https://code.claude.com/docs/en/memory). Uso descrito, sem teste de sessão Claude nesta auditoria.
