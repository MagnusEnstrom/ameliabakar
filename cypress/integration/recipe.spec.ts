/// <reference types="Cypress" />

describe('/recept', () => {
    beforeEach(() => {
        cy.visit('/recept')
    });

    it('A user can see a list of 10 recipe cards', () => {
        const recipeList = cy.findAllByLabelText('recept');
        recipeList.should('have.length', 10);
    })
    it('A user can show more recipes by clicking load more button', () => {
        cy.findAllByLabelText('recept').should('have.length', 10);
        const filterButton = cy.findByRole('button', { name: 'Ladda fler'} )
        filterButton.click();
        cy.findAllByLabelText('recept').should('have.length.greaterThan', 10);
    })

    it('shows filter & hide filter', () => {
        cy.contains('Recept')
        //Filter list is not shown
        cy.findByRole('button', { name: 'Choklad'}).should('not.exist');
        cy.findByLabelText('close filter').should('not.exist');
        const filterButton = cy.findByLabelText('show filter')
        filterButton.click();
        
        //Filter list is
        cy.findByRole('button', { name: 'Choklad'}).should('exist');
        const closeButton = cy.findByLabelText('close filter');
        closeButton.click();
        
        //Filter list is not shown
        cy.findByLabelText('close filter').should('not.exist');
        cy.findByRole('button', { name: 'Choklad'}).should('not.exist');

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