# Testes Automatizados Banco Web

Este projeto contém testes automatizados end-to-end para a aplicação [Banco Web](https://github.com/juliodelimas/banco-web), utilizando Cypress e JavaScript. O objetivo é validar funcionalidades essenciais do sistema bancário, como login e transferências, contribuindo com a qualidade e segurança da aplicação.

> **Baseado na aula de automação web com Cypress da Mentoria 2.0 do Júlio de Lima.**

---

## Índice
- [Sobre o Projeto](#sobre-o-projeto)
- [Componentes do Projeto](#componentes-do-projeto)
- [Pré-requisitos](#pré-requisitos)
- [Instalação](#instalação)
- [Execução dos Testes](#execução-dos-testes)
- [Relatórios de Teste](#relatórios-de-teste)
- [Estrutura dos Testes](#estrutura-dos-testes)
- [Custom Commands](#custom-commands)
- [Referências](#referências)

---

## Sobre o Projeto

Este repositório foi desenvolvido como parte de um estudo prático de automação de testes web, com foco em boas práticas de organização, reutilização de código e geração de relatórios. Os testes cobrem cenários críticos do fluxo bancário, como autenticação e transferências entre contas.

## Componentes do Projeto

- **Cypress**: Framework principal de automação de testes end-to-end.
- **Custom Commands**: Comandos personalizados para reutilização de ações comuns.
- **cypress-mochawesome-reporter**: Geração de relatórios detalhados dos testes.
- **Estrutura modular**: Separação de comandos, fixtures e casos de teste para melhor organização.

## Pré-requisitos

- Node.js (versão recomendada: 16+)
- npm (gerenciador de pacotes)
- [Banco API](https://github.com/juliodelimas/banco-api) rodando localmente
- [Banco Web](https://github.com/juliodelimas/banco-web) rodando localmente

> **Atenção:** Os testes dependem da execução simultânea da API e da aplicação web.

## Instalação

1. Clone este repositório:
   ```bash
   git clone <url-deste-repo>
   cd banco-web-tests
   ```
2. Instale as dependências:
   ```bash
   npm install
   ```

## Execução dos Testes

1. Certifique-se de que a API e a aplicação web estejam em execução:
   - Banco API: http://localhost:3000
   - Banco Web: http://localhost:4000

2. Execute os testes via Cypress:
   - **Modo interativo (GUI):**
     ```bash
     npx cypress open
     ```
   - **Modo headless (terminal):**
     ```bash
     npx cypress run
     ```

## Relatórios de Teste

Os relatórios são gerados automaticamente com o [cypress-mochawesome-reporter](https://github.com/LironEr/cypress-mochawesome-reporter):

- Após a execução dos testes, acesse o relatório em `cypress/reports/html/index.html`.
- Para gerar o relatório manualmente:
  ```bash
  npx cypress run
  npx mochawesome-merge cypress/reports/*.json > cypress/reports/report.json
  npx marge cypress/reports/report.json -f index -o cypress/reports/html
  ```

## Estrutura dos Testes

```
banco-web-tests/
├── cypress/
│   ├── e2e/                # Casos de teste (specs)
│   │   ├── login.cy.js     # Testes de login
│   │   └── transferencia.cy.js # Testes de transferência
│   ├── fixtures/           # Dados de teste (credenciais, exemplos)
│   └── support/
│       ├── commands/       # Custom Commands organizados por domínio
│       │   ├── common.js
│       │   ├── login.js
│       │   └── transferencia.js
│       ├── commands.js     # Registro dos comandos customizados
│       └── e2e.js          # Configurações globais dos testes
├── cypress.config.js       # Configuração do Cypress
├── package.json            # Dependências e scripts
└── README.md               # Documentação
```

## Custom Commands

Os comandos customizados ficam em `cypress/support/commands/` e são registrados em `cypress/support/commands.js`. Eles facilitam a escrita e manutenção dos testes, abstraindo ações repetitivas.

### Exemplos de Custom Commands:

- **Login**
  - `cy.loginWithValidCredentials()`
    - Realiza login com credenciais válidas (dados em `cypress/fixtures/credenciais.json`).
  - `cy.loginWithInvalidCredentials()`
    - Tenta login com credenciais inválidas para validar mensagens de erro.

- **Transferência**
  - `cy.realizarTransferencia(contaDestino, valor, token)`
    - Realiza uma transferência entre contas, com ou sem token de autenticação adicional.

- **Mensagens e Utilidades**
  - `cy.verifyMessageOnToast(mensagem)`
    - Verifica se uma mensagem específica aparece no toast de feedback da aplicação.

> Consulte os arquivos em `cypress/support/commands/` para mais comandos e detalhes de implementação.

## Documentação dos Testes

- **login.cy.js**: Testa cenários de login válido e inválido, validando acesso ao sistema e mensagens de erro.
- **transferencia.cy.js**: Testa transferências entre contas, incluindo casos de sucesso, falha por saldo insuficiente e validação de token para valores altos.

## Referências
- [Mentoria 2.0 - Júlio de Lima](https://www.juliodelima.com.br/)
- [Banco Web](https://github.com/juliodelimas/banco-web)
- [Banco API](https://github.com/juliodelimas/banco-api)
- [Cypress Documentation](https://docs.cypress.io/)
- [cypress-mochawesome-reporter](https://github.com/LironEr/cypress-mochawesome-reporter) 