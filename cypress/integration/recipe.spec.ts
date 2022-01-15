/// <reference types="Cypress" />

describe('/recept', () => {
    beforeEach(() => {
        cy.visit('/recept')
    });

    it('A user can see a list of 10 recipe cards & load more', () => {
        // shows recipes
        cy.findAllByLabelText('recept').should('have.length', 10);
        // loads in more recipes
        cy.get('[data-cy=loadmore]').click();
        cy.findAllByLabelText('recept').should('have.length', 14);
    })

    it('shows filter & hide filter', () => {
        cy.contains('Recept')
        //Filter list is not shown
        cy.get('[data-cy=filterButton]').should('not.exist');
        cy.findByLabelText('close filter').should('not.exist');
        const filterButton = cy.findByLabelText('show filter')
        filterButton.click();
        
        //Filter list is
        cy.get('[data-cy=filterButton]').should('exist');
        const closeButton = cy.findByLabelText('close filter');
        closeButton.click();
        
        //Filter list is not shown
        cy.findByLabelText('close filter').should('not.exist');
        cy.get('[data-cy=filterButton]').should('not.exist');

    })
    // it('A user can filter recipes', () => {
    //     cy.findAllByLabelText('recept').should('have.length', 10);
        
    //     const filterButton = cy.findByLabelText('show filter');
    //     filterButton.click();
        
    //     const filterChip = cy.findByRole('button', { name: 'Choklad'});
    //     filterChip.click();
        
    //     cy.findAllByRole('button').s;
    // })
  })