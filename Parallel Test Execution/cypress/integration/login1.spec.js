///<reference types="Cypress"/>

//Test Case 1
describe("Login using various usernames to demonstrate parllel test execution",()=>{
    before(function(){
        cy.fixture('saucedemocred').then(function(data){
            globalThis.data=data;
        })
    })

    it("Login using standard_user",()=>{
        cy.visit(data.url)
        cy.get('[data-test=username]').type(data.user1)
        cy.get('[data-test=password]').type(data.password)
        cy.get('[data-test=login-button]').click()
    })
})
