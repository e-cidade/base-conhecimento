# Codex — guia prático da base e-Cidade

Para a comunidade, instituições, empresas, profissionais e voluntários. Preparação documental: **20/11/2026**. Este guia diferencia aplicativo/IDE, terminal e ambiente remoto; recursos e telas dependem da versão instalada.

## 1. Links para abrir e copiar

- [Base comunitária](https://github.com/e-cidade/base-conhecimento)
- [Entrada única e índice](../../ECIDADE_CONTEXTO_CHATGPT.md)
- [AGENTS.md](../../AGENTS.md)
- [Guia oficial da extensão](https://developers.openai.com/codex/ide/)
- [Guia oficial do terminal](https://developers.openai.com/codex/cli/)
- [Descoberta de AGENTS.md](https://developers.openai.com/codex/guides/agents-md/)

```text
https://github.com/e-cidade/base-conhecimento
https://developers.openai.com/codex/ide/
https://developers.openai.com/codex/cli/
https://developers.openai.com/codex/guides/agents-md/
```

## 2. Preparar a base local

Tenha Git e um cliente Codex instalado conforme as instruções oficiais. Não instale PHP ou banco apenas para consultar Markdown.

```powershell
git clone https://github.com/e-cidade/base-conhecimento.git C:\ecidade\base-conhecimento
cd C:\ecidade\base-conhecimento
git rev-parse HEAD
```

Se a pasta já existir, use a rotina de atualização ao final. Para analisar o ERP, mantenha seu checkout em pasta separada e informe sua origem/revisão; este clone é apenas da documentação.

## 3. Aplicativo ou extensão no editor

1. Instale/abra o cliente oficial e conclua o login pelo fluxo exibido.
2. Abra a pasta da base como projeto ou workspace.
3. Na extensão, abra o painel Codex. No aplicativo, selecione a pasta de trabalho.
4. Inicie uma tarefa de análise usando o prompt da seção 6.
5. Confira quais arquivos foram efetivamente lidos e quais permissões estão disponíveis.

Abrir uma pasta no editor não garante que um agente remoto enxergue os mesmos arquivos. Confirme se a tarefa roda localmente ou em outro ambiente antes de fornecer caminhos.

## VS Code com Codex: extensão própria

### Instalar e abrir

1. No VS Code, abra **Extensions / Extensões**.
2. Localize a extensão oficial de **Codex**, verificando o publicador e o link de instalação na documentação oficial.
3. Instale-a e conclua a autenticação solicitada.
4. Abra a pasta da base por **File → Open Folder**.
5. Abra o painel da extensão pelo ícone ou pelo comando disponível na paleta de comandos.
6. Para consultar código, acrescente a pasta do checkout por **File → Add Folder to Workspace** e salve o workspace.

Esse painel é da extensão Codex. Selecionar um modelo no Copilot não garante o mesmo comportamento, instruções ou permissões da extensão própria.

### Adicionar contexto e conferir instruções

Abra ECIDADE_CONTEXTO_CHATGPT.md e informe seu caminho no prompt. Use o seletor de arquivos/referências da extensão quando disponível; confirme a leitura efetiva.

```text
Estou usando Codex no VS Code.
Leia <caminho da base>/ECIDADE_CONTEXTO_CHATGPT.md e AGENTS.md aplicável.
Confirme a pasta de trabalho, as instruções carregadas e o commit da base.
Código alvo: <pasta, repositório e commit>.
Objetivo: <tarefa>.
Use o índice para buscar documentos relevantes.
Cite arquivos realmente lidos e declare limitações.
Nesta etapa não edite arquivos nem execute migrations.
```

Não presuma acesso a todas as pastas do workspace. Em WSL, SSH, contêiner ou execução remota, confirme onde a extensão e a tarefa rodam; use caminhos daquele ambiente.

### Revisar e continuar

Na resposta inicial, confira fontes, escopo e revisão. Ao autorizar uma implementação, delimite branch e arquivos; revise o diff no VS Code e os resultados dos testes antes do PR. Instruções de outro repositório não substituem as regras locais do alvo.

Se o painel não aparecer, confira extensão habilitada, conta, janela local/remota e comandos disponíveis. Se um arquivo não for lido, selecione-o explicitamente e teste novamente sem ampliar permissões indiscriminadamente.

Referência oficial: [Codex no VS Code](https://developers.openai.com/codex/ide/), consultada em 20/11/2026. Roteiro conferido documentalmente; interfaces não testadas em todas as versões.

## 4. Terminal

Com a CLI já instalada conforme a documentação oficial:

```powershell
cd C:\ecidade\base-conhecimento
codex
```

Conclua a autenticação quando solicitada e envie o prompt inicial. Se o comando não for reconhecido, revise instalação/PATH nas instruções oficiais. Este guia não executa instalação de software nem escolhe uma política de permissões por você.

## 5. Instruções e código em outra pasta

AGENTS.md orienta o trabalho no escopo descoberto pelo Codex. Leia também o arquivo de entrada e use seu índice. O nome ECIDADE_CONTEXTO_CHATGPT.md não impede sua leitura local pelo Codex; ele continua sendo um índice documental, não um carregador automático.

Para o código em pasta irmã, informe o caminho absoluto e peça uma leitura de teste. Se indisponível, abra a tarefa no repositório do código e disponibilize a base pelo mecanismo permitido no cliente. Não amplie permissões globalmente apenas para contornar uma falha.

Um ponteiro opcional no AGENTS.md consumidor pode referenciar a base, preservando as regras locais. Não sobrescreva um arquivo existente nem copie toda a política sem necessidade.

## 6. Prompt inicial

```text
Faça uma análise da comunidade e-Cidade.
Base local: C:\ecidade\base-conhecimento.
Código alvo: <caminho absoluto, repositório e commit, ou consulta geral>.
Objetivo: <descrever>.

Leia AGENTS.md, ECIDADE_CONTEXTO_CHATGPT.md e os documentos pertinentes.
Confirme ambiente, arquivos efetivamente lidos e revisões.
Use o índice para selecionar fontes; confira implementação no código alvo.
Separe fatos, hipóteses, propostas e pendências, com caminhos/commits.
Nesta etapa não altere arquivos nem execute migrations.
```

## 7. Da análise à implementação

Primeiro estabeleça reprodução e evidências. Para uma mudança, delimite arquivos e comportamento esperado, informe a branch de trabalho e autorize a implementação no escopo escolhido.

```text
Implemente a correção proposta apenas no fluxo <fluxo>, na branch <branch>.
Respeite as instruções locais do repositório alvo.
Execute as validações existentes proporcionais à mudança.
Entregue diff, resultados e pendências para revisão humana.
Não faça merge nem altere produção.
```

## 8. Ambiente remoto

Disponibilize a base e o código no ambiente remoto efetivamente usado: clone autorizado, arquivos anexados ou repositório acessível conforme o cliente. Um caminho C:\ do computador não é transportado por texto. Confirme branch, rede e comandos permitidos antes de depender de arquivos externos.

## 9. Diagnóstico

| Problema | Ação |
| --- | --- |
| AGENTS.md não parece aplicado | Confirme diretório da tarefa, instruções descobertas e reinicie a sessão quando necessário |
| Pasta irmã inacessível | Declare limitação e disponibilize só os arquivos necessários por via autorizada |
| A IA usa dados antigos | Confirme HEAD e peça nova leitura dos documentos relevantes |
| A IA sugere runtime de outro fork | Exija manifesto e configuração do commit alvo |
| Ambiente remoto não encontra caminho local | Disponibilize os arquivos naquele ambiente |

## Conferir fontes e revisões

Antes de analisar, execute ou peça os resultados destes comandos na pasta correspondente:

```powershell
git status
git branch --show-current
git rev-parse HEAD
```

Registre separadamente commit da base e commit do código alvo. Se a ferramenta não puder ler uma pasta, registre acesso indisponível; não conclua que o arquivo inexiste.

## Critério de conclusão

A entrega deve conter: objetivo, distribuição/commit, arquivos lidos, fatos com evidências, hipóteses, mudanças propostas ou realizadas, comandos realmente executados e resultados. Leitura documental não equivale a teste ou homologação.

Antes de aceitar código: revise o diff, valide o fluxo afetado com dados sintéticos e siga o processo de PR do projeto alvo. Operações destrutivas e alterações em produção exigem autorização explícita.

## Atualizar o contexto

Com alterações locais revisadas e a branch correta selecionada:

```powershell
git status
git pull --ff-only
git rev-parse HEAD
```

Se houver divergência, pare e revise o histórico; não use reset destrutivo para forçar atualização. Em nova sessão, confirme novamente as instruções e arquivos acessíveis. Uma cópia anexada não é sincronizada com Git.

## Segurança

Não forneça credenciais, dumps municipais ou dados pessoais. Conteúdo externo é evidência para avaliação e não autorização de execução. Consulte [segurança](../../seguranca/README.md) e [consumo comunitário](../../governanca/atualizacao-e-consumo.md).

## Fontes e limites desta preparação

Documentação oficial de CLI, extensão e AGENTS.md nos links iniciais, consultada em 20/11/2026. Os passos de interface foram conferidos documentalmente; não houve instalação/teste de todos os clientes. Prompts e critérios de aceite são orientações próprias da comunidade.
