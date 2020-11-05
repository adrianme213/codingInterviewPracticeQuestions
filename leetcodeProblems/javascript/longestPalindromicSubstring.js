/*
Given a string s, return the longest palindromic substring in s.
Example 1:

Input: s = "babad"
Output: "bab"
Note: "aba" is also a valid answer.
Example 2:

Input: s = "cbbd"
Output: "bb"
Example 3:

Input: s = "a"
Output: "a"
Example 4:

Input: s = "ac"
Output: "a"

Constraints:

1 <= s.length <= 1000
s consist of only digits and English letters (lower-case and/or upper-case),
*/

/**
 * @param {string} s
 * @return {string}
 */
var isPalindrome = (s) => {
    for(let ii = 0, jj = s.length-1; ii < Math.floor(s.length/2); ii++, jj--) {
        if(s[ii] !== s[jj]) return false;
    }
    return true;
}

var longestPalindrome = function(s) {
    if(s.length === 1) return s;
    let maxStr = '';
    for(let ii = 0; ii < s.length; ii++) {
        for(let jj = s.length; jj > ii; jj--) {
            const substr = s.substring(ii, jj);
            if(substr.length > maxStr.length && isPalindrome(substr)) {
                maxStr = substr;
            }
        }
    }
    return maxStr;
};
