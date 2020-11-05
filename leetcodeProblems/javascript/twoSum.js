/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const hashMapComplements = {};
    for(let ii = 0; ii < nums.length; ii++) {
        const complement = target-nums[ii]
        hashMapComplements[complement] = ii;
    }

    for(let ii = 0; ii < nums.length; ii++) {
        const curNum = nums[ii];
        if(hashMapComplements[curNum] !== undefined && hashMapComplements[curNum] !== ii) return [ii, hashMapComplements[curNum]]
    }
};
