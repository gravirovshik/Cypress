describe('QA Home Work', () => {
  it.skip('1. Автотест на проверку логики восстановления пароля', () => {
    cy.visit('https://login.qa.studio/')
    cy.get("#forgotEmailButton").click()
    cy.get("#mailForgot").type("roman@yandex.ru")
    cy.get("#restoreEmailButton").click()
    cy.get("#messageHeader").should('contain', 'Успешно отправили пароль на e-mail')
    cy.get("button[id='exitMessageButton']>img[alt='exit icon']").should("be.visible");

  })


  it.skip('2. Автотест на позитивный кейс авторизации', () => {
    cy.visit('https://login.qa.studio/')

    cy.get("#mail").type("german@dolnikov.ru")
    cy.get("#pass").type("iLoveqastudio1")
    cy.get("#loginButton").click()
    cy.get("#messageHeader").should('contain', 'Авторизация прошла успешно')
    cy.get("button[id='exitMessageButton']>img[alt='exit icon']").should("be.visible");

  })

  it.skip('3. Автотест на негативный кейс авторизации', () => {
    cy.visit('https://login.qa.studio/')

    cy.get("#mail").type("german@dolnikov.ru")
    cy.get("#pass").type("iLoveqastuo1")
    cy.get("#loginButton").click()
    cy.get("#messageHeader").should('contain', 'Такого логина или пароля нет')
    cy.get("button[id='exitMessageButton']>img[alt='exit icon']").should("be.visible");

  })

  it('4. Автотест на негативный кейс авторизации', () => {
    cy.visit('https://login.qa.studio/')

    cy.get("#mail").type("german@doln.ru")
    cy.get("#pass").type("iLoveqastudio1")
    cy.get("#loginButton").click()
    cy.get("#messageHeader").should('contain', 'Такого логина или пароля нет')
    cy.get("button[id='exitMessageButton']>img[alt='exit icon']").should("be.visible");

  })




})