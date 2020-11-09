/*
Given a string, find the first non-repeating character in it and return its index. If it doesn't exist, return -1.

Examples:

s = "leetcode"
return 0.

s = "loveleetcode"
return 2.



Note: You may assume the string contains only lowercase English letters.

*/

/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    const map = {};
    for(let ii = 0; ii < s.length; ii++) {
        map[s[ii]] = map[s[ii]] ? map[s[ii]]+1 : 1;
    }
    const onlyFiltered = [];
    for(let prop in map) {
        if(map[prop] === 1) {
            onlyFiltered.push(prop);
        }
    }
    const onlyFilteredIndexes = onlyFiltered.map(letter => s.indexOf(letter));

    return onlyFilteredIndexes.length > 0 ? onlyFilteredIndexes[0] : -1;
};
