function arrayswap(array) {
  const lastindex = array.length - 1;
  const last = array[lastindex];
  const first = array[0];

  array[0] = last;
  array[lastindex] = first;

  return array;
}
console.log(arraySwap([1, 20, 22, 24, 5]));
console.log(arraySwap(["hi", "hello", "hey"]));
