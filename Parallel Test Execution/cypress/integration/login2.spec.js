///<reference types="Cypress"/>

//Test Case 2

describe("Demo of parllel test execution",()=>{
    before(function(){
        cy.fixture('saucedemocred').then(function(data){
            globalThis.data=data;
        })
    })

    it("Login the demo site using locked_out_user",()=>{
        cy.visit(data.url)
        cy.get('[data-test=username]').type(data.user2)
        cy.get('[data-test=password]').type(data.password)
        cy.get('[data-test=login-button]').click()
    })
})
