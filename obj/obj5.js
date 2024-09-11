let car = {
  brand: "toyota",
  model: "corolla",
  year: 2020,
};
car.color = "red";
console.log((car.year = 2022));
delete car.model;

console.log(car);
