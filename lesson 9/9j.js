let calculator = "";

function cal(add) {
  calculator += add;
  answer();
}

function answer() {
  document.querySelector(".para").innerHTML = calculator;
}

function calculate() {
  try {
    calculator = eval(calculator);
    answer();
  } catch (e) {
    document.querySelector(".para").innerHTML = "Error";
  }
}
