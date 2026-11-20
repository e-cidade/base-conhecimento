# VS Code e GitHub Copilot — passo a passo e-Cidade

Guia para a comunidade, instituições, empresas, profissionais e voluntários. Verificação documental: **20/11/2026**. Nomes de comandos e recursos variam conforme versão e conta.

## 1. Links úteis

- [Base comunitária](https://github.com/e-cidade/base-conhecimento)
- [Entrada única e índice](../../ECIDADE_CONTEXTO_CHATGPT.md)
- [Instruções do repositório](../../.github/copilot-instructions.md)
- [Configuração oficial do Copilot](https://code.visualstudio.com/docs/copilot/setup)
- [Contexto no Chat](https://code.visualstudio.com/docs/copilot/chat/copilot-chat-context)
- [Instruções personalizadas](https://code.visualstudio.com/docs/copilot/customization/custom-instructions)

```text
https://github.com/e-cidade/base-conhecimento
https://code.visualstudio.com/docs/copilot/setup
https://code.visualstudio.com/docs/copilot/chat/copilot-chat-context
https://code.visualstudio.com/docs/copilot/customization/custom-instructions
```

## 2. Preparar o editor

1. Instale/abra o VS Code e configure o Copilot conforme a documentação oficial.
2. Conclua o login na conta autorizada pelo fluxo exibido.
3. Confirme que o painel de Chat está disponível.
4. Se faltar acesso ao recurso, confira conta, políticas da organização e disponibilidade da instalação.

Não é necessário instalar o ERP para ler a documentação.

## 3. Abrir a base e o código

Com Git disponível:

```powershell
git clone https://github.com/e-cidade/base-conhecimento.git C:\ecidade\base-conhecimento
cd C:\ecidade\base-conhecimento
code .
```

No VS Code, use **File → Add Folder to Workspace** para adicionar o checkout da distribuição. Salve o workspace e confira qual pasta contém cada arquivo. Mantenha documentação e código em diretórios separados.

Confirme em cada repositório:

```powershell
git status
git branch --show-current
git rev-parse HEAD
```

## 4. Fornecer contexto explicitamente

1. Abra ECIDADE_CONTEXTO_CHATGPT.md no editor.
2. Abra o Chat e use **Add Context / Adicionar contexto**, arraste o arquivo quando suportado ou selecione-o pelo mecanismo de referência de arquivos disponível.
3. Se usar #, escolha o arquivo oferecido pelo seletor; escrever apenas seu nome não comprova inclusão.
4. Envie o prompt abaixo.
5. Confira os arquivos mencionados nas referências da resposta e confronte-os com a solicitação.

```text
Use ECIDADE_CONTEXTO_CHATGPT.md como entrada da base comunitária.
Leia seu índice e selecione os documentos relevantes para <objetivo>.
Alvo: <pasta, repositório e commit da distribuição>.
Confirme quais arquivos da base e do código conseguiu ler.
Cite caminhos e revisões. Não generalize recursos de outros forks.
Neste momento faça apenas análise, sem editar arquivos.
```

Não é necessário anexar todos os documentos inicialmente. A ferramenta deve recuperar os detalhes da tarefa pelo índice; quando não conseguir, informe o arquivo específico que falta.

## 5. Instruções do repositório

Neste checkout, .github/copilot-instructions.md referencia as regras comuns. Confirme se o cliente aplica instruções personalizadas e quais referências aparecem na resposta.

Em um workspace com várias pastas, não presuma que instruções de uma pasta governem a outra. No repositório consumidor, preserve suas instruções. Uma referência à base pode ser acrescentada pela equipe, com caminho e revisão, sem duplicar a política inteira.

Modelo de orientação para acrescentar ao arquivo existente, quando adequado:

```text
Consulte a base e-Cidade em <caminho local>.
Comece por ECIDADE_CONTEXTO_CHATGPT.md e use seu índice.
Confirme acesso e revisão; respeite as regras deste repositório consumidor.
Cite evidências e separe fatos, hipóteses e pendências.
```

## 6. Investigar antes de editar

```text
Analise o erro <descrição e reprodução sintética>.
Rastreie os arquivos do fluxo no commit <sha>.
Explique causa comprovada ou hipóteses ainda abertas.
Proponha alteração mínima e validação proporcional.
Não execute migrations ou comandos de produção.
```

Se houver opção de modo de análise/pergunta, use-a para consulta inicial. Modos de agente podem editar ou executar ferramentas conforme permissões; confira o efeito antes de iniciar.

Para uma mudança autorizada, delimite arquivos e branch. Revise o diff na área de controle de versão e execute os testes adequados. Autocomplete e resposta de Chat não substituem teste.

## 7. Atualizar e conferir

Com alterações locais revisadas:

```powershell
git status
git pull --ff-only
git rev-parse HEAD
```

Se houver divergência, revise antes de continuar. Peça nova leitura quando a base mudar. O workspace não sincroniza uploads, índices ou contexto de todas as conversas automaticamente.

Critério de aceite: arquivos lidos identificados, commits da base/código registrados, afirmações com fontes e testes reais ou ausência de execução declarada.

## 8. Diagnóstico

| Situação | Ação |
| --- | --- |
| Copilot não aparece | Confira configuração, login e políticas da conta |
| Não cita o arquivo de entrada | Adicione-o explicitamente ao contexto |
| Confunde dois README.md | Informe pasta e caminho completo |
| Aplica regras de outra pasta | Confirme escopo das instruções e repositório alvo |
| Sugere uma função inexistente | Exija leitura do símbolo no commit usado |
| Resultado desatualizado | Confira HEAD e reinicie a investigação com as fontes atuais |

## Segurança e limites

Use dados sintéticos e menor privilégio. Não envie credenciais ou dumps reais. Ações destrutivas e produção exigem autorização explícita. Consulte [segurança](../../seguranca/README.md) e [consumo](../../governanca/atualizacao-e-consumo.md).

Fontes oficiais dos links iniciais consultadas em 20/11/2026. Passos verificados documentalmente; não foi testada toda combinação de conta, versão e extensão. Prompts e critérios são orientações próprias da base.
