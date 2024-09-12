let obj = {
  fname: "sathish",
  lname: "a",
  age: 24,
};

// let { fname: firstName, lname } = obj;

// console.log(firstName, lname);

function display({ fname, lname, age }) {
  console.log(`hi my name is ${fname}  ${lname} and my age is : ${age} `);
}

display(obj);
