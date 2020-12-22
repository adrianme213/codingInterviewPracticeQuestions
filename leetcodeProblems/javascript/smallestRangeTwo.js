/*
Given an array A of integers, for each integer A[i] we need to choose either x = -K or x = K, and add x to A[i] (only once).

After this process, we have some array B.

Return the smallest possible difference between the maximum value of B and the minimum value of B.

 

Example 1:

Input: A = [1], K = 0
Output: 0
Explanation: B = [1]

Example 2:

Input: A = [0,10], K = 2
Output: 6
Explanation: B = [2,8]

Example 3:

Input: A = [1,3,6], K = 3
Output: 3
Explanation: B = [4,6,3]

Note:

    1 <= A.length <= 10000
    0 <= A[i] <= 10000
    0 <= K <= 10000


*/
/**
 * @param {number[]} A
 * @param {number} K
 * @return {number}
 */

var smallestRangeII = function(A, K) {
    const aSorted = A.slice().sort((a,b) => a-b);
    let diff = aSorted[aSorted.length-1]-aSorted[0];
    
    for(let ii = 0; ii < aSorted.length-1; ii++) {
        const maxPart = Math.max(aSorted[aSorted.length-1]-K, aSorted[ii]+K);
        const minPart = Math.min(aSorted[0]+K, aSorted[ii+1]-K);

        const pos = maxPart-minPart;
        diff = Math.min(diff, pos)
    }
    
    return diff;
};
