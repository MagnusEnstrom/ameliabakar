/// <reference types="Cypress" />

describe('/recept', () => {
    beforeEach(() => {
        cy.visit('/recept')
    });

    it('has filter button', () => {
        cy.findByLabelText('show filter').should('exist')
    })
    it('shows filter when filter button is clicked', () => {
        cy.contains('Recept')
        cy.findByRole('button', { name: 'Choklad'}).should('not.exist');
        const filterButton = cy.findByLabelText('show filter')
        filterButton.click();

        cy.findByRole('button', { name: 'Choklad'}).should('exist');
    })
  })