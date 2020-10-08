/*
Given a sorted (in ascending order) integer array nums of n elements and a target value, write a function to search target in nums. If target exists, then return its index, otherwise return -1.


Example 1:

Input: nums = [-1,0,3,5,9,12], target = 9
Output: 4
Explanation: 9 exists in nums and its index is 4

Example 2:

Input: nums = [-1,0,3,5,9,12], target = 2
Output: -1
Explanation: 2 does not exist in nums so return -1



Note:

    You may assume that all elements in nums are unique.
    n will be in the range [1, 10000].
    The value of each element in nums will be in the range [-9999, 9999].

 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let p1 = 0;
    let p2 = nums.length-1;
    if(nums[p1] === target) return p1;
    else if (nums[p2] === target) return p2;
    else if(target < nums[p1] || target > nums[p2]) return -1;

    while(p1 < p2) {
        const [num1, num2] = [nums[p1], nums[p2]];
        if(num1 === target) return p1;
        else if(num2 === target) return p2;

        const [diff1, diff2] = [target-num1, num2-target];
        if(diff1 > diff2) p2--;
        else p1++;
    }
    return -1;
};
