///<reference types = "cypress"/> 
describe("Google search",function(){
    it("perform cypress video on demo site",function(){

      cy.visit('https://www.google.co.in/')
      cy.get('input[title=Search').type('Testing{enter}')
      cy.get('h3[class="LC20lb MBeuO DKV0Md"]').should('contain','Wikipedia')
    })
  })