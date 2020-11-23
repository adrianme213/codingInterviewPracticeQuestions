/*
Given a string s , find the length of the longest substring t  that contains at most 2 distinct characters.

Example 1:

Input: "eceba"
Output: 3
Explanation: t is "ece" which its length is 3.

Example 2:

Input: "ccaabbb"
Output: 5
Explanation: t is "aabbb" which its length is 5.

*/
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstringTwoDistinct = function(s) {
    let set = new Set(s.split(''))
    if(set.size <= 2) return s.length;
    
    let max = 0;
    let p1 = 0;
    let p2 = 1;
    
    for(let ii = 0; ii < s.length-1; ii++) {
        let start = ii;
        p1 = ii;
        p2 = ii+1;
        while(s[p2] === s[p1] && p2 < s.length-1) {
            p2++;
        }
        let let1 = s[p1];
        let let2 = s[p2];
        let last = p2;
        
        while((s[last] === let1 || s[last] === let2) && last < s.length) {
            last++;
        }
        
        
       if(max < last-start) {
           max = last-start;
       } 
    }
    
    return max;
};