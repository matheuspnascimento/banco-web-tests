describe('Login', () => {
  beforeEach(() => {
    cy.visit('/')
  })
  
  it('Login com dados válidos deve permitir entrada no sistema', () => {
    cy.fixture('credenciais').then(credenciais => {
      cy.get('#username').click().type(credenciais.valida.usuario)
      cy.get('#senha').click().type(credenciais.valida.senha)
    })
    cy.contains('button', 'Entrar').click()
    cy.contains('h4', 'Realizar Transferência').should('be.visible')
  })

   it('Login com dados inválidos deve permitir retornar uma mensagem de erro', () => {
    cy.fixture('credenciais').then(credenciais => {
      cy.get('#username').click().type(credenciais.invalida.usuario)
      cy.get('#senha').click().type(credenciais.invalida.senha)
    })
    cy.contains('button', 'Entrar').click()
    cy.get('.toast').should('have.text', 'Erro no login. Tente novamente.')
  })
})