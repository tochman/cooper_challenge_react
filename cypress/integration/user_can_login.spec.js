describe('User can log in', () => {
  it('Visits the site', () => {
    cy.visit('http://localhost:3001');
  })
  it('User can log in successfully', () => {
    cy.server();
    cy.route({
      method: 'POST',
      url: 'http://localhost:3000/api/v1/auth/sign_in',
      response: 'fixture:login.json',
      headers: {
        "uid": "user@mail.com"
      }
    })
    // cy.contains('Login').click();
    cy.get('#login').click();
    cy.get('#login-form').within(() => {
      cy.get('#email').type('user@mail.com')
      cy.get('#password').type('password')
      cy.get('button').click()
    })
    cy.contains('Hi user@mail.com')
    // cy.get('#login-form').as('loginform');
    // cy.get('@loginform').find("input[placeholder='E-mail address']").type('user@mail.com')
    // cy.get('@loginform').find("input[placeholder='Password']").type('password')
    // cy.get('@loginform').find('button').click()
  })
})