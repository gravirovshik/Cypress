describe('Fixtures', () => {

    it.skip('Using correct data file', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

        cy.fixture('orange').then((data) => {

            cy.get("input[placeholder='Username']").type(data.username)
            cy.get("input[placeholder='Password']").type(data.password)
            cy.get("button[type='submit']").click()
            cy.get('.oxd-topbar-header-breadcrumb > .oxd-text').should('contain', data.expected);

        })
    })

    
    it('Using multple data file', () => {

        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')       

        cy.fixture('multiorange').then((data) => {
            data.forEach((userdata)=>{

            cy.get("input[placeholder='Username']").type(userdata.username)
            cy.get("input[placeholder='Password']").type(userdata.password)
            cy.get("button[type='submit']").click()

            if(userdata.username == "Admin" && userdata.password == "admin123"){

                cy.get('.oxd-topbar-header-breadcrumb > .oxd-text').should('contain', userdata.expected);
                cy.get('.oxd-userdropdown-tab > .oxd-icon').click();
                cy.get(':nth-child(4) > .oxd-userdropdown-link').click();

            }

            else {

                cy.get('.oxd-alert-content > .oxd-text').should('contain', userdata.expected);

            }
            

            });
        })
    })
  
  })