///<reference types='cypress'/>


describe('E2E API Testing', ()=>{

    let accesstaken = 'b4bd7ed693f7d1a7963c1542004fd1411a6feaddb7cf9c105dfc2511f5eff2db'
    let randomtext = ""
    let testemail = ""
    const baseURL = 'https://gorest.co.in/public'

    it('create a user request', ()=>{

        var pattern = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
        for (var i=0; i<10; i++){
            randomtext+=pattern.charAt(Math.floor(Math.random()*pattern.length))
            testemail = randomtext + '@gmail.com'
        }

        cy.request({
            method: 'POST',
            url: `${baseURL}/v2/users`,
            headers : {
                'Authorization' : 'Bearer ' + accesstaken
            },
            body: {
                "name":"Himanshu",
                "email":testemail,
                "gender":"male",
                "status":"Active"
            }
        }).then((response)=>{
            expect(response.status).to.equal(201)
            expect(response.body).has.property('email', testemail)
            }).then((response)=>{
                const userId =response.body.id
                cy.log("user id is: " + userId)
                cy.request({
                    method : 'GET',
                    url : `${baseURL}/v2/users/`+userId,
                    headers : {
                    'Authorization' : 'Bearer ' + accesstaken
                    }
                }).then((res)=>{
                    expect(res.status).to.eql(200)
            })
            cy.request({
            method : 'PUT',
            url : 'https://gorest.co.in/public/v2/users/'+userId,
            headers : {
                'Authorization' : 'Bearer ' + accesstaken
            },
            body: {
                "name":"Himanshu Gupta",
                "email":testemail,
                "gender":"male",
                "status":"Active"
            }
        }).then((res)=>{
            expect(res.status).to.eql(200)
        })
        cy.request({
                method : 'DELETE',
                url : 'https://gorest.co.in/public/v2/users/'+userId,
                headers : {
                    'Authorization' : 'Bearer ' + accesstaken
                }
            }).then((res)=>{
                expect(res.status).to.eql(204)
            })
        })
    })
})