describe('Check boxes', () => {

    it('Check boxes', () => {

        cy.visit('https://itera-qa.azurewebsites.net/home/automation');
       
        cy.get('input#monday').should('be.visible');  
        cy.get('input#monday').check().should('be.checked');
        cy.get('input#monday').uncheck().should('not.be.checked');

        cy.get("input.form-check-input[type='checkbox']").check().should('be.checked');
        cy.get("input.form-check-input[type='checkbox']").uncheck().should('not.be.checked');

        cy.get("input.form-check-input[type='checkbox']").first().check().should('be.checked');
        cy.get("input.form-check-input[type='checkbox']").last().check().should('be.checked');
      
    })
})