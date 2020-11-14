/*
Given a string s, find the longest palindromic substring in s. You may assume that the maximum length of s is 1000.

Example 1:

Input: "babad"
Output: "bab"
Note: "aba" is also a valid answer.

Example 2:

Input: "cbbd"
Output: "bb"

*/

var expandAroundCenter = function(s, left, right) {
  /*
  Returns an int value for longest palindrome for a word;
  */
  let l = left;
  let r = right;

  while (l >= 0 && r < s.length && s.charAt(l) === s.charAt(r)) {
    l--;
    r++;
  }

  return r - l - 1;
}

var longestPalindrome = function(s) {
  if (s === null || s.length < 1) return "";
  let start = 0;
  let end = 0;
  for (ii = 0; ii < s.length; ii++) {
    let len1 = expandAroundCenter(s, ii, ii);
    let len2 = expandAroundCenter(s, ii, ii + 1);
    let len = Math.max(len1, len2);

    if (len > end - start) {
      start = ii - Math.floor((len - 1) / 2);
      end = ii + Math.floor(len / 2);
    }
  }

  return s.slice(start, end + 1);
};
