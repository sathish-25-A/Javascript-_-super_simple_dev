function counter() {
  let inputs = 0;

  function add() {
    return ++inputs;
  }
  function sub() {
    return --inputs;
  }
  return {
    add,
    sub,
  };
}

const myCounter = counter();
console.log(myCounter.add());  // 1
console.log(myCounter.add());  // 2
console.log(myCounter.sub());