describe('Staya Home Work', () => {

    it('Автотесты для формы логина и пароля на Staya', () => {

      cy.visit('https://staya.dog/login')
      
      cy.get("form[action='#']>input[placeholder='E-mail*']").type("gravirovshik@yandex.ru")
      cy.get("form[action='#']>input[placeholder='Пароль*']").type("iLoveqastudio1")
      cy.get("button[type='submit']>span[class='s-button__content']").click()
      
      cy.get(".profile-orders__title.profile-orders__title_desktop").should('contain', 'Мои заказы')
  
    })  
  
  })