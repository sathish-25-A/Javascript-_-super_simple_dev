let result = document.getElementById("para");
let name = "Sathish";
let hour = 7;

if (hour >= 6 && hour <= 12) {
  result.textContent = ` good morning ${name}`;
} else if (hour >= 13 && hour <= 17) {
  result.innerHTML = `good Afternoon ${name}`;
} else {
  result.innerHTML = `good Night ${name}`;
}
