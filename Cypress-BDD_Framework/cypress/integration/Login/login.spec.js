import {Given, And, Then, When} from "cypress-cucumber-preprocessor/steps";


Given('Login to the application',()=>{
    cy.visit('http://testphp.vulnweb.com/login.php')
})

When('Enter the valid Credentials',()=>{
    cy.get('input[name="uname"]').type('test')
    cy.get('input[name="pass"]').type('test')
})

And('click on login', ()=>{
    cy.get('input[value="login"]').click()

})
Then('Home page', ()=>{
    cy.title().should('eq','user info')
})

