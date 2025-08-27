// Frequency Counter - constructNote
// Write a function called constructNote, which accepts two strings, a message and some letters. The function should return true if the message can be built with the letters that you are given, or it should return false.

// Assume that there are only lowercase letters and no space or special characters in both the message and the letters.

// Bonus Constraints:

// If M is the length of message and N is the length of letters:

// Time Complexity: O(M+N)

// Space Complexity: O(N)

// Examples:

// constructNote('aa', 'abc') // false
// constructNote('abc', 'dcba') // true
// constructNote('aabbcc', 'bcabcaddff') // true

function constructNote(message, letters) {
  // add whatever parameters you deem necessary - good luck!
  if (!message) return true;
  if (!letters) return false;
  const frequency1 = {};
  const frequency2 = {};
  for (let i of letters) {
    frequency1[i] = (frequency1[i] || 0) + 1;
  }
  for (let i of message) {
    frequency2[i] = (frequency2[i] || 0) + 1;
  }
  for (let i in frequency2) {
    if (frequency2[i] > frequency1[i]) return false;
  }
  return true;
}

console.log(constructNote("aa", "abc"));
console.log(constructNote("abc", "dcba"));
console.log(constructNote("aabbcc", "bcabcaddff"));
