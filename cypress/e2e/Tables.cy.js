
describe('Test tables', () => {

    beforeEach('Login', () => {

        cy.visit('https://demo.opencart.com/admin/index.php');
        cy.get('#input-username').type('demo');
        cy.get('#input-password').type('demo');
        cy.get("button[type='submit']").click();

        cy.get('.btn-close').click();

        cy.get("#menu-customer>a").click();

        cy.get("#menu-customer>ul>li:first-child").click();

    })

    it.skip('Check numbers rows and columns', () => {

        cy.get("table[class = 'table table-bordered table-hover']>tbody>tr").should('have.length', '10')
        cy.get("table[class = 'table table-bordered table-hover']>thead>tr>td").should('have.length', '7')

    })

    it.skip('Check cell data from specific row and column', () => {

        cy.get("table[class = 'table table-bordered table-hover']>tbody>tr:nth-child(1)>td:nth-child(3)").contains("ceo@wolfchip.com")

    })

    it.skip('Print data from every rows and columns', () => {

        cy.get("table[class = 'table table-bordered table-hover']>tbody>tr")
            .each(($row, index, $rows) => {
                cy.wrap($row).within(() => {
                    cy.get("td").each(($col, index, $cols) => {
                        cy.log($col.text())

                    })
                })

            })

    })

    it('Total pages', () => {

        cy.get(".col-sm-6.text-end").then( (e) => {
            let myText = e.text();
            let totelPages = myText.substring(myText.indexOf("(")+1, myText.indexOf("Pages")-1)
            cy.log(totelPages);
        })


    })





})