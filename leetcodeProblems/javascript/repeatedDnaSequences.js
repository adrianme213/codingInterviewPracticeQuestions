/*
All DNA is composed of a series of nucleotides abbreviated as 'A', 'C', 'G', and 'T', for example: "ACGAATTCCG". When studying DNA, it is sometimes useful to identify repeated sequences within the DNA.

Write a function to find all the 10-letter-long sequences (substrings) that occur more than once in a DNA molecule.

Example 1:

Input: s = "AAAAACCCCCAAAAACCCCCCAAAAAGGGTTT"
Output: ["AAAAACCCCC","CCCCCAAAAA"]

Example 2:

Input: s = "AAAAAAAAAAAAA"
Output: ["AAAAAAAAAA"]



Constraints:

    0 <= s.length <= 105
    s[i] is 'A', 'C', 'G', or 'T'.

*/
/**
 * @param {string} s
 * @return {string[]}
 */
var findRepeatedDnaSequences = function(s) {
    if(!s || s.length < 10) return [];
    const seenAtLeastOnceSet = new Set([]);
    const repeatedStrands = new Set([]);
    let [p0,p9] = [0,9];
    while(p9 < s.length) {
        const currentStrand = s.slice(p0,p9+1);
        if(seenAtLeastOnceSet.has(currentStrand)) repeatedStrands.add(currentStrand);
        mySet.add(currentStrand)
        p0++;
        p9++;
    }
    return [...repeatedStrands];
};
