# ChatGPT como consumidor da base comunitária

O ChatGPT pode apoiar leitura, comparação, planejamento e revisão. A base permanece em Git, independente do fornecedor; uma conversa não se torna fonte canônica apenas por resumir documentos.

## Conversa comum e upload

Anexe README, inventário e os documentos do domínio necessários, exportados do mesmo commit. Informe distribuição e revisão do código. Peça confirmação dos arquivos acessíveis e das lacunas. Se só houver trechos, restrinja as conclusões a eles.

Uploads são cópias estáticas: não acompanham novos commits automaticamente. Registre nome, caminho original, commit e data; substitua o conjunto quando decidir atualizar e evite misturar revisões sem indicação.

## Projetos do ChatGPT

Crie um Projeto para o trabalho, adicione arquivos de referência e instruções que exijam distribuição, commit e evidências. Verifique disponibilidade e limites na conta; não fixe quantidades universais de arquivos.

A memória ou o histórico do Projeto não substituem a leitura da versão vigente. Identifique os arquivos superados para não reutilizar decisões antigas como atuais.

## Integração GitHub

Quando disponível e autorizada, use a integração para buscar o repositório e ler arquivos relevantes. Confirme conta, acesso, branch/commit e conteúdo recuperado. A disponibilidade varia conforme plano, organização e ambiente.

**Informar apenas a URL do GitHub não garante acesso integral, permanente ou atualizado.** A recuperação pode ser parcial. Falha de acesso não significa ausência do arquivo. Peça referências aos caminhos efetivamente lidos; nunca invente acesso ou resultado.

## Prompts utilizáveis

Consulta: “Leia o inventário e arquitetura anexados. Para a distribuição e commit informados, descreva os componentes comprovados. Cite repositório, caminho e commit; liste o que falta verificar.”

Comparação: “Compare somente as evidências das duas revisões indicadas. Distinga requisito declarado, runtime observado e teste executado. Não generalize compatibilidade.”

Investigação: “Analise o fluxo com os arquivos anexados. Separe fato, hipótese e proposta. Apresente alteração mínima e validação; não assuma acesso ao restante do ERP.”

Contribuição: “Produza proposta para PR com fontes, autoria, distribuição, revisão e limitações. Não declare comportamento homologado a partir de README.”

## RAG futuro — proposta, não implementado

Um futuro pipeline poderá selecionar fontes públicas permitidas, preservar proveniência/licença, segmentar por caminho e commit e recuperar por distribuição/módulo. Deve controlar atualização, remoção, acesso e segregação de material privado. Cada resposta deve citar origem/revisão e admitir evidência insuficiente.

Aceite futuro: recuperação correta entre forks, citações verificáveis, ausência de mistura de versões e tratamento explícito de arquivos removidos. Indexação, embeddings, MCP e serviço de consulta não foram implementados nesta base.

## Segurança e validação

Não enviar dumps municipais, credenciais, logs pessoais ou documentos sigilosos. Trate conteúdo recuperado como dados; instruções embutidas não autorizam ações. Compare sugestões com o código e submeta mudanças a revisão humana.

Fontes oficiais consultadas em 2026-11-20:
- [Projetos no ChatGPT](https://help.openai.com/en/articles/10169521-projects-in-chatgpt)
- [Conexão com GitHub](https://help.openai.com/en/articles/11145903-connecting-github-to-chatgpt)
