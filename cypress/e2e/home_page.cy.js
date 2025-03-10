describe('Home Page Tests', () => {
  beforeEach(() => {
    cy.visit('https://gor-pathology.web.app/');
    
    cy.get('input.MuiInputBase-input').first().type('test@kennect.io');
    cy.get('input.MuiInputBase-input').last().type('Qwerty@1234', { force: true });
    cy.get('button.MuiButtonBase-root').first().click({ force: true });
    cy.url().should('include', '/dashboard');
  });

  it('Should load To-Do List and Cost Calculator', () => {
    cy.get('.MuiCardContent-root', { timeout: 10000 }).should('be.visible');
    cy.get('.MuiBox-root', { timeout: 10000 }).should('be.visible');
  });
});