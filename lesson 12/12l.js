const fun1 = (num) => {
  let postive = 0;
  num.forEach((num) => {
    if (num > 0) {
      postive++;
    }
  });
  return postive;
};

console.log(fun1([1, -3, 4]));
console.log(fun1([1, -3, -4]));