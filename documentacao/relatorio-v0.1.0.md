# Preparação da Base de Conhecimento v0.1.0

Data: 2026-11-20. Repositório comunitário: e-cidade/base-conhecimento. Branch: feature/estrutura-inicial-base-conhecimento. [PR #1](https://github.com/e-cidade/base-conhecimento/pull/1). Sem merge ou tag.

## Resultado e escopo

Ampliação dos 19 arquivos iniciais e criação de 8 arquivos: inventário, manual ChatGPT, política de consumo/atualização, proposta de licença, template de PR, template de issue, validador documental e este relatório. Total: 27 arquivos no candidato. Documentação em português, com estados e fontes.

Foram analisados documentalmente/amostralmente os 19 repositórios: e-cidade-Contass, 2018, transparencia, manuais, site, e-cidade-DBSeller, base-dados-ecidade, online, e-cidade, ecidade_login, database, 2014, portal-servidor, e-cidade-CPD, nextcloud-integrator, e-cidade-SertaoDigital, modulos-ecidade, .github e base-conhecimento.

O [inventário](fontes/repositorios-e-cidade.md) registra revisão, data e caminhos efetivamente lidos. Não foram inspecionados dados dos dumps, originais de manuais, todos os arquivos do ERP ou todos os workflows.

## Arquivos e consolidação

| Grupo | Arquivos / resultado |
| --- | --- |
| Entrada e adaptadores | README.md, AGENTS.md, CLAUDE.md, .github/copilot-instructions.md |
| Conhecimento técnico | arquitetura/README.md, desenvolvimento/README.md, documentacao/README.md, manuais/README.md, integracoes/README.md |
| Trabalho assistido | agentes/README.md, skills/README.md, prompts/README.md, padroes/README.md |
| Ferramentas | ferramentas/codex/README.md, ferramentas/copilot/README.md, ferramentas/claude/README.md, ferramentas/chatgpt/README.md, ferramentas/outras-llms/README.md |
| Governança e segurança | governanca/contribuicao.md, seguranca/README.md, governanca/atualizacao-e-consumo.md, governanca/licenciamento.md |
| Evidências e revisão | documentacao/fontes/repositorios-e-cidade.md, .github/PULL_REQUEST_TEMPLATE.md, .github/ISSUE_TEMPLATE/documentacao.md, ferramentas/validar-documentacao.mjs e este relatório |

Consolidados: distinção hub/ERP/mirror, requisitos por distribuição, arquitetura híbrida observada, limitações de instalação, diferenças entre login e armazenamento Nextcloud, proveniência e consumo por projetos externos. Contratos de agentes são propostas documentais, sem instalação de agentes autônomos. RAG/MCP continuam propostas futuras.

## Validações

Validação reproduzível com Node.js, sem dependências de terceiros:

```powershell
node ferramentas/validar-documentacao.mjs
```

O script verifica existência e escopo dos links internos, sintaxe de URLs, blocos de código e padrões limitados de possíveis segredos. Não faz requisições de rede e não é scanner completo.

Resultado da preparação: 27 arquivos totais, 26 Markdown, links internos resolvidos, sem erro no validador. Fontes externas foram verificadas pela leitura dos arquivos GitHub por commit e consulta das páginas oficiais dos fornecedores; não houve varredura de todos os links transitivos contidos nas fontes externas. O link do próprio candidato depende da publicação na branch.

Revisados os 19 arquivos originais pelo diff inicial e as mudanças desta entrega, coerência de ferramentas, hierarquia documental e tratamento de hipóteses. Nenhuma suíte do ERP, build Docker ou sessão das ferramentas de IA foi executada. Não havia workflow ou suíte de validação na branch inicial da base. O validador criado é executável manualmente; esta entrega não configura nova CI.

## Pendências e riscos

**Bloqueadores de integração/lançamento:** decisão comunitária da licença e autorização/cobertura das contribuições; definição de responsável pela manutenção e canal privado de segurança. A proposta detalha encaminhamento, sem licença adotada.

**Pendências técnicas para evolução:** homologação de instalações, revisão de instruções antigas nos projetos de origem, cobertura completa do legado, análise de licenças por arquivo, teste real dos manuais em cada cliente. Permanecem explicitamente fora da garantia de funcionamento desta versão documental.

As listagens de árvores grandes foram limitadas pela API; o inventário registra o limite de 1.000 entradas. Acesso parcial não foi tratado como ausência.

## Situação final

**READY_TO_MERGE: NO.** PR permanece draft para revisão técnica e deliberação comunitária dos bloqueadores. Isso não impede revisar os documentos. Versão v0.1.0 é pretendida, sem release ou tag criada.
