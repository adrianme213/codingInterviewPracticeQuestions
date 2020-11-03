/*
Given a string s, the power of the string is the maximum length of a non-empty substring that contains only one unique character.

Return the power of the string.

Example 1:

Input: s = "leetcode"
Output: 2
Explanation: The substring "ee" is of length 2 with the character 'e' only.

Example 2:

Input: s = "abbcccddddeeeeedcba"
Output: 5
Explanation: The substring "eeeee" is of length 5 with the character 'e' only.

Example 3:

Input: s = "triplepillooooow"
Output: 5

Example 4:

Input: s = "hooraaaaaaaaaaay"
Output: 11

Example 5:

Input: s = "tourist"
Output: 1

Constraints:

    1 <= s.length <= 500
    s contains only lowercase English letters.

*/

/**
 * @param {string} s
 * @return {number}
 */
 var maxPowerLinear = function(s) {
    if(s.length === 0) return 0;

    let count = 1;
    let maxCount = 1;
    let prevLetter = s[0];

    for(let ii = 1; ii < s.length; ii++) {
        if(s[ii] === prevLetter) {
            count++
        } else {
            maxCount = Math.max(count, maxCount);
            count = 1;
            prevLetter = s[ii];
        }
    }
    maxCount = Math.max(count, maxCount);
    return maxCount;
};

var maxPowerQuad = function(s) {
    let max = 0;
    let slow = 0;
    let fast = 1;

    while(slow < s.length) {
        const curLetter = s[slow];
        for(let ii = fast; ii < s.length; ii++) {
            if(s[ii] !== curLetter) break;
            fast++;
        }

        if(fast-slow > max) max = fast-slow;
        slow++;
        fast = slow + 1;
    }

    return max;
};
