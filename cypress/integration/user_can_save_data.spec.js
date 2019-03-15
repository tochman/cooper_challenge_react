describe('User can save data', () => {
    it('User logs in and input data', () => {
      cy.login('user@mail.com', 'password');
      cy.get('input[placeholder=Distance]').type('1500');
      cy.get('.ui > .dropdown').click();
      cy.contains('Male').click();
      cy.get('input[placeholder=Age]').type('24');
      cy.contains('Result: Poor')
      cy.contains('24 y/o male running 1500 meters.')
      cy.contains('Save entry')
    })
  })