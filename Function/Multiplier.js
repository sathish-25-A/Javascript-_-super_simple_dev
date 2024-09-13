function multiplier(factor) {
  return {
    two: () => {
      return factor * 2;
    },
    three: () => {
      return factor * 3;
    },
  };
}

const result = multiplier(5);

console.log(result.two());
console.log(result.three());
