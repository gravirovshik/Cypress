describe('Handle tabs', () => {
    it.skip('Variant 1', () => {

      cy.visit('https://the-internet.herokuapp.com/windows') //parent tab

      cy.get("a[href='/windows/new']").invoke('removeAttr', 'target').click();

      cy.url().should('include', 'https://the-internet.herokuapp.com/windows/new');

      cy.wait(1500)

      cy.go('back');

    })

    it('Variant 2', () => {

        cy.visit('https://the-internet.herokuapp.com/windows') //parent tab
  
        cy.get("a[href='/windows/new']").then((e)=>{

            let url = e.prop('href');
            
            cy.visit(url);

        })
  
        cy.url().should('include', 'https://the-internet.herokuapp.com/windows/new');
  
        cy.wait(1500)
  
        cy.go('back');
  
      })
  
  })