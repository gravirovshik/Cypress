
describe('Alerts', () => {

    it.skip('Simple alert with OK button', () => {

        cy.visit('https://the-internet.herokuapp.com/javascript_alerts');
        cy.get("button[onclick='jsAlert()']").click();

        cy.on('window: alert', (t) => {

            expect(t).to.contains('I am a JS Alert')

        })

        cy.get('#result').should('have.text', 'You successfully clicked an alert')
                 
    })


    it.skip('Confirm alert with OK button', () => {

        cy.visit('https://the-internet.herokuapp.com/javascript_alerts');
        cy.get("button[onclick='jsConfirm()']").click();

        cy.on('window: confirm', (t) => {

            expect(t).to.contains('I am a JS Confirm')

        })

        cy.get('#result').should('have.text', 'You clicked: Ok')
                 
    })

    it.skip('Confirm alert with Cancel button', () => {

        cy.visit('https://the-internet.herokuapp.com/javascript_alerts');
        
        cy.on("window:confirm", (s) => {
            return false;
         });

        cy.get("button[onclick='jsConfirm()']").click();

        cy.get('#result').should('have.text', 'You clicked: Cancel');
                 
    })


    it.skip('Prompt - Input text in prompt, Click OK and Validate Input Text', () => {
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts');

        cy.window().then(($win) => {
            cy.stub($win, 'prompt').returns('This is a test text')
          })

        cy.contains('Click for JS Prompt').click();

        cy.get('#result').should('have.text', 'You entered: This is a test text')
      })


      it('Prompt - Click Cancel', () => {
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts');

        cy.window().then((win) => {
            cy.stub(win, 'prompt').returns('It cancel the dialog')
            })

        cy.contains('Click for JS Prompt').click();
        cy.on('window:prompt', () => false);

        cy.get('#result').should('have.text', 'You entered: It cancel the dialog')
      })






})