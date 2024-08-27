let show = document.getElementById("cart");
let add = document.getElementById("add");
let plus_2 = document.getElementById("+2");
let Plus_3 = document.getElementById("+3");
let Plus_4 = document.getElementById("+4");
let Plus_5 = document.getElementById("+5");
let rest = document.getElementById("rest");
let para = document.getElementById("para");
let remove_1 = document.getElementById("-1");
let remove_2 = document.getElementById("-2");
let remove_3 = document.getElementById("-3");

let cart = 0;
show.onclick = function () {
  document.getElementById("para").innerHTML = `cart Quantity :  ${cart}`;
};
add.onclick = function () {
  document.getElementById("para").innerHTML = ` Quantity :  ${(cart += 1)}`;
};
plus_2.onclick = function () {
  document.getElementById("para").innerHTML = ` Quantity :  ${(cart += 2)}`;
};
Plus_3.onclick = function () {
  document.getElementById("para").innerHTML = ` Quantity :  ${(cart += 3)}`;
};
Plus_4.onclick = function () {
  document.getElementById("para").innerHTML = ` Quantity :  ${(cart += 4)}`;
};
Plus_5.onclick = function () {
  document.getElementById("para").innerHTML = ` Quantity :  ${(cart += 5)}`;
};

rest.onclick = function () {
  cart = 0;
  document.getElementById("para").innerHTML = ` Quantity : ${cart}`;
};
remove_1.onclick = function () {
  document.getElementById("para").innerHTML = ` Quantity :  ${(cart -= 1)}`;
};
remove_2.onclick = function () {
  document.getElementById("para").innerHTML = ` Quantity :  ${(cart -= 2)}`;
};
remove_3.onclick = function () {
  document.getElementById("para").innerHTML = ` Quantity :  ${(cart -= 3)}`;
};
