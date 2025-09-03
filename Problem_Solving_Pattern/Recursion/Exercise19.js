// recursiveRange
// Write a function called recursiveRange which accepts a number and adds up all the numbers from 0 to the number passed to the function

// SAMPLE INPUT/OUTPUT
// recursiveRange(6) // 21
// recursiveRange(10) // 55

function recursiveRange(nums) {
  if (nums === 1) return 1;
  return nums + recursiveRange(nums - 1);
}

console.log(recursiveRange(6));
console.log(recursiveRange(10));
