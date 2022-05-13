/// <reference types="cypress" />
it('google',function(){
    // url of website
cy.visit('https://nxtgenaiacademy.com/demo-site/')
  // first name 
  cy.get('#vfb-5').type('rupali')
  // second name
  cy.get('#vfb-7').type('goyal')
// gender
cy.get('[value="Female"]').check()
  // address1
cy.get('#vfb-13-address').type('delhi')
  // address2
cy.get('#vfb-13-address-2').type('delhi')
   // city
cy.get('#vfb-13-city').type('abc')
  // state
cy.get('#vfb-13-state').type('bv')
  // zip code
cy.get('#vfb-13-zip').type('123')
    // country
cy.get('#vfb-13-country').select('India')
   // email
cy.get('#vfb-14').type('abc@gmail.com')
   // date
cy.get('#vfb-18').type("02/25/2022")
  // course intersted
cy.get('[value="Selenium WebDriver"]').check()
cy.get('[value="TestNG"]').check()
// query
cy.get('#vfb-23').type('NONE')
 // validation
cy.get('#vfb-3').type('34')
 // submit
cy.get('#vfb-4').click()


})



