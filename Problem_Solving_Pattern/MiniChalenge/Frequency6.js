// Frequency Counter - findAllDuplicates
// Given an array of positive integers, some elements appear twice and others appear once. Find all the elements that appear twice in this array. Note that you can return the elements in any order.

// findAllDuplicates([4,3,2,7,8,2,3,1]) // array with 2 and 3
// findAllDuplicates([4, 3, 2, 1, 0]) // []
// findAllDuplicates([4, 3, 2, 1, 0, 1, 2, 3]) // array with 3, 2, and 1
// Time Complexity - O(n)

function findAllDuplicates(arr) {
  // add whatever parameters you deem necessary - good luck!
  const frequency = {};
  const arr1 = [];
  for (let i of arr) {
    frequency[i] = (frequency[i] || 0) + 1;
  }

  for (let i in frequency) {
    if (frequency[i] === 2) {
      arr1.push(Number(i));
    }
  }

  return arr1;
}
findAllDuplicates([4, 3, 2, 7, 8, 2, 3, 1]);
findAllDuplicates([4, 3, 2, 1, 0]);
findAllDuplicates([4, 3, 2, 1, 0, 1, 2, 3]);
