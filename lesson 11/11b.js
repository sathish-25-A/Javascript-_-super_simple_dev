function get(array) {
  const lastindex = array.length - 1;
  return array[lastindex];
}

console.log(get([1, 20, 22, 24, 5]));
console.log(get(["hi", "hello", "good"]));
