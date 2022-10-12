
describe('Test', () => {
  it('visits the url', () => {
    cy.visit('/a')
    cy.contains('h1', 'Contact List')
  })
})
