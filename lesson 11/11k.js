function count(num) {
  let answer = 0;

  for (let i = 0; i < num.length; i++) {
    if (num[i] > 0) {
      answer++;
    }
  }

  return answer;
}
console.log(count([1, 4, 5]));
console.log(count([6, -4, -55]));
