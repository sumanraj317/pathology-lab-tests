describe('GOR Pathology Login Test', () => {
    beforeEach(() => {
      cy.visit('https://gor-pathology.web.app/');
    });
  
    it('Should successfully log in with valid credentials', () => {

      cy.get('input.MuiInputBase-input')
      .should('exist')
      .and('be.visible')
      .type('test@kennect.io');

      cy.get('input.MuiInputBase-input')
        .should('exist')
        .should('be.visible')
        .click({ force: true })
        .type('Qwerty@1234', { force: true });
  
      cy.get('button.MuiButtonBase-root')
      .should('be.visible')
      .first()
      .click({force: true});
   
      cy.url().should('include', '/dashboard');
      cy.get('.pace-running', { timeout: 10000 }).should('be.visible');
    });
  });
  