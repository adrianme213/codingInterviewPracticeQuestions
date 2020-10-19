/*
In a row of dominoes, A[i] and B[i] represent the top and bottom halves of the ith domino.  (A domino is a tile with two numbers from 1 to 6 - one on each half of the tile.)

We may rotate the ith domino, so that A[i] and B[i] swap values.

Return the minimum number of rotations so that all the values in A are the same, or all the values in B are the same.

If it cannot be done, return -1.

Example 1:

Input: A = [2,1,2,4,2,2], B = [5,2,6,2,3,2]
Output: 2
Explanation:
The first figure represents the dominoes as given by A and B: before we do any rotations.
If we rotate the second and fourth dominoes, we can make every value in the top row equal to 2, as indicated by the second figure.

Example 2:

Input: A = [3,5,1,2,3], B = [3,6,3,3,4]
Output: -1
Explanation:
In this case, it is not possible to rotate the dominoes to make one row of values equal.



Constraints:

    2 <= A.length == B.length <= 2 * 104
    1 <= A[i], B[i] <= 6

*/
/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number}
 */
var minDominoRotations = function(A, B) {
    const dict = {};
    // O(n)
    for(let ii = 0; ii < A.length; ii++) {
        dict[A[ii]] ? dict[A[ii]] += 1 : dict[A[ii]] = 1;
        dict[B[ii]] ? dict[B[ii]] += 1 : dict[B[ii]] = 1;
    }

    // O(n)
    const setOfCandidates = new Set([]);
    for(let num in dict) {
        if(dict[num] >= A.length) {
            setOfCandidates.add(Number(num));
        }
    }

    const candidates = [...setOfCandidates];
    let minSwapsA = Number.MAX_SAFE_INTEGER;
    let minSwapsB = Number.MAX_SAFE_INTEGER;

    for(let ii = 0; ii < candidates.length; ii++) {
        const curNum = candidates[ii];
        let swapA = 0;
        let swapB = 0;
        for(let jj = 0; jj < A.length; jj++) {
            if(A[jj] !== curNum && B[jj] !== curNum) {
                swapA = Number.MAX_SAFE_INTEGER;
                swapB = Number.MAX_SAFE_INTEGER;
                break;
            }
            if(A[jj] !== curNum) {
                swapA++;
            }
            if(B[jj] !== curNum) {
                swapB++;
            }
        }

        minSwapsA = Math.min(minSwapsA, swapA);
        minSwapsB = Math.min(minSwapsB, swapB);
    }

    if(minSwapsA === Number.MAX_SAFE_INTEGER && minSwapsB === Number.MAX_SAFE_INTEGER) {
        return -1;
    }

    return Math.min(minSwapsA, minSwapsB);
};
