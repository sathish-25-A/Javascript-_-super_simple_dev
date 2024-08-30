let cartQuantity = 0;
cart_details();

function cart_details() {
  document.querySelector(
    ".para"
  ).innerHTML = `cart Quantity :  ${cartQuantity}`;
}
function UpdateCart(change) {
  if (cartQuantity + change > 10) {
    alert("cart is Full");
    return;
  }
  if (cartQuantity + change < 0) {
    alert("not enough items");
    return;
  }
  cartQuantity += change;

  cart_details();
}


function ResetCart() {
    cartQuantity = 0;
    cart_details();
  }