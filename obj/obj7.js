let student = {
  name: "bob",
  age: 18,
  subject: {
    math: 90,
    english: 85,
    science: 92,
  },
};

console.log(student.subject.math);

student.subject.history = 88;

console.log(student);
