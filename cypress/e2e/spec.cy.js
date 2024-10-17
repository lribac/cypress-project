describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://example.cypress.io');
    cy.get('#utilities').should('be.visible');
  })
})