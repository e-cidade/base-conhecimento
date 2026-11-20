# VS Code e GitHub Copilot

## Workspace com código e conhecimento

Abra a base no VS Code. Em File → Add Folder to Workspace, adicione o checkout do código e salve o workspace. Confirme Git, branch e commit em cada pasta.

Neste repositório, [.github/copilot-instructions.md](../../.github/copilot-instructions.md) adapta as regras comuns ao Copilot. Suporte e aplicação variam entre cliente e recurso: confira configurações da instalação e as referências exibidas na resposta.

No Copilot Chat, adicione os arquivos pertinentes pelo seletor de contexto/arquivos disponível no cliente. Se sua versão aceitar referência por #, use-a para selecionar o arquivo, sem depender apenas de escrever o nome. Comece por README, inventário e documento de arquitetura; inclua o código do fluxo específico.

## Limites entre repositórios

Uma pasta adicional não garante que o Copilot aplique as instruções dela ao código de outra pasta. Peça leitura explícita e, se necessário, proponha um ponteiro nas instruções do consumidor, respeitando suas regras. Não copie toda a política para cada projeto.

Prompt: “Use os documentos anexados como referência. Confirme sua revisão e a distribuição alvo; cite o arquivo do código que comprova cada conclusão. Não trate requisitos de outra linha como universais.”

Antes de aceitar: confira referências usadas, compare docs com o commit atual, revise diff, execute validações proporcionais e registre pendências. Não há sincronização automática garantida pelo workspace.

Fontes oficiais consultadas em 2026-11-20: [custom instructions](https://docs.github.com/en/copilot/concepts/prompting-and-context/custom-instructions) e [suporte por cliente](https://docs.github.com/en/copilot/reference/custom-instructions-support).
