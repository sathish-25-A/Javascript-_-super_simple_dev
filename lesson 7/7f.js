let para = document.getElementById("para");

let para2 = document.getElementById("para2");


function convertFar(celsius) {
  return (celsius * 9) / 5 + 32;
}

para.textContent = convertFar(25);
function convertCel(fahrenheit) {
  return ((fahrenheit - 32) * 5) / 9;
}

function convert(degrees, unit) {
  if (unit === "C") {
    const result = convertFar(degrees);
    return `${result} F`;
  } else if (unit === "F") {
    const result = convertCel(degrees);
    return `${result} C`;
  }
}

para.textContent = convert(25, "C");
para2.textContent = convert(86, "F");
