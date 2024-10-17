describe('env var testing', () => {
    it('example', () => {
      cy.log(typeof Cypress.env('envExample'))
    })
  })