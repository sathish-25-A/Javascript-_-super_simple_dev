let result = document.getElementById("para");

const holiday = false;

let age =3;

if ((age <= 6 || age >= 65) && !holiday) {
  result.textContent = 'discount';
} 
else {
    result.textContent = 'no discount';
}
