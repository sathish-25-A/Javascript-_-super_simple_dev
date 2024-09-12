let task = [
  "wake up",
  "gym",
  "break fast",
  "work",
  "lunch",
  "work",
  "snacks",
  "work",
];

let setValue = new Set(task);

let result = document.querySelector("#para");

setValue.forEach((element) => {
  result.innerHTML += "<li>" + element + "</li>";
});

console.log(setValue);
