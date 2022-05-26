describe('Test', function () {

    before(function(){
       //access fixture data
       cy.fixture('example').then(function(signInData){
          this.signInData = signInData
       })
    })
    // test case
    it('Test Case1', function (){
       // launch URL
       cy.visit("https://www.facebook.com//")
       //data driven from fixture
       cy.get('#email')
       .type(this.signInData.email)
       cy.get('#pass').type(this.signInData.password)
    });
 });