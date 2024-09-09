let obj = {
  name: "jhon",
  age: 20,
  marks: {
    math: 85,
    science: 90,
    english: 75,
  },
};

console.log(obj.marks.math);

console.log((obj.marks.science = 95));

obj.grade = "A";

console.log(obj);
