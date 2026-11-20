# Claude e Claude Code — guia prático e-Cidade

Guia comunitário para instituições, empresas, profissionais e voluntários. Verificação documental: **20/11/2026**. Claude em conversa e Claude Code têm acesso e formas de contexto diferentes.

## 1. Escolher o caminho

| Ambiente | Começo recomendado |
| --- | --- |
| Conversa com suporte a anexos | Anexar somente o arquivo de entrada |
| Claude Code local | Abrir o checkout e ler CLAUDE.md |
| Cliente com acesso remoto | Disponibilizar os arquivos no ambiente em execução |

## 2. Links copiáveis

- [Entrada única e índice](../../ECIDADE_CONTEXTO_CHATGPT.md)
- [Adaptador CLAUDE.md](../../CLAUDE.md)
- [Quickstart oficial Claude Code](https://code.claude.com/docs/en/quickstart)
- [Memória e instruções de projeto](https://code.claude.com/docs/en/memory)

```text
https://github.com/e-cidade/base-conhecimento
https://code.claude.com/docs/en/quickstart
https://code.claude.com/docs/en/memory
```

## 3. Conversa com anexo único

1. Baixe ECIDADE_CONTEXTO_CHATGPT.md pelo link da seção 2 e salve o arquivo bruto.
2. No cliente de conversa utilizado, procure adicionar arquivo, quando essa função existir.
3. Anexe apenas esse documento e envie o prompt abaixo.
4. Se houver área de instruções persistentes, coloque a orientação curta da seção 6.
5. Confirme se houve leitura do anexo e recuperação das fontes do índice.

O nome do arquivo foi preservado como entrada única da base; seu conteúdo de contexto e índice também pode ser usado por outras LLMs. Os passos são genéricos para clientes com anexos, sem promessa de recurso disponível em toda conta.

```text
Leia o arquivo ECIDADE_CONTEXTO_CHATGPT.md anexado.
Minha tarefa é <objetivo>, na distribuição/revisão <alvo>.
Use o índice para recuperar somente as fontes necessárias, se houver acesso.
Informe arquivos realmente lidos, revisão e limitações.
Não presuma leitura de links externos pelo simples fato de estarem no anexo.
Se não houver recuperação, solicite somente o trecho específico que falta.
Faça primeiro uma análise com evidências e pendências.
```

## VS Code com Claude Code: extensão própria

### Instalar e abrir

1. No VS Code, abra **Extensions / Extensões**.
2. Localize a extensão oficial de **Claude Code**, verificando o publicador e o link de instalação na documentação oficial.
3. Instale-a e conclua a autenticação solicitada.
4. Abra a pasta da base por **File → Open Folder**.
5. Abra o painel da extensão pelo ícone ou pelo comando disponível na paleta de comandos.
6. Para consultar código, acrescente a pasta do checkout por **File → Add Folder to Workspace** e salve o workspace.

Esse painel é da extensão Claude Code. Selecionar um modelo no Copilot não garante o mesmo comportamento, instruções ou permissões da extensão própria.

### Adicionar contexto e conferir instruções

Abra ECIDADE_CONTEXTO_CHATGPT.md e informe seu caminho no prompt. Use o seletor de arquivos/referências da extensão quando disponível; confirme a leitura efetiva.

```text
Estou usando Claude Code no VS Code.
Leia <caminho da base>/ECIDADE_CONTEXTO_CHATGPT.md e CLAUDE.md aplicável.
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

Referência oficial: [Claude Code no VS Code](https://code.claude.com/docs/en/vs-code), consultada em 20/11/2026. Roteiro conferido documentalmente; interfaces não testadas em todas as versões.

## 4. Claude Code no terminal

Instale a ferramenta pelo quickstart oficial e conclua seu login. Evite copiar comandos de instalação antigos sem verificar a orientação atual para seu sistema.

Com Git e a CLI disponíveis:

```powershell
git clone https://github.com/e-cidade/base-conhecimento.git C:\ecidade\base-conhecimento
cd C:\ecidade\base-conhecimento
claude
```

Se já houver clone, atualize-o em vez de repetir a clonagem. Se claude não for reconhecido, verifique instalação/PATH. No terminal da ferramenta, envie:

```text
Leia CLAUDE.md, AGENTS.md e ECIDADE_CONTEXTO_CHATGPT.md.
Confirme as instruções e fontes efetivamente carregadas.
Identifique o commit da base e selecione pelo índice os documentos da tarefa.
Objetivo: <objetivo>.
Código alvo: <caminho, origem e commit>.
Nesta etapa faça apenas análise.
```

## 5. Contexto em CLAUDE.md

O CLAUDE.md da base aponta para regras canônicas. Não é prova de que todos os documentos foram carregados. Memória de conversas e instruções de projeto têm funções diferentes; confirme sempre a revisão.

No código consumidor, preserve CLAUDE.md existente. Se a equipe optar por um ponteiro para a base, acrescente apenas caminho e rotina de consulta, com escopo claro. Não suponha que instruções de uma pasta irmã sejam carregadas automaticamente.

Para arquivos fora do projeto, use as permissões e mecanismos suportados pela versão instalada. Peça leitura de um arquivo antes de depender do acesso; não conceda acesso amplo por padrão.

## 6. Instrução reutilizável

```text
Consulte a base comunitária e-Cidade pela entrada ECIDADE_CONTEXTO_CHATGPT.md.
Identifique distribuição, origem e commit antes de concluir.
Leia as fontes relevantes, cite caminhos/revisões e declare acesso parcial.
Diferencie leitura, teste, hipótese e proposta.
Preserve as instruções locais, segurança, autoria e revisão humana.
```

## 7. Revisão e investigação

```text
Investigue <caso sintético> no commit <sha>.
Trace entrada, autorização, regra, persistência e saída nos arquivos acessíveis.
Traga hipóteses e as evidências que confirmam ou refutam cada uma.
Proponha correção mínima e validação de regressão.
Não execute migrações nem altere produção.
```

Quando uma implementação for autorizada, examine os comandos propostos, o diff e os resultados. Não trate uma análise textual como reprodução concluída.

## 8. Diagnóstico

| Problema | Como corrigir |
| --- | --- |
| Apenas o anexo foi lido | Recupere os documentos do índice ou forneça o trecho necessário |
| CLAUDE.md não foi identificado | Confira pasta da sessão e descoberta de instruções |
| O modelo diz lembrar uma versão | Peça o commit e nova leitura da fonte |
| Pasta externa não acessível | Disponibilize arquivos específicos dentro do escopo autorizado |
| Comando CLI não encontrado | Consulte instalação oficial do sistema usado |

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

## Fontes e validação

Quickstart e memória do Claude Code, nos links iniciais, consultados em 20/11/2026. Roteiro de CLI conferido documentalmente, sem sessão real de Claude executada nesta preparação. Os exemplos de conversa com anexos são independentes de interface.
