describe('API testing for GET and POST in cypress',function(){
    it('Post Method',function(){
      cy.request({
        method: 'POST',
        url:"https://reqres.in/api/users",
        body: {
          "name": "morpheus",
          "job": "leader"
      }
    }).then((response)=>{
        expect(response.status).to.equal(201)
     }) 
   })
  })