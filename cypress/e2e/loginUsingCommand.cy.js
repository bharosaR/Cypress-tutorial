/// <reference types="Cypress" />
import { userName } from ".../userData";
describe("Login Test", () => {
  //   beforeEach(() => {
  //     cy.login_user("standard_user", "secret_sauce");
  //   });
  after(() => {
    cy.get("#react-burger-menu-btn").click();
    cy.get("#logout_sidebar_link").click();
  });
  it("should allow the user to log in", () => {
    // cy.fixture("users").then((userData) => {
    //   cy.login_user(userData.userName, userData.password);
    // });
    cy.login_user(userName.userName, userName.password);
    cy.contains("Swag Labs").should("be.visible");
  });

  it.only("should allow users to add the items in the cart", () => {
    let cartItemsNumber = 1;
    cy.url().should("include", "/inventory.html"); //assert route url
    // cy.contains('Swag Labs').should('be.visible');
    cy.get("#add-to-cart-sauce-labs-backpack").click();
    // cy.contains('Remove').should('be.visible');
    cy.get(".shopping_cart_badge").should("have.text", `${cartItemsNumber}`);
  });
  it("should log in with the error user", () => {
    cy.login_user("error_user", "secret_sauce");
  });
});
