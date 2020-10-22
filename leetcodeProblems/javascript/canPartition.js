/*
Given a non-empty array nums containing only positive integers, find if the array can be partitioned into two subsets such that the sum of elements in both subsets is equal.

Example 1:

Input: nums = [1,5,11,5]
Output: true
Explanation: The array can be partitioned as [1, 5, 5] and [11].

Example 2:

Input: nums = [1,2,3,5]
Output: false
Explanation: The array cannot be partitioned into equal sum subsets.



Constraints:

    1 <= nums.length <= 200
    1 <= nums[i] <= 100
*/
/**
 * @param {number[]} nums
 * @return {boolean}
 */

var canPartition = function(nums) {
    if(nums.length < 2) return false;
    const numsTotal = nums.reduce((tot, acc) => tot + acc, 0);
    if(numsTotal%2 === 1) return false;

    const sumToFind = numsTotal/2;
    const dp = new Array(sumToFind+1).fill(false);
    dp[0] = true;

    for(let ii = 0; ii < nums.length; ii++) {
        const curNum = nums[ii];
        for(let jj = sumToFind; jj >= curNum; jj--) {
            dp[jj] = (dp[jj] || dp[jj-curNum]);
        }
    }

    return dp[sumToFind];
};
