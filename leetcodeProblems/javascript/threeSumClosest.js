/*
Given an array nums of n integers and an integer target, find three integers in nums such that the sum is closest to target. Return the sum of the three integers. You may assume that each input would have exactly one solution.



Example 1:

Input: nums = [-1,2,1,-4], target = 1
Output: 2
Explanation: The sum that is closest to the target is 2. (-1 + 2 + 1 = 2).



Constraints:

    3 <= nums.length <= 10^3
    -10^3 <= nums[i] <= 10^3
    -10^4 <= target <= 10^4

*/
var threeSumClosest = function(nums, target) {
    const sortedNums = nums.slice().sort((a,b) => a-b);
    let closestDiff = Infinity;

    for(let ii = 0; ii < sortedNums.length-2; ii++) {
        let left = ii+1;
        let right = sortedNums.length-1;

        while(left < right) {
            let localSum = sortedNums[ii] + sortedNums[left] + sortedNums[right];
            if(Math.abs(localSum-target) < Math.abs(closestDiff-target)) {
                closestDiff = localSum;
            }

            if(localSum > target) {
                right--;
            } else {
                left++;
            }

        }
    }

    return closestDiff;
};
