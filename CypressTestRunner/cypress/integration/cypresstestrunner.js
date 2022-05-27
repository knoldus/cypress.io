describe('My First Cypress Test to run with testrunner', function() {
    it('Visits to google page', function() {
    cy.visit("www.google.com");
    cy.url().should('be.equal', 'https://www.google.com/?gws_rd=ssl')
    })
    })
