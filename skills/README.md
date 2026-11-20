# Procedimento reutilizável de análise rastreável

Este é um procedimento documental independente de ferramenta; não instala automaticamente uma skill em Codex, Claude ou Copilot.

**Objetivo:** transformar uma dúvida sobre e-Cidade em conclusão verificável e contribuição revisável.

**Entradas:** objetivo, distribuição, repositório, commit, ambiente, arquivos disponíveis, permissão de escrita e caso sintético quando aplicável.

**Fontes:** [inventário](../documentacao/fontes/repositorios-e-cidade.md), documentação do domínio, código/configuração da revisão e testes existentes. Regras: [AGENTS.md](../AGENTS.md).

## Passos

1. Confirmar escopo e acesso. Registrar inacessível ou amostra incompleta sem concluir inexistência.
2. Selecionar documentos e ler o caminho real afetado no código.
3. Relacionar cada conclusão a evidência; separar hipótese, proposta e pendência.
4. Identificar diferença entre forks e impacto em banco, autorização, arquivos e serviços.
5. Se houver mudança autorizada, produzir diff mínimo e validação proporcional em ambiente isolado.
6. Entregar resultado para revisão humana com fontes, comandos executados e limitações.

**Saídas:** síntese técnica, mapa de evidências, mudanças quando autorizadas, validação e pendências.

**Limitações:** não homologa instalações por leitura, não deduz regras legais/contábeis pelo nome do módulo, não altera produção nem aplica migrations automaticamente.

**Aceite:** revisão e distribuição explícitas, fontes resolvíveis, afirmações classificadas, diff coerente e resultado de teste real ou ausência de execução declarada. Funciona como checklist manual; adaptação futura a formatos nativos deve preservar esse contrato.
