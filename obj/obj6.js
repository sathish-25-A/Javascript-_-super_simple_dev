let book = {
  title: "the great gatsby ",
  author: "F.scott fitzgerald",
  yearpublish: 1925,
};

for (let key in book) {
  console.log(`${key} : ${book[key]}`);
}
