/*
Given a string s, partition s such that every substring of the partition is a palindrome. Return all possible palindrome partitioning of s.

A palindrome string is a string that reads the same backward as forward.
Example 1:
Input: s = "aab"
Output: [["a","a","b"],["aa","b"]]

Example 2:
Input: s = "a"
Output: [["a"]]

Constraints:

    1 <= s.length <= 16
    s contains only lowercase English letters.

*/
/**
 * @param {string} s
 * @return {string[][]}
 */
var isPalindrome = (str) => {
    const rev = str.split('').reverse().join('');
    return rev === str;
}

var partition = function(s) {
    const res = [];
    
    const traverse = (str, path) => {
        if(str === "") {
            res.push(path);
            return;
        }
        
        for(let ii = 1; ii <= str.length; ii++) {
            const substring = str.substring(0,ii);
            const remainder = str.substring(ii);
            if(isPalindrome(substring)) {
                traverse(remainder, [...path, substring]);
            }
        }
    }
    traverse(s, []);
    return res;
};