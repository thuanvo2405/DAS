// Sliding Window - findLongestSubstring
// Write a function called findLongestSubstring, which accepts a string and returns the length of the longest substring with all distinct characters.

// findLongestSubstring('') // 0
// findLongestSubstring('rithmschool') // 7
// findLongestSubstring('thisisawesome') // 6
// findLongestSubstring('thecatinthehat') // 7
// findLongestSubstring('bbbbbb') // 1
// findLongestSubstring('longestsubstring') // 8
// findLongestSubstring('thisishowwedoit') // 6
// Time Complexity - O(n)

function findLongestSubstring(str) {
  // add whatever parameters you deem necessary - good luck!.
  if (str.length === 0) return 0;
  let count = 0;
  let start = 0;
  let end = 0;
  let hashMap = {};
  while (end < str.length) {
    if (!hashMap[str[end]]) {
      hashMap[str[end]] = 1;
      end++;
      count = Math.max(count, end - start);
    } else {
      hashMap[str[start]] -= 1;
      start++;
      count = Math.max(count, end - start);
    }
  }
  return count;
}

console.log(findLongestSubstring("")); // 0
console.log(findLongestSubstring("rithmschool")); // 7
console.log(findLongestSubstring("thisisawesome")); // 6
console.log(findLongestSubstring("thecatinthehat")); // 7
console.log(findLongestSubstring("bbbbbb")); // 1
console.log(findLongestSubstring("longestsubstring")); // 8
console.log(findLongestSubstring("thisishowwedoit")); // 6
