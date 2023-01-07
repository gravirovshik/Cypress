import '@4tw/cypress-drag-drop'

describe('Mouse operations', () => {
    
    it.skip('Mouse Hover', () => {

        cy.visit('https://demo.opencart.com/');
        cy.get(':nth-child(1) > .dropdown-menu > .dropdown-inner > .list-unstyled > :nth-child(2) > .nav-link').should('not.be.visible');
        cy.get('.nav > :nth-child(1) > .dropdown-toggle').trigger('mouseover').click();
        cy.get(':nth-child(1) > .dropdown-menu > .dropdown-inner > .list-unstyled > :nth-child(2) > .nav-link').should('be.visible');
        
    })

    it.skip('Right click', () => {

        cy.visit('https://swisnl.github.io/jQuery-contextMenu/demo.html');
        cy.get('.context-menu-one').rightclick();
        cy.get('.context-menu-icon-copy').should('be.visible');
       
        
    })

    it.skip('Drag and drop', () => {

        cy.visit('http://www.dhtmlgoodies.com/scripts/drag-drop-custom/demo-drag-drop-3.html');
        cy.get('#box1').should('be.visible');
        cy.get('#box101').should('be.visible');
        cy.get('#box1').drag('#box101', {force: true}); 
    })

    it('Scroll pge', () => {

        cy.visit('https://www.countries-ofthe-world.com/flags-of-the-world.html');
        cy.get(':nth-child(113) > :nth-child(1) > img').scrollIntoView({duration: 2000});
        cy.get(':nth-child(113) > :nth-child(1) > img').should('be.visible');

        cy.get(':nth-child(1) > tbody > :nth-child(2) > :nth-child(1) > img').scrollIntoView({duration: 2000});
        cy.get(':nth-child(1) > tbody > :nth-child(2) > :nth-child(1) > img').should('be.visible');
    })



})