///<reference types="cypress" />

describe("Login Test", () => {
  it("should allow the user to log in", () => {
    cy.visit("https://www.saucedemo.com/");
    cy.get("#user-name").type("standard_user");
    cy.get("#password").type("secret_sauce");
    cy.get("#login-button").click();
    cy.contains("Swag Labs").should("be.visible");
  });
});
