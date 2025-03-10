Cypress.Commands.add("login", () => {
    cy.visit("https://gor-pathology.web.app/");
    cy.get('input[type="email"]').type("test@kennect.io");
    cy.get('input[type="password"]').type("Qwerty@1234");
    cy.get('button[type="submit"]').click();
  });
  