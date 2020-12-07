/*
Given an array of integers nums.
A pair (i,j) is called good if nums[i] == nums[j] and i < j.
Return the number of good pairs.

Example 1:
Input: nums = [1,2,3,1,1,3]
Output: 4
Explanation: There are 4 good pairs (0,3), (0,4), (3,4), (2,5) 0-indexed.

Example 2:
Input: nums = [1,1,1,1]
Output: 6
Explanation: Each pair in the array are good.

Example 3:
Input: nums = [1,2,3]
Output: 0

Constraints:

    1 <= nums.length <= 100
    1 <= nums[i] <= 100

*/
/**
 * @param {number[]} nums
 * @return {number}
 */
var numIdenticalPairs = function(nums) {
    const map = {}
    for(let ii = 0; ii < nums.length; ii++) {
        map[nums[ii]] = map[nums[ii]] ? [...map[nums[ii]], ii] : [ii];
    }
    let count = 0;
    for(let num in map) {
        const idxs = map[num];
        if(idxs.length > 1) {
            for(let jj = 0; jj < idxs.length; jj++) {
                for(let kk = jj+1; kk < idxs.length; kk++) {
                    count++;
                }
            }
        }
    }
    return count;
};