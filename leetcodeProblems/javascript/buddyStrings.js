/*
Given two strings A and B of lowercase letters, return true if you can swap two letters in A so the result is equal to B, otherwise, return false.

Swapping letters is defined as taking two indices i and j (0-indexed) such that i != j and swapping the characters at A[i] and A[j]. For example, swapping at indices 0 and 2 in "abcd" results in "cbad".



Example 1:

Input: A = "ab", B = "ba"
Output: true
Explanation: You can swap A[0] = 'a' and A[1] = 'b' to get "ba", which is equal to B.

Example 2:

Input: A = "ab", B = "ab"
Output: false
Explanation: The only letters you can swap are A[0] = 'a' and A[1] = 'b', which results in "ba" != B.

Example 3:

Input: A = "aa", B = "aa"
Output: true
Explanation: You can swap A[0] = 'a' and A[1] = 'a' to get "aa", which is equal to B.

Example 4:

Input: A = "aaaaaaabc", B = "aaaaaaacb"
Output: true

Example 5:

Input: A = "", B = "aa"
Output: false



Constraints:

    0 <= A.length <= 20000
    0 <= B.length <= 20000
    A and B consist of lowercase letters.

*/

/**
 * @param {string} A
 * @param {string} B
 * @return {boolean}
 */
 var buddyStrings = function(A, B) {
     if(A.length !== B.length || A.length < 2) return false;

     const diffs = [];
     for(let ii = 0; ii < A.length; ii++){
         if(A[ii] !== B[ii]) diffs.push([A[ii], B[ii]]);
     }

     if(diffs.length > 2 || diffs.length === 1) return false;
     if(diffs.length === 2) return (diffs[0][0] === diffs[1][1] && diffs[0][1] === diffs[1][0]);

     const counts = new Array(26).fill(0);
     for(let ii = 0; ii < A.length; ii++){
         const c = A.charCodeAt(ii) - 97;
         counts[c] = counts[c] + 1;
         if(counts[c] > 1) return true;
     }

     return false;
 };
