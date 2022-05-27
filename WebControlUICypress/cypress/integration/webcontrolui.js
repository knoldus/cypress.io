/// <reference types="Cypress" /> 
describe('My Second Test Suite', function() 
{ 
it('My FirstTest case',function() {
//Check boxes
cy.visit("https://www.amazon.in/health-and-personal-care/b/?ie=UTF8&node=1350384031&ref_=nav_cs_hpc")
cy.get('#checkBoxOption1').check().should('be.checked').and('have.value','Made for Amazon')
cy.get('#checkBoxOption1').uncheck().should('not.be.checked')
cy.get('input[type="checkbox"]').check(['option2','option3']) 
//Static Dropdown 
cy.get('select').select('option2').should('have.value','option2')
//Dynamic dropdowns
cy.get('#autocomplete').type('ind')
cy.get('.ui-menu-item div').each(($e1, index, $list) => {
 
    if($e1.text()==="India")
    {
        $e1.click()
    } 
})
//autocomplete
cy.get('#autocomplete').should('have.value','India')
//visible invisible
cy.get('#displayed-text').should('be.visible')
cy.get('#hide-textbox').click()
cy.get('#displayed-text').should('not.be.visible')
cy.get('#show-textbox').click()
cy.get('#displayed-text').should('be.visible') 
//radio buttons 
cy.get('[value="radio2"]').check().should('be.checked')
 
}  ) 
}  )
