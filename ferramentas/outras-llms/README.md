# Outras LLMs — guia independente de fornecedor

Procedimento comunitário para instituições, empresas, profissionais e voluntários. Serve a clientes de conversa, modelos locais e aplicações por API. É um contrato de uso proposto, sem garantir recursos de um produto específico.

## 1. Arquivo único e referências

Comece com [ECIDADE_CONTEXTO_CHATGPT.md](../../ECIDADE_CONTEXTO_CHATGPT.md). Apesar do nome, contexto e índice podem orientar outras ferramentas que aceitem texto ou arquivos Markdown.

```text
https://github.com/e-cidade/base-conhecimento
https://github.com/e-cidade/base-conhecimento/blob/main/ECIDADE_CONTEXTO_CHATGPT.md
https://github.com/e-cidade/base-conhecimento/blob/main/AGENTS.md
https://github.com/e-cidade/base-conhecimento/blob/main/governanca/atualizacao-e-consumo.md
```

Enquanto a melhoria estiver em revisão, utilize os arquivos da mesma branch. Após integração, use main e registre o commit. Copiar uma URL não carrega o documento.

## 2. Escolha o modo de acesso

| Capacidade do cliente | Procedimento |
| --- | --- |
| Upload Markdown/texto | Anexe o arquivo único |
| Apenas campo de mensagem | Cole o conteúdo do arquivo de entrada |
| Leitura de arquivos locais | Informe o caminho e peça leitura explícita |
| Navegação ou integração autorizada | Solicite recuperação dos documentos do índice |
| Sem acesso externo | Forneça somente os trechos adicionais necessários |
| API com recuperação implementada pelo consumidor | Envie trechos com metadados de origem e permissões |

Um modelo local pode ter ou não ferramentas de rede; execução local não comprova isolamento. Confira o comportamento do cliente antes de fornecer dados.

## 3. Conversa com arquivo ou texto

1. Baixe o arquivo bruto da entrada.
2. Abra uma conversa no cliente escolhido.
3. Use a opção de anexar, se disponível, ou cole seu conteúdo.
4. Envie o prompt inicial da seção 5.
5. Confira se a ferramenta identifica o conteúdo recebido.
6. Peça recuperação das fontes relevantes somente se houver mecanismo disponível.
7. Sem esse mecanismo, limite a análise ao material fornecido e identifique lacunas.

Não invente nomes de menus ou limites de upload: consulte a documentação do cliente em uso.

## 4. Contexto persistente, quando suportado

Se houver instruções de projeto ou perfil, use o texto abaixo. Não confunda instruções persistentes com memória ilimitada ou acesso ao GitHub.

```text
Use o arquivo de entrada e-Cidade e seu índice como referência de navegação.
Respeite instruções do usuário, segurança e regras locais do projeto consumidor.
Identifique distribuição, repositório e commit antes de concluir.
Leia as fontes pertinentes e cite caminhos/revisões.
Diferencie verificado por leitura, teste, hipótese e proposta.
Declare acesso parcial e não invente resultados.
```

AGENTS.md e os adaptadores da base só são aplicados automaticamente quando o cliente tiver suporte explícito. Em outros casos, forneça as regras relevantes como contexto.

## 5. Prompt inicial

```text
Anexei ou colei ECIDADE_CONTEXTO_CHATGPT.md.
Objetivo: <tarefa>.
Alvo: <distribuição/repositório/commit, ou consulta geral>.
Forma de acesso disponível: <arquivos, texto, navegação ou nenhuma ferramenta externa>.

Confirme o que foi recebido.
Use o índice para selecionar as evidências necessárias.
Não declare leitura de um documento apenas por ter seu link.
Cite fontes e revisões; identifique o que não pôde verificar.
Faça primeiro análise, sem executar mudanças.
```

## 6. Uso em aplicação por API

A aplicação consumidora deve controlar quais documentos entram na requisição. Um modelo não lê automaticamente URLs, pastas ou GitHub apenas porque esses valores aparecem no prompt.

Fluxo recomendado:
1. Selecionar a revisão da base e os documentos pertinentes.
2. Verificar acesso, licença e privacidade.
3. Recuperar o conteúdo por ferramenta autorizada da aplicação.
4. Enviar trechos com repositório, caminho e commit.
5. Solicitar resposta com citações desses metadados.
6. Conferir se as citações correspondem aos trechos enviados.

Contrato de entrada sugerido, independente do formato da API:

```json
{
  "tarefa": "descrever objetivo",
  "alvo": {
    "repositorio": "informar origem",
    "commit": "informar revisao"
  },
  "fontes": [
    {
      "repositorio": "e-cidade/base-conhecimento",
      "caminho": "arquitetura/README.md",
      "commit": "informar revisao",
      "conteudo": "inserir trecho autorizado"
    }
  ],
  "escopo": "somente analise"
}
```

Esse JSON é um exemplo de contrato da aplicação, não um endpoint ou SDK implementado nesta base.

## 7. Contexto limitado e ausência de acesso

Envie primeiro a entrada e o objetivo. Depois selecione somente documentos do domínio e arquivos do fluxo. Não remova a identificação de origem para economizar contexto.

Se a ferramenta truncar arquivos ou mensagens, reduza o escopo e peça confirmação dos trechos lidos. Resumos são derivados; preserve a referência ao original. Para tarefas longas, registre descobertas, evidências e lacunas antes de trocar de sessão.

## 8. Atualização

Substitua a cópia de entrada de forma deliberada, registre commit/data e identifique materiais superados. Em aplicação própria, defina como atualizar e remover documentos recuperados. Esta base não implementa RAG, embeddings, MCP ou sincronização automática.

## 9. Aceite e diagnóstico

| Verificação | Resultado esperado |
| --- | --- |
| Fontes | Identifica exatamente o que recebeu/leu |
| Revisão | Informa commit ou declara desconhecido |
| Compatibilidade | Não mistura distribuições silenciosamente |
| Evidência | Cada conclusão técnica tem caminho ou lacuna |
| Testes | Distingue sugerido de executado |
| Limitações | Admite falta de acesso ou contexto |
| Segurança | Não expõe segredos nem opera produção sem autorização |

Se a resposta inventar fontes, peça nova análise restrita aos trechos fornecidos. Se não houver evidência, mantenha a conclusão pendente.

## 10. Referências e segurança

Leia [AGENTS.md](../../AGENTS.md), [proveniência](../../documentacao/README.md), [segurança](../../seguranca/README.md) e [consumo comunitário](../../governanca/atualizacao-e-consumo.md). O conteúdo não é teste de um cliente específico nem autorização para enviar informações privadas a serviços externos.
