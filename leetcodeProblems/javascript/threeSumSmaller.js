/*
Given an array of n integers nums and an integer target, find the number of index triplets i, j, k with 0 <= i < j < k < n that satisfy the condition nums[i] + nums[j] + nums[k] < target.

Follow up: Could you solve it in O(n2) runtime?

 

Example 1:

Input: nums = [-2,0,1,3], target = 2
Output: 2
Explanation: Because there are two triplets which sums are less than 2:
[-2,0,1]
[-2,0,3]

Example 2:

Input: nums = [], target = 0
Output: 0

Example 3:

Input: nums = [0], target = 0
Output: 0

 

Constraints:

    n == nums.length
    0 <= n <= 300
    -100 <= nums[i] <= 100
    -100 <= target <= 100


*/
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumSmaller = function(nums, target) {
    let count = 0;
    if(nums.length < 3) return 0;
    for(let ii = 0; ii < nums.length-2; ii++) {
        for(let jj = ii+1; jj < nums.length-1; jj++) {
            for(let kk = jj+1; kk < nums.length; kk++) {
                if(nums[ii]+nums[jj]+nums[kk] < target) count++;
            }
        }
    }
    return count;
};
