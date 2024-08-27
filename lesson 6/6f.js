let result = document.getElementById("para");
let random = Math.random();

if (random <= 0.5) {
  result.textContent = "Head";
} else {
  result.textContent = "Tails";
}
