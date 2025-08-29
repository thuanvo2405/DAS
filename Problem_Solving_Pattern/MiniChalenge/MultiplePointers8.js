// Multiple Pointers - isSubsequence
// Write a function called isSubsequence which takes in two strings and checks whether the characters in the first string form a subsequence of the characters in the second string. In other words, the function should check whether the characters in the first string appear somewhere in the second string, without their order changing.

// Examples:

// isSubsequence('hello', 'hello world'); // true
// isSubsequence('sing', 'sting'); // true
// isSubsequence('abc', 'abracadabra'); // true
// isSubsequence('abc', 'acb'); // false (order matters)
// Your solution MUST have AT LEAST the following complexities:

// Time Complexity - O(N + M)

// Space Complexity - O(1)

function isSubsequence(sub, target) {
  // good luck. Add any arguments you deem necessary.
  if (!target) return false;
  if (sub.length > target.length) return false;
  if (!sub) return true;

  let start = 0;
  let go = 0;
  while (go < target.length) {
    if (sub[start] === target[go]) {
      console.log(sub[start], target[go]);
      start++;
      if (start === sub.length) return true;
    }
    go++;
  }
  return false;
}

console.log(isSubsequence("hello", "hello world")); // true
console.log(isSubsequence("sing", "sting")); // true
console.log(isSubsequence("abc", "abracadabra")); // true
console.log(isSubsequence("abc", "acb")); // false (order matters)
