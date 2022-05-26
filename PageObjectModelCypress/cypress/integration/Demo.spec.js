
import Login from "../integration/PageObject/login"
describe("Cypress POM Test Suite", function () {
    it("Login with valid email and password", function() {
        const loginpage = new Login();
        loginpage.navigate();
        loginpage.email('abc@gmail.com');
        loginpage.password('password');
        loginpage.submit();
        cy.url().should('be.equal', 'https://www.facebook.com//')
    })
})