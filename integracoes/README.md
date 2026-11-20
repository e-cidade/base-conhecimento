# Integrações

Estado e fontes: [inventário](../documentacao/fontes/repositorios-e-cidade.md), 2026-11-20.

## Nextcloud documental

nextcloud-integrator separa núcleo PHP em src/, adaptadores em modules/ e aplicativo em nextcloud-app/. O objetivo declarado é manter bytes no Nextcloud e referências/metadados transacionais no ERP. O README classifica o projeto como MVP experimental, sem prontidão para produção.

O CLI declara list, inspect, scaffold e verify. Scaffold cria estrutura; verify verifica correspondência de origem e não substitui homologação de todos os fluxos documentais. Não executar adaptação ou migração automaticamente.

## Autenticação

ecidade_login é outro projeto: integra login do e-Cidade ao Nextcloud com dependência de user_backend_sql_raw. O manifesto consultado declara Nextcloud 28–30. Isso não comprova compatibilidade com versões posteriores, MFA/OIDC ou todos os forks.

Revisão de autenticação e tratamento de credenciais é requisito de homologação. Não reproduzir exemplos de credenciais nem converter hashes em recomendação genérica de token.

## Contrato exigido para nova integração

Registrar distribuição/commit, interfaces de leitura e escrita, autenticação, autorização institucional, formato dos dados, validação, idempotência, erros, retentativa, auditoria e retenção. Definir cenários sintéticos de sucesso, falha parcial, indisponibilidade e reversão.

SSO, APIs, MCP e RAG só devem ser descritos como implementados quando houver código/configuração e teste rastreáveis. Esta base não implementa esses serviços.
