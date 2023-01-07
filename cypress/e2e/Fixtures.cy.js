describe('Fixtures', () => {

    it('Direct', () => {
      cy.visit('https://opensource-demo.orangehrmlive.com/')
      cy.title().should('eq', 'OrangeHRM')
    })
  
  })