/*
Given a list of words and two words word1 and word2, return the shortest distance between these two words in the list.

Example:
Assume that words = ["practice", "makes", "perfect", "coding", "makes"].

Input: word1 = “coding”, word2 = “practice”
Output: 3

Input: word1 = "makes", word2 = "coding"
Output: 1

Note:
You may assume that word1 does not equal to word2, and word1 and word2 are both in the list.

*/
/**
 * @param {string[]} words
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var shortestDistance = function(words, word1, word2) {
    let w1Idxs = [];
    let w2Idxs = [];
    for(let ii = 0; ii < words.length; ii++) {
        if(words[ii] === word1) w1Idxs.push(ii);
        if(words[ii] === word2) w2Idxs.push(ii);
    }
    let min = Number.MAX_SAFE_INTEGER;
    for(let ii = 0; ii < w1Idxs.length; ii++) {
        for(let jj = 0; jj < w2Idxs.length; jj++) {
            const diff = Math.abs(w1Idxs[ii]-w2Idxs[jj]);
            if(diff < min) min = diff;
        }
    }
    return min;
};