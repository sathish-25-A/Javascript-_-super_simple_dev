let result = document.getElementById("para");

let age = 18;

if (age <= 6 || age >= 65) {
  result.innerHTML = `discount`;
} else {
  result.innerHTML = ` no discount`;
}
