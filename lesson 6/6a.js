let result = document.getElementById("para");
let hour = 21;

if (hour >= 6 && hour <= 12) {
  result.innerHTML = "good morning";
} else if (hour >= 13 && hour <= 17) {
  result.innerHTML = "good Afternoon";
} else {
  result.innerHTML = "good Night";
}
