function addOne(array, num) {
    const answer = [];
  
    for (let i = 0; i < array.length; i++) {
      answer.push(array[i] + num);
    }
  
    return answer;
  }