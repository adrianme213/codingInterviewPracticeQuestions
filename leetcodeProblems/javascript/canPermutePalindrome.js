/*
Given a string, determine if a permutation of the string could form a palindrome.

Example 1:

Input: "code"
Output: false

Example 2:

Input: "aab"
Output: true

Example 3:

Input: "carerac"
Output: true


*/
/**
 * @param {string} s
 * @return {boolean}
 */
var canPermutePalindrome = function(s) {
    const dict = {};
    for(let ii = 0; ii < s.length; ii++) {
        dict[s[ii]] = dict[s[ii]] ? dict[s[ii]]+1 : 1;
    }
    
    let oddCount = 0;
    for(let l in dict) {
        if(dict[l]%2 === 1) oddCount += 1;
    }
    if(s.length%2 === 1) {
        if(oddCount > 1) return false;
    } else {
        if(oddCount > 0) return false;
    }
    return true;
};