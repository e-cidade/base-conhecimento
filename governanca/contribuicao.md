# Guia de contribuição

Esta base pertence à comunidade e-Cidade. Alterações documentais seguem revisão humana. Propostas de fluxo aqui descritas precisam de aprovação comunitária; não representam proteção de branch já configurada.

1. Descreva problema, distribuição/revisão, fontes e escopo em issue ou PR.
2. Antes de editar, consulte documentação existente e AGENTS.md. Reaproveite páginas e evite duplicações.
3. Trabalhe em branch de tarefa e preserve histórico/autoria.
4. Separe fatos, hipóteses, propostas e pendências. Use links por commit para evidências.
5. Revise licenças, segurança, links e coerência entre adaptadores.
6. Abra ou atualize PR com resumo, comandos executados, resultados, riscos e limitações.
7. Aguarde revisão de mantenedores; resolver comentários antes de merge. Não considerar texto gerado por IA como aprovação.

## Branches e commits

Recomendação para esta base: main integrada por PR, branches docs/, fix/ ou feature/ para trabalho. A preparação v0.1.0 continua em feature/estrutura-inicial-base-conhecimento e PR #1. Não criar outro PR, fazer merge ou tag nesta preparação.

Cada consumidor/distribuição tem seu fluxo: não impor dev→hml→main ou outro processo empresarial à comunidade. Para mirrors, mudanças funcionais devem seguir ao upstream indicado no inventário.

Commits: título curto com tipo e finalidade, por exemplo docs: registrar requisitos por distribuição. Regras específicas como assinatura/DCO devem ser confirmadas no projeto destinatário; esta entrega não altera regras do GitHub.

## Revisão e manutenção

Revisor técnico confirma fontes, escopo e riscos; mantenedor decide integração e governança. Use draft quando houver bloqueador objetivo e liste-o. “Pronto para revisão” não equivale a licença aprovada, homologação nem versão lançada.

Consulte [atualização e consumo](atualizacao-e-consumo.md), [licenciamento](licenciamento.md) e [segurança](../seguranca/README.md).
