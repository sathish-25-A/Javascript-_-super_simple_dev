let para = document.getElementById("para");

function convert(celsius) {
  return (celsius * 9) / 5 + 32;
}

para.textContent = convert(25);
