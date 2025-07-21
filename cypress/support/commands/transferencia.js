Cypress.Commands.add('executeTransfer', (contaOrigem, contaDestino, valor) => {
    cy.selectOptionOnCombobox('conta-origem', contaOrigem)
    cy.selectOptionOnCombobox('conta-destino', contaDestino)
    cy.get('#valor').click().type(valor)
    cy.contains('button', 'Transferir').click()
})