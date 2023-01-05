require('@cypress/xpath');

describe('Xpath locator', () => {
    it('Xpath locator', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.xpath("//button[@type='submit']").click()
    })
})