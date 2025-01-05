//  Test cases:
// 1.Login to the cart page.
// (Using Data-driven Framework)

// /// <reference types="Cypress" />

// describe("Login Test - Data-Driven", () => {
//     beforeEach(() => {
//       cy.visit('https://www.saucedemo.com/');
//     });

//     it("should allow the user to log in with different credentials", function() {
//       cy.fixture('userData').then((users) => {
//         users.forEach((user) => {
//           cy.login_user(user.userName, user.password);
//           cy.contains(user.expectedTitle).should("be.visible");
//         });
//       });
//     });
//   });

//(Using Modular Framework)
/// <reference types="Cypress" />

describe("login Test - Modular", () => {
  beforeEach(() => {
    cy.visit("https://www.saucedemo.com/");
  });

  it("should allow the user to log in", () => {
    cy.login_user("standard_user", "secret_sauce");
    cy.contains("Swag Labs").should("be.visible");
  });

  it("should allow the user to add items to the cart", () => {
    cy.login_user("standard_user", "secret_sauce");
    cy.addToCart("sauce-labs-backpack");
    cy.get(".shopping_cart_badge").should("have.text", "1");
    cy.addToCart("sauce-labs-bolt-t-shirt");
    cy.get(".shopping_cart_badge").should("have.text", "2");
    cy.addToCart("sauce-labs-onesie");
    cy.get(".shopping_cart_badge").should("have.text", "3");
  });
  it("should allow the user to remove items from the cart", () => {
    // Remove the 1st item (sauce-labs-backpack)
    cy.removeFromCart("sauce-labs-backpack");
    cy.get(".shopping_cart_badge").should("have.text", "2");

    // Remove the 2nd item (sauce-labs-bolt-t-shirt)
    cy.removeFromCart("sauce-labs-bolt-t-shirt");
    cy.get(".shopping_cart_badge").should("have.text", "1");

    // Remove the 3rd item (sauce-labs-onesie)
    cy.removeFromCart("sauce-labs-onesie");
    cy.get(".shopping_cart_badge").should("not.exist"); // Cart is empty
  });
});
