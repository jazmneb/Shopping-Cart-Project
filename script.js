/* Create an array named products which you will use to add all of your product object literals that you create in the next step. */
let products = [
  {name: "Cherry", price: 5.00, quantity: 0, productId: 1, image: "images/cherry.jpg" },
  {name: "Orange", price: 5.00, quantity: 0, productId: 2, image: "images/orange.jpg"},
  {name: "Strawberry", price: 5.00, quantity: 0, productId: 3, image: "images/strawberry.jpg"}

];
/* Create 3 or more product objects using object literal notation 
   Each product should include five properties
   - name: name of product (string)
   - price: price of product (number)
   - quantity: quantity in cart should start at zero (number)
   - productId: unique id for the product (number)
   - image: picture of product (url string)
*/

/* Images provided in /images folder. All images from Unsplash.com
   - cherry.jpg by Mae Mu
   - orange.jpg by Mae Mu
   - strawberry.jpg by Allec Gomes
*/

/* Declare an empty array named cart to hold the items in the cart */
let cart = [];
/* Create a function named addProductToCart that takes in the product productId as an argument
  - addProductToCart should get the correct product based on the productId
  - addProductToCart should then increase the product's quantity
  - if the product is not already in the cart, add it to the cart
*/



function addProductToCart (productId) {
      for (let i=0; i < products.length; i++ ) {
        if (products[i].productId === productId) {
          let isProductInCart = false;
          for (let c = 0; c < cart.length; c++){
            if (cart[c].productId === productId) {
              isProductInCart = true;
              cart[c].quantity += 1;
              return;
            }
          }
          if (!isProductInCart) {
            products[i].quantity = 1;
            cart.push (products[i]);
          } else {
        return ("Product unavailable.");
      }
    }
  }
}



/* Create a function named increaseQuantity that takes in the productId as an argument
  - increaseQuantity should get the correct product based on the productId
  - increaseQuantity should then increase the product's quantity
*/
function increaseQuantity (productId) {
  for (let i=0; i < cart.length; i++ ) {
    if (cart[i].productId === productId) {
      cart[i].quantity += 1;
    }
  }
}


/* Create a function named decreaseQuantity that takes in the productId as an argument
  - decreaseQuantity should get the correct product based on the productId
  - decreaseQuantity should decrease the quantity of the product
  - if the function decreases the quantity to 0, the product is removed from the cart
*/
function decreaseQuantity (productId) {
  for (let i = 0; i<cart.length; i++) {
    if (cart[i].productId === productId) {
      cart[i].quantity -= 1;
      if (cart[i].quantity===0) {
        cart.splice(i, 1);
        return;
      }
    }
  }
}
/* Create a function named removeProductFromCart that takes in the productId as an argument
  - removeProductFromCart should get the correct product based on the productId
  - removeProductFromCart should update the product quantity to 0
  - removeProductFromCart should remove the product from the cart
*/
function removeProductFromCart (productId) {
  for (let i =0 ; i <cart.length; i++) {
    if (cart[i].productId === productId) {
      cart.splice(i, 1);
      return;
    }
  }
}
/* Create a function named cartTotal that has no parameters
  - cartTotal should iterate through the cart to get the total of all products
  - cartTotal should return the sum of the products in the cart
*/
function cartTotal () {
  let total = 0
  for (let i=0; i< cart.length; i++) {
    total+=cart[i].price * cart[i].quantity;
  }
  return total;
};
/* Create a function called emptyCart that empties the products from the cart */
function emptyCart () {
  cart= [];
}

/* Create a function named pay that takes in an amount as an argument
  - pay will return a negative number if there is a remaining balance
  - pay will return a positive number if money should be returned to customer
*/
let totalPaid= 0;

function pay (amount) {
totalPaid += amount;
let remaining = totalPaid - cartTotal();
if (remaining >= 0) {
  totalPaid = 0;
  emptyCart ();
}
return remaining;
}
/* Place stand out suggestions here (stand out suggestions can be found at the bottom of the project rubric.)*/


/* The following is for running unit tests. 
   To fully complete this project, it is expected that all tests pass.
   Run the following command in terminal to run tests
   npm run test
*/

const moduleexports = {
  products,
  cart,
  addProductToCart,
  increaseQuantity,
  decreaseQuantity,
  removeProductFromCart,
  cartTotal,
  pay, 
  emptyCart,
}