/*
Given an integer array of size n, find all elements that appear more than ⌊ n/3 ⌋ times.

Follow-up: Could you solve the problem in linear time and in O(1) space?



Example 1:

Input: nums = [3,2,3]
Output: [3]

Example 2:

Input: nums = [1]
Output: [1]

Example 3:

Input: nums = [1,2]
Output: [1,2]



Constraints:

    1 <= nums.length <= 5 * 104
    -109 <= nums[i] <= 109

*/
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var majorityElement = function(nums) {
    if(nums.length < 3) return [...new Set(nums)];

    let countDict = {};
    let moreThan3 = [];
    nums.forEach(num => {
        countDict[num] = countDict[num] ? countDict[num]+1 : 1;
    });
    for(let num in countDict) {
        if(countDict[num] > nums.length/3) {
            moreThan3.push(Number(num));
        }
    }
    return moreThan3;
};
