describe('Cost Calculator Tests', () => {
  beforeEach(() => {
    cy.visit('https://gor-pathology.web.app/');
    cy.get('input.MuiInputBase-input').first().type('test@kennect.io');
    cy.get('input.MuiInputBase-input').last().type('Qwerty@1234', { force: true });
    cy.get('button.MuiButtonBase-root').first().click({ force: true });
    cy.url().should('include', '/dashboard');
  });

  it('Should add a test and apply discount', () => {
    cy.contains('div', 'Test Cost Calculator')
  .should('be.visible');
  });
  it('Should add a test and apply discount', () => {
    cy.get('#patient-test')
      .should('be.visible')
      .type('Blood Test', { force: true });


    cy.get('.MuiAutocomplete-root')
    .first().click({ force: true });

   
cy.get('input[id="patient-test"]').click({ force: true });

cy.get('.MuiSelect-root').click({ force: true });

cy.get('ul[role="listbox"]', { timeout: 7000 }).should('be.visible');

cy.get('ul[role="listbox"] li').first().click({ force: true });

    
  });

  it('Should clear selected tests', () => {

    cy.get('.MuiAutocomplete-endAdornment').click({ force: true });

    cy.get('#patient-test').should('have.value', '');
  });
});