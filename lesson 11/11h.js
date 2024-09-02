function addOne(array, num) {
  const answer = [];

  for (let i = 0; i < array.length; i++) {
    answer.push(array[i] + num);
  }

  return answer;
}

console.log(addOne([1, 4, 5], 2));
console.log(addOne([6, -4, -55], 4));
