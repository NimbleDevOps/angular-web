describe('My First Test', () => {
  it('Visits the initial project page', () => {
    cy.visit('/')
    cy.contains('Welcome')
    cy.contains('angular-web app is running!')
    cy.contains('Next Steps')
  })
})
