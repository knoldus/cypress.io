export function createNewUser(URL, requestBody, expectedStatusCode){
    cy.request({
        method: 'POST',
        url: URL,
        failOnStatusCode: false,
        headers:{
            'Authorization' : 'Bearer ' + 'b4bd7ed693f7d1a7963c1542004fd1411a6feaddb7cf9c105dfc2511f5eff2db',
        },
        body: requestBody
    }).then((response)=>{
        expect(response.status).to.equal(expectedStatusCode)
    })
}