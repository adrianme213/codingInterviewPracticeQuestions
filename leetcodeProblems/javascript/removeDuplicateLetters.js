/*
Given a string s, remove duplicate letters so that every letter appears once and only once. You must make sure your result is the smallest in lexicographical order among all possible results.

Note: This question is the same as 1081: https://leetcode.com/problems/smallest-subsequence-of-distinct-characters/



Example 1:

Input: s = "bcabc"
Output: "abc"

Example 2:

Input: s = "cbacdcbc"
Output: "acdb"



Constraints:

    1 <= s.length <= 104
    s consists of lowercase English letters.

*/

var removeDuplicateLetters = function(s) {
    if(s.length === 1) return s;
    const lastIndex = {};
    for(let ii = 0; ii < s.length; ii++) {
        lastIndex[s[ii]] = ii;
    }

    const stack = [];
    const letterSeen = new Set([]);

    for(let ii = 0; ii < s.length; ii++) {
        const curLetter = s[ii];
        if(letterSeen.has(curLetter)) continue;
        if(stack.length) {
            let topLetter = stack[stack.length-1];
            while(curLetter < topLetter && lastIndex[topLetter] > ii) {
                const removed = stack.pop();
                letterSeen.delete(removed);
                if(stack.length === 0) break;
                topLetter = stack[stack.length-1];
            }
        }

        stack.push(curLetter);
        letterSeen.add(curLetter);
    }
    return stack.join('');
};
