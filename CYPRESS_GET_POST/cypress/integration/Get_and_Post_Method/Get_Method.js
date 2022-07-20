
describe('API testing for GET and POST in cypress',function(){
    it('GET Method',function(){
   cy.request("GET", "https://reqres.in/api/users/2", {
      }).then((r) => {
         expect(r.status).to.eq(200)
         expect(r).to.have.property('headers')
         expect(r).to.have.property('duration')
      });
   })
})
