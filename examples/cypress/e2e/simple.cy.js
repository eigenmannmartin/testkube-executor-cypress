describe('Postfinance', () => {
  it('successfully loads', () => {
    cy.visit('https://www.postfinance.ch/en/private.html')

    cy.contains('Close')
  });
});