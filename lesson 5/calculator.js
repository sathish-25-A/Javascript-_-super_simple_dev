const one = document.getElementById("1");
const two = document.getElementById("2");
const three = document.getElementById("3");
const plus = document.getElementById("+");
const four = document.getElementById("4");
const five = document.getElementById("5");
const six = document.getElementById("6");
const seven = document.getElementById("7");
const eight = document.getElementById("8");
const nine = document.getElementById("9");
const zero = document.getElementById("0");
const min = document.getElementById("-");
const multi = document.getElementById("*");
const dot = document.getElementById(".");
const divide = document.getElementById("/");
const equal = document.getElementById("=");
let para = document.getElementById("para");

let value = "";

one.onclick = function () {
  document.getElementById("para").innerHTML = value += "1";
};

two.onclick = function () {
  document.getElementById("para").innerHTML = value += "2";
};
three.onclick = function () {
  document.getElementById("para").innerHTML = value += "3";
};

plus.onclick = function () {
  document.getElementById("para").innerHTML = value += "+";
};

four.onclick = function () {
  document.getElementById("para").innerHTML = value += "4";
};

five.onclick = function () {
  document.getElementById("para").innerHTML = value += "5";
};

six.onclick = function () {
  document.getElementById("para").innerHTML = value += "6";
};

min.onclick = function () {
  document.getElementById("para").innerHTML = value += "-";
};

seven.onclick = function () {
  document.getElementById("para").innerHTML = value += "7";
};

eight.onclick = function () {
  document.getElementById("para").innerHTML = value += "8";
};
nine.onclick = function () {
  document.getElementById("para").innerHTML = value += "9";
};
multi.onclick = function () {
  document.getElementById("para").innerHTML = value += "*";
};
zero.onclick = function () {
  document.getElementById("para").innerHTML = value += "0";
};
dot.onclick = function () {
  document.getElementById("para").innerHTML = value += ".";
};
equal.onclick = function () {
  value = eval(value);
  document.getElementById("para").innerHTML = value;
};
divide.onclick = function () {
  document.getElementById("para").innerHTML = value += "/";
};
