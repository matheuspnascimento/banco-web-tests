describe('Transferências', () => {
    beforeEach(() => {
        cy.visit('/')
        cy.loginWithValidCredentials()
    })

    it('Deve realizar a transferência quando eu inserir dado e valor válidos', () => {
        // Action
        cy.executeTransfer('Ana Pereira', 'Carlos Souza', '11')
        // Assert
        cy.verifyMessageOnToast('Transferência realizada!')

    })
    it.only('Deve apresentar erro quando tentar transferir mais que 5000 sem o token', () => {
        // Action
        cy.executeTransfer('Ana Pereira', 'Carlos Souza', '6000')
        // Assert
        cy.verifyMessageOnToast('Autenticação necessária para transferências acima de R$5.000,00.')

    })
}) 