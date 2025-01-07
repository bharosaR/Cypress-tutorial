/// <reference types="Cypress" />

describe("Product Sorting with Slicing and Comparison", () => {
  beforeEach(() => {
    cy.visit("https://www.saucedemo.com/");
    cy.login_user("standard_user", "secret_sauce");
  });

  it("should sort and validate product prices from high to low", () => {
    // Select the "High to Low" sorting option
    cy.get(".product_sort_container").select("hilo");

    // Extract and parse prices
    cy.get(".inventory_item_price")
      .should("exist")
      .then(($prices) => {
        // Convert prices to an array of numbers
        const prices = $prices
          .toArray()
          .map((priceElement) =>
            parseFloat(priceElement.innerText.replace("$", "").trim())
          );

        // Debug: Log extracted prices for clarity
        cy.log("Extracted Prices:", prices);

        // Validate that the prices are sorted in descending order
        const sortedPrices = [...prices].sort((a, b) => b - a);
        expect(prices).to.deep.equal(sortedPrices);

        // Validate the first three prices are sorted correctly
        const firstThreePrices = prices.slice(0, 3);
        const sortedFirstThree = [...firstThreePrices].sort((a, b) => b - a);
        expect(firstThreePrices).to.deep.equal(sortedFirstThree);
      });
  });
});

// / <reference types="Cypress" />

// describe("Cart Operations - Data-Driven & Modular Testing", () => {
//   before(() => {
//     cy.fixture("products").as("products");
//   });

//   beforeEach(() => {
//     cy.visit("https://www.saucedemo.com/");
//     cy.login_user("standard_user", "secret_sauce");
//   });

//   it("should add the 1st, 3rd, and 5th items to the cart", function () {
//     const itemsToAdd = [0, 2, 4]; // Indexes for 1st, 3rd, 5th items
//     itemsToAdd.forEach((index) => {
//       cy.addToCart(this.products.products[index].id);
//     });
//     cy.get(".shopping_cart_badge").should("have.text", `${itemsToAdd.length}`);
//   });

//   it("should remove the 1st, 3rd, and 5th items from the cart", function () {
//     const itemsToRemove = [0, 2, 4]; // Indexes for 1st, 3rd, 5th items
//     itemsToRemove.forEach((index) => {
//       cy.removeFromCart(this.products.products[index].id);
//     });
//     cy.get(".shopping_cart_badge").should("not.exist");
//   });

//   it("should sort products from high to low price", () => {
//     cy.sortProductsHighToLow();
//     cy.get(".inventory_item_price")
//       .then((prices) =>
//         Cypress._.map(prices, (price) =>
//           parseFloat(price.innerText.replace("$", ""))
//         )
//       )
//       .then((sortedPrices) => {
//         const isSorted = sortedPrices.every(
//           (val, i, arr) => !i || arr[i - 1] >= val
//         );
//         expect(isSorted).to.be.true;
//       });
//   });
// });
