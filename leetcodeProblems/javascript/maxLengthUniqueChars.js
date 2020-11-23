/*
Given an array of strings arr. String s is a concatenation of a sub-sequence of arr which have unique characters.
Return the maximum possible length of s.

Example 1:

Input: arr = ["un","iq","ue"]
Output: 4
Explanation: All possible concatenations are "","un","iq","ue","uniq" and "ique".
Maximum length is 4.

Example 2:

Input: arr = ["cha","r","act","ers"]
Output: 6
Explanation: Possible solutions are "chaers" and "acters".

Example 3:

Input: arr = ["abcdefghijklmnopqrstuvwxyz"]
Output: 26

Constraints:

    1 <= arr.length <= 16
    1 <= arr[i].length <= 26
    arr[i] contains only lower case English letters.

*/

/**
 * @param {string[]} arr
 * @return {number}
 */
var isUniqueCombination = (str) => {
    const stringsArr = str.split('');
    const setLetters = new Set(stringsArr);
    return stringsArr.length === setLetters.size;
}

var maxLength = function(arr) {
    if(arr.length === 0) return "";
    if(arr.length === 1) return arr[0].length;
    let max = "";
    
    const recurse = (arr, maxStr="") => {
        if(maxStr.length > max.length) {
            max = maxStr;
        }
        
        for(let ii = 0; ii < arr.length; ii++) {
            let newStr = maxStr + arr[ii];
            
            if(isUniqueCombination(newStr)) {
                const myArr = arr.slice(ii+1);
                recurse(myArr, newStr);
            }
        }
    }
    recurse(arr, "");

    return max.length;
};
