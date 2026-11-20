# Arquitetura e distribuição

Estado: **verificado por leitura estática e amostral**, em 2026-11-20. Fontes e commits: [inventário](../documentacao/fontes/repositorios-e-cidade.md).

## Mapa de responsabilidades

| Componente | Papel observado | Limite |
| --- | --- | --- |
| e-cidade/e-cidade | Hub de descoberta e governança | Não instalar como ERP |
| Contass | Distribuição com código legado e componentes Laravel | Requisitos próprios |
| DBSeller / Sertão Digital / CPD | Linhas representadas por mirrors | Origem mantém autoria e desenvolvimento funcional |
| portal-servidor | Aplicação Laravel/Inertia/Vue separada | Não herda automaticamente runtime do ERP |
| nextcloud-integrator | Núcleo PHP, adaptadores por distribuição e app Nextcloud | MVP experimental |
| ecidade_login | App de autenticação no Nextcloud | Não confundir com armazenamento documental |
| manuais / modulos-ecidade | Acervo e catálogo funcional | Não comprovam implementação de cada recurso |

## Estrutura e dependências

No mirror DBSeller, a aplicação está em `ecidade/`; `docker-compose.yml` monta essa pasta no servidor Apache. O Dockerfile instala PHP 5.6 e o banco usa imagem PostgreSQL 16. O manifesto declara Laravel 5.4.*, extensões PostgreSQL, SOAP/XML e bibliotecas legadas. O index.php usa sessão e bibliotecas de conexão/utilidades. São componentes observados, não prova de que todo fluxo siga MVC.

Na Contass, `FrontController.php` encaminha caminhos API/UI para entradas distintas e mantém caminho legado em app.php. O composer declara Laravel ^8, PHP ^7.4 e autoload em app/, classes/ e src/. A leitura indica arquitetura híbrida; não autoriza afirmar cobertura total de um framework.

CPD declara PHP >=5.6.4 e Laravel 5.4.* no manifesto. O portal-servidor declara PHP ^8.2/Laravel ^12 e frontend Vue/Inertia. Esses requisitos não são intercambiáveis e não comprovam versões efetivamente instaladas: consultar lockfiles, imagens e runtime.

## Decisões antes de modernizar

1. Fixar distribuição, commit, esquema e codificação do banco.
2. Traçar o fluxo real afetado: entrada, sessão/autorização, regra, SQL e saída.
3. Registrar dependências externas, arquivos e tarefas assíncronas efetivamente encontradas.
4. Reproduzir em ambiente isolado e acrescentar validação de regressão proporcional.
5. Propor ADR com alternativas, impacto, migração e reversão; aguardar revisão.

Não há evidência suficiente nesta auditoria para publicar modelo de dados completo, contrato universal de API, diagrama integral ou compatibilidade automática entre forks.
