// function math(num) {
//   const result = {
//     min: num[0],
//     max: num[0],
//   };
//   for (i = 0; i < num.lenght; i++) {
//     const val = num[i];
//     if (value < result.min) {
//       result.min = val;
//     }
//     if (value > result.max) {
//       result.max = val;
//     }
//   }
//   return result;
// }

function minMax(nums) {
  // We'll set the starting values of min and max
  // as the first value in the array. (This is
  // just one way to set the starting values. You
  // can use another way if you like.)
  const result = {
    min: nums[0],
    max: nums[0],
  };

  for (let i = 0; i < nums.length; i++) {
    const value = nums[i];

    // If the value is less than the min,
    // update the min.
    if (value < result.min) {
      result.min = value;
    }

    // If the value is greater than the max,
    // update the max.
    if (value > result.max) {
      result.max = value;
    }
  }

  return result;
}

console.log(minMax([1, -3, 5]));
console.log(minMax([-2, 3, -5, 7, 10]));
