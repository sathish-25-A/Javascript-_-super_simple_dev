let car = {
  brand: "Toyota",
  model: "corolla",
  year: 2021,
  color: "Blue",
  startengine: function () {
    console.log("engine i starting");
  },
  changecolor: function (newcolor) {
    this.color = newcolor;
    console.log(`the car color is now ${this.color}`);
  },
};

console.log(car.brand);
console.log(car.model);

car.startengine();

car.changecolor("yellow");
