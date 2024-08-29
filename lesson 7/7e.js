let para = document.getElementById("para");

function convert(fahrenheit) {
  return ((fahrenheit - 32) * 5) / 9;
}

para.textContent = convert(86);
