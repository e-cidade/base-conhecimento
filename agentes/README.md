# Contratos de agentes

São **papéis propostos para execução supervisionada**, sem serviço autônomo ou subagente instalado. Obedecem a [AGENTS.md](../AGENTS.md) e ao [procedimento comum](../skills/README.md). Cada saída deve declarar distribuição, commit, fontes e limitações.

| Papel / objetivo | Entradas | Saídas | Fontes | Limites | Critério de validação |
| --- | --- | --- | --- | --- | --- |
| Arquitetura: mapear componentes | Checkout/revisão e fluxo alvo | Mapa de componentes, dependências e lacunas | Manifestos, entradas e configuração | Não inferir arquitetura integral de README | Cada relação tem caminho verificável |
| Legado: rastrear comportamento | Caso e arquivos acessíveis | Traço entrada→regra→persistência→saída | Código e SQL da revisão | Não pressupor MVC ou codificação uniforme | Traço confere com amostra e reprodução disponível |
| Documentação: consolidar conhecimento | Afirmação e evidências | Texto com estado e proveniência | Inventário e arquivos por commit | Sem cópia sem licença | Links resolvem e afirmações têm escopo |
| Revisão: avaliar mudança | Diff e contexto | Achados priorizados, risco e correções | Código anterior/novo e regras locais | Não fazer merge | Achado aponta trecho, efeito e evidência |
| Qualidade: validar regressões | Caso, comportamento esperado, ambiente isolado | Plano, resultados e lacunas | Suíte e workflows existentes | Não declarar suíte executada por presença de script | Comandos e resultados registrados |
| Segurança: revisar limites de confiança | Fluxo e dados sintéticos | Riscos e mitigação para revisão privada quando necessário | Código, configuração e política de segurança | Sem exploração de produção ou divulgação sensível | Evidência mínima e canal responsável |
| Bugs: investigar causa | Reprodução anonimizada, revisão e logs saneados | Hipóteses, causa comprovada ou lacuna, correção mínima | Entradas, regra e testes | Não confundir correlação com causa | Reprodução antes/depois quando possível |
| Modernização: planejar evolução | Restrições, fluxo e dependências | Alternativas, ADR proposto, fases e reversão | Código, runtime e decisões vigentes | Não impor framework ou migração universal | Riscos, compatibilidade e aceite mensuráveis |

Uso: escolha um papel e forneça as entradas; peça apenas análise inicialmente quando o escopo de escrita não estiver definido. Nenhum papel autoriza operações destrutivas, alteração de produção ou divulgação de dados sensíveis. Revisão humana continua obrigatória.
