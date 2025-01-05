// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

// Cypress.Commands.add("login_user", (username, password) => {
//   cy.visit("https://www.saucedemo.com/");
//   cy.url().should("eq", "https://www.saucedemo.com/");
//   cy.get('[data-test="login-button"]').should("have.value", "Login"); //assertion
//   cy.get('[data-test="login-button"]').should(
//     "have.css",
//     "background-color",
//     "rgb(61, 220, 145)"
//   );
//   cy.get("#user-name").type(username);
//   cy.get("#password").type(password, { log: false });
//   cy.get("#login-button").click();
// });

Cypress.Commands.add("login_user", (userName, password) => {
  cy.get("#user-name").type(userName);
  cy.get("#password").type(password);
  cy.get("#login-button").click();
});

Cypress.Commands.add("addToCart", (itemId) => {
  cy.get(`#add-to-cart-${itemId}`).click();
});
Cypress.Commands.add("removeFromCart", (itemId) => {
  cy.log(`Removing item: ${itemId}`);
  cy.get(`#remove-${itemId}`).click();
});
