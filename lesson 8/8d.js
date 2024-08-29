let product = {
  name: "basketballs",
  price: 6000,
};

let product1 = {
  name: "basketball",
  price: 4095,
};

function comparePrice(product, product1) {
  if (product.price < product1.price) {
    return product;
  } else {
    return product1;
  }
}

console.log(comparePrice(product, product1));

document.write(JSON.stringify(comparePrice(product, product1)));
