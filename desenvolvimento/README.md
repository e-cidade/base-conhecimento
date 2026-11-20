# Desenvolvimento e ambiente local

Fontes: [inventário por commit](../documentacao/fontes/repositorios-e-cidade.md). Esta seção prepara investigação; instalações do ERP **não foram executadas** nesta auditoria.

## Pré-requisitos por componente

| Linha | Requisitos declarados/observados | Fonte |
| --- | --- | --- |
| Contass | PHP ^7.4; Laravel ^8; README cita Apache 2 e PostgreSQL 12.5.x | composer.json, README e INSTALL |
| DBSeller | PHP 5.6/Apache no Dockerfile; PostgreSQL 16 no Dockerfile do banco; aplicação ecidade/ | Compose e Dockerfiles |
| Sertão Digital | PHP >=5.6.4 no trecho do manifesto; serviço PHP 5.6 no Compose | Manifesto/Compose |
| CPD | PHP >=5.6.4 e Laravel 5.4.* | composer.json |
| Portal Servidor | PHP ^8.2, Laravel ^12, Vue ^3.5, Vite ^7; CI usa PHP 8.4 e Node 22 | Manifestos e workflow tests.yml |
| Integrator | PHP >=5.6.4 no núcleo; ferramentas de qualidade isoladas com requisitos próprios | composer.json e workflow PHPUnit |
| Base de conhecimento | Git; editor opcional | Arquivos Markdown desta branch |

## Preparação segura

Clone a distribuição indicada no inventário em pasta separada, registre `git rev-parse HEAD` e consulte suas instruções. Mirrors encaminham mudanças funcionais ao upstream. No Windows, ambiente Linux em WSL2/Docker pode ser considerado conforme a distribuição; isso é recomendação, não homologação Windows do ERP.

Antes de instalar dependências, revise scripts Composer, origem dos pacotes e lockfile. Configure dados sintéticos, portas, persistência e acesso restrito. Não use conexão municipal real. Não execute automaticamente restauração, migrations ou comandos administrativos copiados de manuais.

No Compose DBSeller/Sertão Digital foram observadas configurações permissivas de laboratório, persistência comentada e healthcheck que precisam de revisão local. README e volume Compose não descrevem exatamente o mesmo caminho. Não publicar o ambiente como serviço de produção sem projeto próprio.

O INSTALL Contass ainda aponta para o hub atual como código. O README 2018 contém destinos de download divergentes e referências antigas. As lacunas devem ser corrigidas no projeto responsável antes de oferecer receita de instalação integral.

## Código e depuração

Mapeie entrypoint e caminho real antes de editar. Na Contass, comece por FrontController.php; na DBSeller, examine index.php e bootstrap/configuração da revisão. Respeite encoding e finais de linha do legado. Investigue SQL parametrizado, autorização institucional e escopo de transações em cada fluxo, sem presumir uniformidade.

## Testes e qualidade

| Projeto | Comando declarado / evidência | Condição |
| --- | --- | --- |
| nextcloud-integrator | composer lint, composer test, composer check | Ferramentas e dependências isoladas precisam estar preparadas conforme o projeto |
| portal-servidor | composer test; CI executa vendor/bin/phpunit após preparação/build | Usar ambiente de teste isolado |
| modulos-ecidade | npm test (node --test) | Não confundir catálogo com testes do ERP |
| site | composer test, cs:check e test:build | Ver requisitos PHP/Node do próprio site |
| Contass | composer.json contém test | Caminho do executável/suíte precisa ser confirmado antes de recomendar execução |
| CPD | composer test aponta para vendor/bin/phpunit | Cobertura e execução não verificadas |

Nenhuma suíte desses projetos foi executada nesta auditoria. Presença de scripts e workflows não comprova sucesso. Para mudanças reais, use as validações existentes do projeto e registre comando, ambiente, resultado e limitações.
