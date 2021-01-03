/*
Given two strings s and t, return true if they are both one edit distance apart, otherwise return false.

A string s is said to be one distance apart from a string t if you can:

    Insert exactly one character into s to get t.
    Delete exactly one character from s to get t.
    Replace exactly one character of s with a different character to get t.

 

Example 1:

Input: s = "ab", t = "acb"
Output: true
Explanation: We can insert 'c' into s to get t.

Example 2:

Input: s = "", t = ""
Output: false
Explanation: We cannot get t from s by only one step.

Example 3:

Input: s = "a", t = ""
Output: true

Example 4:

Input: s = "", t = "A"
Output: true

 

Constraints:

    0 <= s.length <= 104
    0 <= t.length <= 104
    s and t consist of lower-case letters, upper-case letters and/or digits.


*/
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isOneEditDistance = function(s, t) {
    const sArr = s.split('').sort((a,b) => a-b);
    const tArr = t.split('').sort((a,b) => a-b);
    
    if(s.length-t.length === -1) {
        // Insert one
        let sp = 0;
        let tp = 0;
        let insertedOne = true;
        while(tp < t.length) {
            if(sArr[sp] !== tArr[tp] && insertedOne) {
                insertedOne = false;
                sArr.splice(sp, 0, tArr[tp]);
            } else if(sArr[sp] !== tArr[tp] && !insertedOne) {
                return false;
            } else {
                tp++;
                sp++;
            }
        }
        return true;
        
    } else if(s.length-t.length === 0) {
        // Replace one
        if(s.length === 0 || s === t) return false;
        let sp = 0;
        let tp = 0;
        let insertedOne = true;
        while(tp < t.length) {
            if(sArr[sp] !== tArr[tp] && insertedOne) {
                insertedOne = false;
                tArr[tp] = sArr[sp]
            } else if(sArr[sp] !== tArr[tp] && !insertedOne) {
                return false;
            }
            sp++;
            tp++;
        }
        return true;
        
    } else if(s.length-t.length === 1) {
        // Delete one
        let sp = 0;
        let tp = 0;
        let insertedOne = true;
        while(tp < t.length || insertedOne) {
            if(sArr[sp] !== tArr[tp] && insertedOne) {
                insertedOne = false;
                sArr.splice(sp, 1);
            } else if(sArr[sp] !== tArr[tp] && !insertedOne) {
                return false;
            } else {
                tp++;
                sp++;
            }
        }
        return true;
    }
    
    return false;
};
