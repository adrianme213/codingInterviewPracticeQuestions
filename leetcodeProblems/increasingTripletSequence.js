/*
Given an integer array nums, return true if there exists a triple of indices (i, j, k) such that i < j < k and nums[i] < nums[j] < nums[k]. If no such indices exists, return false.

 

Example 1:

Input: nums = [1,2,3,4,5]
Output: true
Explanation: Any triplet where i < j < k is valid.

Example 2:

Input: nums = [5,4,3,2,1]
Output: false
Explanation: No triplet exists.

Example 3:

Input: nums = [2,1,5,0,4,6]
Output: true
Explanation: The triplet (3, 4, 5) is valid because nums[3] == 0 < nums[4] == 4 < nums[5] == 6.

 

Constraints:

    1 <= nums.length <= 105
    -231 <= nums[i] <= 231 - 1

 
Follow up: Could you implement a solution that runs in O(n) time complexity and O(1) space complexity?
*/
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var increasingTriplet = function(nums) {
    if(nums.length < 3) return false;
    
    const minToLeft = new Array(nums.length);
    minToLeft[0] = null;
    let min = nums[0];
    for(let ii = 1; ii < nums.length; ii++) {
        minToLeft[ii] = min;
        min = Math.min(min, nums[ii]);
    }
    
    const maxToRight = new Array(nums.length);
    maxToRight[nums.length-1] = null;
    let max = nums[nums.length-1];
    for(let ii = nums.length-2; ii >= 0; ii--) {
        maxToRight[ii] = max;
        max = Math.max(max, nums[ii]);
    }
    for(let ii = 1; ii < nums.length-1; ii++) {
        if(minToLeft[ii] < nums[ii] && maxToRight[ii] > nums[ii]) return true;
    }

    return false;
};