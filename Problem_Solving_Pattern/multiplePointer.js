// Multiple Pointers - countUniqueValues
// Implement a function called countUniqueValues, which accepts a sorted array, and counts the unique values in the array. There can be negative numbers in the array, but it will always be sorted.

// countUniqueValues([1,1,1,1,1,2]) // 2
// countUniqueValues([1,2,3,4,4,4,7,7,12,12,13]) // 7
// countUniqueValues([]) // 0
// countUniqueValues([-2,-1,-1,0,1]) // 4
// Time Complexity - O(n)

// Space Complexity - O(n)

// Bonus

// You must do this with constant or O(1) space and O(n) time.

// colt way this is two pointer;
// function countUniqueValues(arr) {
//   if (arr.length === 0) return 0;
//   let i = 0;
//   for (let j = 1; j < arr.length; j++) {
//     if (arr[i] !== arr[j]) {
//       i++;
//       arr[i] = arr[j];
//     }
//   }
//   return i + 1;
// }

// my way
function countUniqueValues(arr) {
  // add whatever parameters you deem necessary - good luck!
  let count = 0;
  if (arr.length === 0) return count;
  let index = 0;
  while (index < arr.length - 1) {
    if (arr[index] !== arr[index + 1]) {
      count++;
      index++;
    } else {
      index++;
    }
  }

  return count + 1;
}

console.log(countUniqueValues([-2, -1, -1, 0, 1]));
console.log(countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13]));
console.log(countUniqueValues([]));
console.log(countUniqueValues([1, 1, 1, 1, 1, 2]));
