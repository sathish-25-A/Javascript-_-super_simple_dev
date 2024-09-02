function addOne(array1, array2) {
  const answer = [];

  for (let i = 0; i < array1.length; i++) {
    answer.push(array1[i] + array2[i]);
  }

  return answer;
}

console.log(addOne([1, 4, 5], [1, 1, 1]));

console.log(addOne([5, 5, 5], [5, 5, 5]));
