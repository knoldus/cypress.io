///<reference types = "cypress"/> 
describe("Google search",function(){
    it("perform cypress screenshot",function(){
      
      cy.visit('https://www.google.co.in/')
      cy.screenshot()
    })
  })