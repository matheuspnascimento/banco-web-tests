describe('Login', () => {
  beforeEach(() => {
    cy.visit('/')
  })
  
  it('Login com dados válidos deve permitir entrada no sistema', () => {
    // Action
    cy.loginWithValidCredentials()
    // Assert
    cy.contains('h4', 'Realizar Transferência').should('be.visible')
  })

   it('Login com dados inválidos deve permitir retornar uma mensagem de erro', () => {
    // Action
    cy.loginWithInvalidCredentials()
    // Assert
    cy.verifyMessageOnToast('Erro no login. Tente novamente.')
  })
})