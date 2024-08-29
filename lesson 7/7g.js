let para = document.getElementById("para");
let para1 = document.getElementById("para1");
let para2 = document.getElementById("para2");

function convert(length, from, to) {
  if (from === "km" && to === "miles") {
    return `${length / 1.6} Miles`;
  } else if (from === "miles" && to === "Km") {
    return `${length * 1.6}Km`;
  } else if (from === to) {
    return `${length} ${to}`;
  }
}

para.textContent = convert(50, "miles", "km");
console.log(convert(50, 'miles', 'km'));