/// <reference types="Cypress" />
 
describe('My Second Test Suite', function() 
{
 
it('My FirstTest case',function() {
 
//Check boxes
cy.visit("https://accounts.google.com/signup")
cy.get('input[type="checkbox"]').check().should('be.checked')
cy.get('.VfPpkd-muHVFf-bMcfAe').uncheck().should('not.be.checked')

} )
//Static checkbox
    it('My SecondTest case', function (){
       // test step to launch a URL
       cy.visit("https://register.rediff.com/register/register.php")
       //select option India with value then verify with assertion
       cy.get('select[id="country"]').select('99').should('have.value', '99')
    })
    //Hidden elements
    it('My ThirdTest case', function (){
        // launch URL
        cy.visit("https://www.amazon.com/");
        // show hidden element with invoke
        cy.get('#nav-flyout-ya-signin').invoke('show');
        //click hidden element
        cy.contains('Sign').click();
     });
 })
