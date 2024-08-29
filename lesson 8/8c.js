let product = {
  name: "basketball",
  price: 2095,
};

product["delivery-time"] = "3 days";

document.write(JSON.stringify(product));
