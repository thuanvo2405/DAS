// Divide and Conquer - sortedFrequency
// Given a sorted array and a number, write a function called sortedFrequency that counts the occurrences of the number in the array

// sortedFrequency([1,1,2,2,2,2,3],2) // 4
// sortedFrequency([1,1,2,2,2,2,3],3) // 1
// sortedFrequency([1,1,2,2,2,2,3],1) // 2
// sortedFrequency([1,1,2,2,2,2,3],4) // -1
// Time Complexity - O(log n)

function sortedFrequency(arr, num) {
  // add whatever parameters you deem necessary - good luck!
  if (arr.length === 0) return -1;
  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
    let middle = Math.floor((start + end) / 2);

    if (arr[middle] === 1) {
      start = middle + 1;
    } else if (arr[middle] === 0) {
      end = middle - 1;
    }
    console.log(`start: ${start}, end: ${end}, middle: ${middle}`);
  }
  return arr.length - 1 - Math.floor((start + end) / 2);
}
