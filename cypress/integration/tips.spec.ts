/// <reference types="Cypress" />

describe('/recept', () => {
    beforeEach(() => {
        cy.visit('/tips')
    });

    it('A user can visit tips', () => {
        // shows tips header
        cy.findByRole('heading', { name: /tips/i }).should('exist');
        // shows tips description
        cy.get('[data-cy=description]').should('exist')
    })
})