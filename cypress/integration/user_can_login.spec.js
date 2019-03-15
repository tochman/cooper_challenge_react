describe('User can log in', () => {
  it('Visits the site', () => {
    cy.visit('http://localhost:3001');
  })
  it('User can log in successfully', () => {
    // cy.contains('Login').click();
    cy.get('#login').click();
    cy.get('#login-form').within(() => {
      cy.get('#email').type('user@mail.com')
      cy.get('#password').type('password')
      cy.get('button').click()
    })
    // cy.get('#login-form').as('loginform');
    // cy.get('@loginform').find("input[placeholder='E-mail address']").type('user@mail.com')
    // cy.get('@loginform').find("input[placeholder='Password']").type('password')
    // cy.get('@loginform').find('button').click()
  })
})