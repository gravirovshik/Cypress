describe('Login qa studio', () => {

  it('1. Позитивный кейс авторизации', () => {

    cy.visit('https://login.qa.studio/')
    cy.get("#mail").type("german@dolnikov.ru")
    cy.get("#pass").type("iLoveqastudio1")
    cy.get("#loginButton").click()
    cy.get("#messageHeader").should('contain', 'Авторизация прошла успешно')
    cy.get("button[id='exitMessageButton']>img[alt='exit icon']").should("be.visible");

  })

  it('2. Проверка логики восстановления пароля', () => {

    cy.visit('https://login.qa.studio/')
    cy.get("#forgotEmailButton").click()
    cy.get("#mailForgot").type("roman@yandex.ru")
    cy.get("#restoreEmailButton").click()
    cy.get("#messageHeader").should('contain', 'Успешно отправили пароль на e-mail')
    cy.get("button[id='exitMessageButton']>img[alt='exit icon']").should("be.visible");

  })

  it('3.Негативный кейс авторизации НЕправильный пароль', () => {

    cy.visit('https://login.qa.studio/')
    cy.get("#mail").type("german@dolnikov.ru")
    cy.get("#pass").type("iLoveqastuo1")
    cy.get("#loginButton").click()
    cy.get("#messageHeader").should('contain', 'Такого логина или пароля нет')
    cy.get("button[id='exitMessageButton']>img[alt='exit icon']").should("be.visible");

  })

  it('4. Негативный кейс авторизации НЕправильный логин', () => {

    cy.visit('https://login.qa.studio/')
    cy.get("#mail").type("german@doln.ru")
    cy.get("#pass").type("iLoveqastudio1")
    cy.get("#loginButton").click()
   // cy.get("#messageHeader").should('contain', 'Такого логина или пароля нет')
    cy.get("#messageHeader").contains('Такого логина или пароля нет')
    cy.get("button[id='exitMessageButton']>img[alt='exit icon']").should("be.visible");

  })

  it('5. Негативный кейс авторизации логин без @', () => {

    cy.visit('https://login.qa.studio/')
    cy.get("#mail").type("german")
    cy.get("#pass").type("iLoveqastudio1")
    cy.get("#loginButton").click()
   // cy.get("#messageHeader").should('contain', 'Такого логина или пароля нет')
    cy.get("#messageHeader").contains('Нужно исправить проблему валидации')
    cy.get("button[id='exitMessageButton']>img[alt='exit icon']").should("be.visible");

  })

  it('6. Привидение к строчным буквам в логине', () => {

    cy.visit('https://login.qa.studio/')
    cy.get("#mail").type("GerMan@Dolnikov.ru")
    cy.get("#pass").type("iLoveqastudio1")
    cy.get("#loginButton").click()
    cy.get("#messageHeader").should('contain', 'Такого логина или пароля нет')
    cy.get("button[id='exitMessageButton']>img[alt='exit icon']").should("be.visible");

  })




})