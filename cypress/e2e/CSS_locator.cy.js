//const cypress = require("cypress");

describe('Locator search', () => {
  it('Locator search', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get("input[placeholder='Username']").type("Пломбиратор")
    cy.get("button[type='submit']").click()

  })
})