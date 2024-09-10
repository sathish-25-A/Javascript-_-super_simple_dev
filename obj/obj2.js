let product = {
  name: "Laptop",
  price: 500,
  category: "Electronics",
  quantity: 100,
};

function val(name, price, category, quantity) {
  this.name = name;
  this.price = price;
  this.category = category;
  this.quantity = quantity;

  let totalsolid = 0;

  this.price = function (sellquantity) {
    if (this.quantity < sellquantity) {
      console.log(` insufficient ${this.name}`);
    } else {
      this.quantity -= sellquantity;
      totalsolid += sellquantity;
      console.log(`${sellquantity} solid ${this.name}`);
      return totalsolid;
    }

    this.gettotalsolid = function () {
      return totalsolid;
    };
  };
}

let laptop = new val("Laptop", 500, "Electronics", 100);

laptop.price(20);
laptop.price(90);
console.log(laptop.gettotalsolid());
