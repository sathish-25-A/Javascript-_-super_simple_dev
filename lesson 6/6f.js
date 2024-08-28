let result = document.getElementById("para");
let result1 = document.getElementById("para1");
let random = Math.random();
let answer;
if (random < 0.5) {
  answer = "head";
  result.textContent = "Head";
} else {
  answer = "Tails";
  result.textContent = "Tails";
}
let guess = "head";

if (guess === answer) {
  result1.textContent = "you win";
} else {
  result1.textContent = "you lose";
}
