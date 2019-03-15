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
    it('User can save entry', () => {
        cy.server()
        cy.route(
            'POST',
            'http://localhost:3000/api/v1/performance_data',
            'fixture:save_entry.json'
        )
        cy.contains('Save entry').click();
        cy.contains('Your entry was saved')
    })
    it('User can see past entries', () => {
        cy.server()
        cy.route(
            'GET',
            'http://localhost:3000/api/v1/performance_data',
            'fixture:fetch_saved_entries.json'
        )
        cy.contains('Show past entries').click();
        cy.get(':nth-child(1) > .chartjs-render-monitor')
        cy.get(':nth-child(2) > .chartjs-render-monitor')
        cy.contains('Hide past entries').click()
        cy.get(':nth-child(1) > .chartjs-render-monitor').should('not.exist')
        cy.get(':nth-child(2) > .chartjs-render-monitor').should('not.exist')
    })
})