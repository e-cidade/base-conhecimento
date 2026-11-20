# Consumo independente de fornecedor

Forneça explicitamente [AGENTS.md](../../AGENTS.md), o [inventário](../../documentacao/fontes/repositorios-e-cidade.md), documentos do domínio e código necessário. Não há formato que garanta carregamento automático em todas as ferramentas.

## Contrato de entrada e saída

Entrada: objetivo, distribuição, URL, commit do código, commit da base, ambiente, escopo de leitura/escrita e arquivos disponíveis.

Saída: resposta em português, fatos com caminhos/revisões, hipóteses, limitações, proposta, validações realizadas e pendências.

Ordem documental: documentos canônicos → regras transversais → adaptador específico → contexto consumidor, preservando instruções do usuário, segurança e regras locais aplicáveis.

Use seleção por tarefa para respeitar limites de contexto. Modelos locais ou externos precisam das mesmas evidências; capacidade de gerar texto não comprova acesso à fonte. Não incluir segredos nem dados reais em prompts.

Atualize snapshots deliberadamente e mantenha rastreabilidade de versões. Consulte o [procedimento de consumo](../../governanca/atualizacao-e-consumo.md).
