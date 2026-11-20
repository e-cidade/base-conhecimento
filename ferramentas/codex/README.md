# Codex

## Uso local

1. Clone e atualize a base conforme o [README](../../README.md).
2. Abra a pasta no cliente Codex disponível ou no editor com suporte a Codex. Para analisar o ERP, disponibilize também sua pasta e permissões.
3. Peça leitura de [AGENTS.md](../../AGENTS.md) e dos documentos relevantes antes da tarefa.
4. Informe repositório, commit e caminho absoluto do código. Peça ao agente para confirmar os arquivos efetivamente lidos.
5. Revise plano, diff, comandos e resultados; produção e ações destrutivas exigem autorização explícita.

AGENTS.md oferece instruções persistentes segundo o escopo de descoberta do Codex. Não presuma carregamento automático de uma pasta irmã. No repositório consumidor, proponha um ponteiro para a base sem substituir suas regras locais; confirme acesso antes de depender dele.

## Contexto e atualização

A janela de contexto é limitada. Use inventário → documento do domínio → arquivos do fluxo afetado. Não envie o ERP inteiro como contexto indiscriminado. Registre commit da base e do código em cada investigação; atualize com árvore limpa e pull --ff-only conforme a branch.

Prompt: “Leia AGENTS.md e o inventário. Analise somente o fluxo indicado no checkout informado. Cite repositório, caminho e commit. Diferencie leitura estática de execução, liste lacunas e apresente testes proporcionais antes de modificar.”

Esta preparação foi revisada documentalmente; não constitui teste de instalação ou de todos os clientes Codex.

Fonte oficial consultada em 2026-11-20: [instruções com AGENTS.md](https://developers.openai.com/codex/guides/agents-md/).
