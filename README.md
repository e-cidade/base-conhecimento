# Base de Conhecimento e-Cidade

**Conhecimento compartilhado para fortalecer a colaboração, a autonomia tecnológica e a continuidade do ecossistema e-Cidade.**

Esta base reúne documentação técnica e funcional, referências de código, práticas de desenvolvimento e orientações para o uso responsável de inteligência artificial. É um espaço da comunidade para organizar experiências, tornar decisões rastreáveis e facilitar a participação de instituições, empresas, profissionais e voluntários.

O conhecimento é mantido em arquivos versionados, com fontes identificáveis e revisão por Pull Request. A participação preserva a autoria das contribuições e a autonomia das diferentes linhas de desenvolvimento.

[Arquivo único para ChatGPT](ECIDADE_CONTEXTO_CHATGPT.md) · [Começar a consultar](documentacao/fontes/repositorios-e-cidade.md) · [Usar com ChatGPT](ferramentas/chatgpt/README.md) · [Contribuir](governanca/contribuicao.md) · [Conhecer o ecossistema](https://github.com/e-cidade/e-cidade)

## Canais da comunidade

- **Site comunitário:** [site-ecidade.librecode.coop](https://site-ecidade.librecode.coop/)
- **Grupo no Telegram:** [e-Cidade — comunidade](https://t.me/eCidadeCE)

Acompanhe os canais da comunidade e participe das conversas. Para contribuições técnicas e documentais que precisam de rastreabilidade, utilize issues e Pull Requests conforme o guia de contribuição.

## Propósito

A continuidade de um software público depende também de conhecimento acessível: como seus componentes se relacionam, quais diferenças existem entre distribuições, onde estão as fontes e como colaborar com segurança.

A base busca:

- Organizar referências técnicas e funcionais com contexto e proveniência.
- Facilitar a entrada de novos colaboradores e a troca de conhecimento entre equipes.
- Apoiar manutenção, investigação de problemas e planejamento de evolução.
- Reduzir a dependência de conhecimento restrito a pessoas ou ferramentas.
- Oferecer contexto verificável para desenvolvedores e assistentes de IA.

## Para quem é esta base

| Público | Como utilizar e participar |
| --- | --- |
| Instituições e equipes de gestão pública | Conhecer o ecossistema, avaliar referências e documentar necessidades e experiências |
| Empresas e equipes técnicas | Consultar diferenças entre distribuições e contribuir com conhecimento generalizável |
| Profissionais e voluntários | Investigar problemas, revisar documentação, testar orientações e compartilhar aprendizados |
| Pesquisadores, estudantes e novos colaboradores | Encontrar fontes, compreender componentes e iniciar contribuições |
| Mantenedores e revisores | Preservar rastreabilidade, coerência documental e encaminhamento das contribuições |

O espaço é comunitário e impessoal, sem preferência por organizações, prestadores ou distribuições específicas.

## Comece pela sua necessidade

| Quero… | Consulte |
| --- | --- |
| Entender quais projetos e distribuições existem | [Inventário de repositórios e fontes](documentacao/fontes/repositorios-e-cidade.md) |
| Compreender arquitetura e componentes | [Arquitetura](arquitetura/README.md) |
| Preparar uma investigação ou ambiente de desenvolvimento | [Desenvolvimento e qualidade](desenvolvimento/README.md) |
| Encontrar orientações de operação e uso | [Manuais](manuais/README.md) |
| Analisar integrações | [Integrações](integracoes/README.md) |
| Trabalhar com IA | [ChatGPT](ferramentas/chatgpt/README.md), [Codex](ferramentas/codex/README.md), [Copilot](ferramentas/copilot/README.md) e [Claude Code](ferramentas/claude/README.md) |
| Compartilhar uma descoberta ou corrigir uma informação | [Guia de contribuição](governanca/contribuicao.md) |

Antes de aplicar uma orientação técnica, identifique a distribuição e o commit do código alvo. Compare a referência com os arquivos da revisão utilizada e registre diferenças ou lacunas.

## Como o conhecimento está organizado

| Área | Conteúdo |
| --- | --- |
| [Documentação e fontes](documentacao/README.md) | Proveniência, classificação das evidências e referências por revisão |
| [Arquitetura](arquitetura/README.md) | Componentes observados e particularidades das distribuições |
| [Desenvolvimento](desenvolvimento/README.md) | Ambiente, investigação de código e validações |
| [Padrões](padroes/README.md) | Convenções documentais e critérios de revisão |
| [Manuais](manuais/README.md) | Localização e uso dos materiais de referência |
| [Integrações](integracoes/README.md) | Contratos, compatibilidade e limites das integrações |
| [Agentes](agentes/README.md) | Contratos de papéis para análise, documentação e revisão |
| [Procedimentos reutilizáveis](skills/README.md) | Método de análise rastreável, independente de ferramenta |
| [Prompts](prompts/README.md) | Modelos para tarefas recorrentes |
| [Segurança](seguranca/README.md) | Privacidade, dados sintéticos e comunicação responsável |
| [Governança](governanca/contribuicao.md) | Participação, revisão humana e contribuição |
| [Atualização e consumo](governanca/atualizacao-e-consumo.md) | Uso comunitário, atualização das fontes e aplicação em outros projetos |

## Uso com ferramentas de inteligência artificial

Para começar no ChatGPT, baixe e anexe somente [ECIDADE_CONTEXTO_CHATGPT.md](ECIDADE_CONTEXTO_CHATGPT.md). Esse arquivo reúne contexto, orientações, prompt inicial e índice completo dos documentos. As fontes detalhadas são recuperadas conforme a tarefa e a disponibilidade de acesso.

A documentação canônica permanece neste repositório. Cada ferramenta utiliza um adaptador e precisa ter acesso aos arquivos relevantes para a tarefa.

| Ferramenta | Ponto de partida |
| --- | --- |
| ChatGPT | [Passo a passo com links copiáveis, Projetos, arquivos e prompts](ferramentas/chatgpt/README.md) |
| OpenAI Codex | [Uso local, contexto e instruções AGENTS.md](ferramentas/codex/README.md) |
| VS Code / GitHub Copilot | [Workspace, instruções e referências de arquivos](ferramentas/copilot/README.md) |
| Claude Code | [Contexto local e instruções CLAUDE.md](ferramentas/claude/README.md) |
| Outras LLMs | [Uso independente de fornecedor](ferramentas/outras-llms/README.md) |

Exemplo de solicitação:

```text
Consulte a Base de Conhecimento e-Cidade e os arquivos disponíveis.
Alvo: <distribuição, repositório e commit>.
Objetivo: <descrever a tarefa>.
Informe quais fontes foram lidas e cite caminhos e revisões.
Separe fatos verificados, hipóteses, propostas e pendências.
Não apresente leitura documental como teste ou homologação.
```

Informar uma URL não garante leitura integral ou atualização automática. Uploads representam a revisão enviada. A base documenta possibilidades futuras de RAG/MCP, sem implementar esses serviços.

## Consultar a base localmente

Para ler e atualizar a documentação, é necessário Git; um editor como VS Code é opcional. PHP, banco de dados e Docker dependem do projeto de código que será analisado, conforme o [guia de desenvolvimento](desenvolvimento/README.md).

Exemplo no Windows:

```powershell
git clone https://github.com/e-cidade/base-conhecimento.git C:\ecidade\base-conhecimento
cd C:\ecidade\base-conhecimento
git status
code .
```

Para atualizar uma cópia existente, confira primeiro se há alterações locais:

```powershell
git status
git switch main
git pull --ff-only
```

Se houver mudanças locais ou divergência, revise a situação antes de continuar. O comando de atualização não resolve conflitos automaticamente.

Mantenha documentação e código em pastas separadas. No VS Code, use **File → Add Folder to Workspace** para reunir as pastas no mesmo workspace. Confirme explicitamente quais instruções e documentos cada ferramenta consegue acessar.

Para contribuir, crie uma branch de tarefa e siga o guia da comunidade. A branch main reúne o conteúdo integrado; isso não significa que uma release ou tag tenha sido publicada.

## Colabore com a comunidade

Contribuições podem começar por uma correção pequena: um link desatualizado, uma explicação mais clara, uma diferença entre versões ou um procedimento validado com dados sintéticos.

1. Consulte o conteúdo existente e identifique a lacuna.
2. Registre contexto, distribuição, revisão e fontes verificáveis.
3. Proponha uma alteração focada por issue ou Pull Request.
4. Informe o que foi validado e o que continua pendente.
5. Participe da revisão antes da integração.

Veja o [guia de contribuição](governanca/contribuicao.md) e as [instruções para agentes](AGENTS.md). Para alterações funcionais de uma distribuição, siga o repositório de origem indicado no inventário; mirrors preservam autoria e encaminhamento upstream.

## Qualidade, transparência e segurança

Cada informação deve distinguir o que foi verificado, proposto ou ainda precisa de validação. Fontes por commit permitem reconstruir a origem de uma conclusão.

O inventário inicial cobre 19 repositórios consultados em **20/11/2026**, com leitura documental e amostral de código e configuração. A cobertura e suas limitações estão registradas no [inventário](documentacao/fontes/repositorios-e-cidade.md) e no [relatório de preparação](documentacao/relatorio-v0.1.0.md). A documentação não substitui testes no ambiente alvo ou homologação de uma implantação.

Validação documental disponível, com Node.js:

```powershell
node ferramentas/validar-documentacao.mjs
```

Não inclua credenciais, dados pessoais ou dados reais de municípios nas contribuições. Consulte as [orientações de segurança](seguranca/README.md) antes de compartilhar material ou comunicar uma vulnerabilidade.

## Autoria e licenciamento

Preserve autoria, origem e restrições dos materiais consultados. O estado da proposta e das decisões pendentes de licenciamento está documentado em [licenciamento](governanca/licenciamento.md).

Até a definição e publicação da licença aplicável, não presuma autorização irrestrita para redistribuir conteúdos. Materiais externos conservam suas próprias licenças e atribuições.
