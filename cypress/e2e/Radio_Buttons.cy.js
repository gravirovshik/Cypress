describe('Radio Buttons', () => {

    it('Radio Buttons', () => {

        cy.visit('https://itera-qa.azurewebsites.net/home/automation')

        //test for visible
        
        cy.get('#female').should('be.visible')
        cy.get('input#male').should('be.visible')
        cy.get('input#other').should('be.visible')

        // test for check
        cy.get('input#female').check().should('be.checked')
        cy.get('input#male').should('not.be.checked')
      
    })
})