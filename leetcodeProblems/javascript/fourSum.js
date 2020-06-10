/*
Given an array nums of n integers and an integer target, are there elements a, b, c, and d in nums such that a + b + c + d = target? Find all unique quadruplets in the array which gives the sum of target.

Note:

The solution set must not contain duplicate quadruplets.

Example:

Given array nums = [1, 0, -1, 0, -2, 2], and target = 0.

A solution set is:
[
  [-1,  0, 0, 1],
  [-2, -1, 1, 2],
  [-2,  0, 0, 2]
]

*/

var fourSum = function(nums, target) {
    const solutionsSet = new Set([]);
    const result = [];

    for(let ii = 0; ii < nums.length-3; ii++) {
        for(let jj = ii+1; jj < nums.length-2; jj++) {
            for(let kk = jj+1; kk < nums.length-1; kk++) {
                for(let ll = kk+1; ll < nums.length; ll++) {
                    const sum = nums[ii] + nums[jj] + nums[kk] + nums[ll];
                    if(sum === target) {
                        const sortedNumsAsString = [nums[ii], nums[jj], nums[kk], nums[ll]].sort((a,b) => a-b);
                        const key = `key_${sortedNumsAsString.join('')}`;
                        if(!solutionsSet.has(key)) {
                            solutionsSet.add(key);
                            result.push([nums[ii], nums[jj], nums[kk], nums[ll]]);
                        }
                    }
                }

            }
        }
    }

    return result;
};
