/*
Given an array A of integers and integer K, return the maximum S such that there exists i < j with A[i] + A[j] = S and S < K. If no i, j exist satisfying this equation, return -1.
Example 1:

Input: A = [34,23,1,24,75,33,54,8], K = 60
Output: 58
Explanation: We can use 34 and 24 to sum 58 which is less than 60.

Example 2:

Input: A = [10,20,30], K = 15
Output: -1
Explanation: In this case it is not possible to get a pair sum less that 15.



Constraints:

    1 <= A.length <= 100
    1 <= A[i] <= 1000
    1 <= K <= 2000

*/
/**
 * @param {number[]} A
 * @param {number} K
 * @return {number}
 */
var twoSumLessThanK = (A, K) => {
    let sum = -1;
    const aSorted = A.slice().sort((a,b) => a-b);
    let lo = 0;
    let hi = aSorted.length-1;
    while(lo < hi) {
        if(aSorted[lo]+aSorted[hi] < K) {
            sum = Math.max(sum, aSorted[lo]+aSorted[hi]);
            lo++;
        } else {
            hi--;
        }
    }
    return sum;
}
/*

var twoSumLessThanK = function(A, K) {
    const tupleMap = [];
    for(let ii = 0; ii < A.length; ii++) {
        for(let jj = 0; jj < A.length; jj++) {
            if(ii === jj) continue;
            const sum = A[ii]+A[jj];
            tupleMap.push([sum, ii, jj]);
        }
    }

    const tuplesLessThanK = tupleMap.filter(tuple => tuple[0] < K).sort((a, b) => b[0]-a[0]);
    return tuplesLessThanK.length > 0 ? tuplesLessThanK[0][0] : -1;
};

*/
