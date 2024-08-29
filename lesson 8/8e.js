let product = {
  name: "basketball",
  price: 2095,
};

let product1 = {
  name: "basketball",
  price: 295,
};

function isSameProduct(product, product1) {
  if (product.name === product1.name && product.price === product1.price) {
    return true;
  } else {
     return false;
  }
}

console.log(isSameProduct(product, product1));
