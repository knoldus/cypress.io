///<reference types="Cypress"/>

//Test Case 1

describe("Login using various usernames to demonstrate parllel test execution",()=>{

    it("Login using standard_user",()=>{
        cy.visit("https://www.saucedemo.com/")
        cy.get('[data-test=username]').type("standard_user")
        cy.get('[data-test=password]').type("secret_sauce")
        cy.get('[data-test=login-button]').click()
    })

})
