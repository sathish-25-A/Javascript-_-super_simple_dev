const map1 = new Map();

map1.set("1", "red");
map1.set("2", "green");
map1.set("3", "blue");
map1.set("4", "black");
map1.set("5", "white");
map1.set("6", "yellow");

console.log(map1);
console.log(map1.get("2"));
console.log(map1.set("2", "blue1"));
console.log(map1.clear);
console.log(map1.size);

for (let [key, value] of map1) {
  console.log(`${key}=${value}`);
}
