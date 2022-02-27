/// <reference types="Cypress" />

describe('/recept', () => {
    beforeEach(() => {
        cy.visit('/recept')
    })

    it('A user can see a list of 10 recipe cards & load more', () => {
        // shows recipes
        cy.findAllByLabelText('recept').should('have.length', 10)
        // loads in more recipes
        cy.get('[data-cy=loadmore]').click()
        cy.findAllByLabelText('recept').should('have.length', 14)
    })

    it.only('shows filter & hide filter', () => {
        cy.contains('Recept')
        //Filter list is not shown
        cy.get('[data-cy=filterButton]').should('not.be.visible')
        cy.findByLabelText('close filter').should('not.exist')
        const filterButton = cy.findByLabelText('show filter')
        filterButton.click()

        //Filter list is
        cy.get('[data-cy=filterButton]').should('exist')
        const closeButton = cy.findByLabelText('close filter')
        closeButton.click()

        //Filter list is not shown
        cy.findByLabelText('close filter').should('not.exist')
        cy.get('[data-cy=filterButton]').should('not.be.visible')
    })

    it('can save & view saved recipes', () => {
        cy.visit('/mina-recept')
        cy.findByRole('heading', {
            name: /Dina sparade recept kommer att visas här/i,
        })
        cy.findByText(/Du har för närvarande inte några sparade recept/i)
        cy.findByRole('button', { name: /Här hittar du mina recept/i }).click()

        cy.findAllByLabelText('recept').should('have.length', 10)
        cy.get('[data-cy=heartButton]')
            .should('not.have.attr', 'aria-selected', 'true')
            .click({ multiple: true })
            .should('have.attr', 'aria-selected', 'true')

        cy.visit('/mina-recept')
        cy.findByRole('heading', { name: /Mina sparade recept/i })
        cy.findAllByLabelText('recept').should('have.length', 10)
    })
})
