class animal {
  constructor(name, species) {
    this.name = name;
    this.species = species;
  }

  speak() {
    console.log(`${this.name} make a noise`);
  }

  info() {
    console.log(`this is a ${this.species} named ${this.name}`);
  }
}

let dog = new animal("rover ", "dog");
let cat = new animal("whiskers", "cat");

dog.speak();
cat.info();
