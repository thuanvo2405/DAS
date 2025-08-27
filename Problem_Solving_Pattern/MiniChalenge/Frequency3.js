// Frequency Counter - sameFrequency
// Write a function called sameFrequency. Given two positive integers, find out if the two numbers have the same frequency of digits.

// Your solution MUST have the following complexities:

// Time: O(N)

// Sample Input:

// sameFrequency(182,281) // true
// sameFrequency(34,14) // false
// sameFrequency(3589578, 5879385) // true
// sameFrequency(22,222) // false

function sameFrequency(num1, num2) {
  // good luck. Add any arguments you deem necessary.
  if ((num1 + "").length !== (num2 + "").length) return false;
  let frequentNum1 = {};
  let frequentNum2 = {};
  for (let i of num1 + "") {
    frequentNum1[i] = (frequentNum1[i] || 0) + 1;
  }
  for (let i of num2 + "") {
    frequentNum2[i] = (frequentNum2[i] || 0) + 1;
  }
  for (let key in num1 + "") {
    if (frequentNum1[key] !== frequentNum2[key]) return false;
  }
  return true;
}

console.log(sameFrequency(182, 281)); // true
console.log(sameFrequency(34, 14)); // false
console.log(sameFrequency(3589578, 5879385)); // true
console.log(sameFrequency(22, 222)); // false
