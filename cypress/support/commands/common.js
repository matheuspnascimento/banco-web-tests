Cypress.Commands.add('verifyMessageOnToast', mensagem => {
    cy.get('.toast').should('have.text', mensagem)
})

Cypress.Commands.add('selectOptionOnCombobox', (labelDoCampo, option) => { 
        cy.get(`label[for="${labelDoCampo}"]`).parent().as(`campo-${labelDoCampo}`)
        cy.get(`@campo-${labelDoCampo}`).click()
        cy.get(`@campo-${labelDoCampo}`).contains(option).click()
})