function addOne(array) {
  const answer = [];

  for (let i = 0; i < array.length; i++) {
    answer.push(array[i] + 1);
  }

  return answer;
}

console.log(addOne([1, 4, 5]));
console.log(addOne([6, -4, -55]));