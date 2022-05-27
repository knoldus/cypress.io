class Login{
    navigate(){
        cy.visit("https://www.facebook.com//")
    }
    email(username) {
        cy.get('#email')
        .clear()
        .type(username);
        return this
        }
        password(username) {
        cy.get('#pass')
        .clear()
        .type(username);
        return this
        }
        submit(){
        cy.get('[type=submit]').click()
        }     
}
    export default Login