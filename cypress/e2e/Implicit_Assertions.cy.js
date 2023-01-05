require('@cypress/xpath');

describe('Assertions demo', () => {

    it('Implicit assertions url should', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.url().should('include', 'orangehrmlive')
        cy.url().should('eq', 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.url().should('contain', 'orangehrmlive')
    })

    it('Implicit assertions url and', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.url().should('include', 'orangehrmlive')
            .and('eq', 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
            .and('contain', 'orangehrmlive')
            .and('not.contain', '!!!!')
    })

    it('Implicit assertions title', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.title().should('include', 'Orange')
            .and('eq', 'OrangeHRM')
            .and('contain', 'angeHR')
            .and('not.contain', '!!')
    })

    it('Implicit assertions image', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.get('.orangehrm-login-branding > img').should('be.visible')
        .and('exist')
    })

    it('Xpath count links', () => {
            cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
            cy.xpath("//a").should('have.length', '5')
    })

    it('Check value input', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.get("input[placeholder='Username']").type('Admin')
        cy.get("input[placeholder='Username']").should('have.value', 'Admin')
        
})


    


    







})