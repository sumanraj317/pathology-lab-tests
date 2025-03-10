describe('Add Patient Tests', () => {
  beforeEach(() => {
    cy.visit('https://gor-pathology.web.app/');
    cy.get('input.MuiInputBase-input').first().type('test@kennect.io');
    cy.get('input.MuiInputBase-input').last().type('Qwerty@1234', { force: true });
    cy.get('button.MuiButtonBase-root').first().click({ force: true });
    cy.url().should('include', '/dashboard');
  });

  
  it('Should add a TODO successfully', () => {
    cy.visit('https://gor-pathology.web.app/dashboard/todos');
  
    cy.get('input#outlined-add-todo-input').should('be.visible').type('Follow up with Patient X');

    cy.get('button[type="submit"]').click();
  
    cy.wait(2000);
    cy.reload();
  
    cy.get('.MuiCardContent-root').each(($el) => {
      cy.log('Card content:', $el.text());
    });
    
  });
  
});