require('@cypress/xpath');

describe('Assertions demo', () => {

    it('Explicit assertions url should', () => {

        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.get("input[placeholder='Username']").type("Admin")
        cy.get("input[placeholder='Password']").type("admin123")
        cy.get("button[type='submit']").click()

        let expName = 'Paul Collings';

        cy.get('.oxd-userdropdown-name').then((x) => {

            let actName = x.text();

            assert.notEqual(actName, expName);
            assert.equal(actName, expName);

        })
    })
})
