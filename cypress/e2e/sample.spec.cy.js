describe('Login Flow', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5173');
  });
  it('Render home page', () => {
    cy.contains('Users Social Network');
    cy.contains('Login');
    cy.contains('Register');
  });
  it('Invalid credentials', () => {
    cy.intercept('POST', '*').as('login-post');
    cy.get('button').contains('Login').click();
    cy.get('input[placeholder="email"]').type('pepe@sample.com');
    cy.get('input[placeholder="password"]').type('123456');
    cy.get('form button').contains('Login').click();

    cy.wait('@login-post').then(({ response }) => {
      cy.log(response);
      expect(response.statusCode).to.equal(401);
    });
  });
  it('Mock valid credentials', () => {
    cy.intercept('POST', '*', { token: 'jsdhroluiwerhñhjk' }).as('login-post');
    cy.get('button').contains('Login').click();
    cy.get('input[placeholder="email"]').type('pepe@sample.com');
    cy.get('input[placeholder="password"]').type('654321');
    cy.get('form button').contains('Login').click();

    cy.wait('@login-post').then(({ response }) => {
      cy.log(response);
      expect(response.statusCode).to.equal(200);
    });
  });
});
