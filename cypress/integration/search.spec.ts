describe('Search /',() => {
    it('can search recipes from header and get redirected to /recipes?q=query', () => {
        cy.visit('/')
        cy.get('[data-cy=searchIconHeader]').click()
        cy.findByLabelText('search').type('kladdkaka')
        cy.findByRole('search').submit();

        cy.findByRole('heading', { name: /recept/i });
    })
})