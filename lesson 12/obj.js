const obj3 = {
  name: "hari",
  age: 20,
  fuc: function () {
    return `name:${this.name} age:${this.age} ages`;
  }
};
document.querySelector(".para").innerHTML = obj3.fuc();

// console.log(obj3.toString());
