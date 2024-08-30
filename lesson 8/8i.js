// let result = document.getElementById("para");
// let result1 = document.getElementById("para1");
// let random = Math.random();

// const answer =
//   random < 0.5 ? (result.textContent = "head") : (result.textContent = "tails");

// const guess = "head";

// result1.textContent = guess === answer ? "you win" : "you lose";

let para = document.getElementById("para");
let score = {
  win: 0,
  losses: 0,
};

function playgame(guess) {
  let random = Math.random();
  let result = random < 0.5 ? "head" : "Tail";
  if (guess === result) {
    score.win++;
  } else {
    score.losses--;
  }
  alert(guess === result ? "you win" : "You lose");
  para.textContent = JSON.stringify(score);
}