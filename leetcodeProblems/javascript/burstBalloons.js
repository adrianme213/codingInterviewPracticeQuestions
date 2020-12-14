/*
Given n balloons, indexed from 0 to n-1. Each balloon is painted with a number on it represented by array nums. You are asked to burst all the balloons. If the you burst balloon i you will get nums[left] * nums[i] * nums[right] coins. Here left and right are adjacent indices of i. After the burst, the left and right then becomes adjacent.

Find the maximum coins you can collect by bursting the balloons wisely.

Note:

    You may imagine nums[-1] = nums[n] = 1. They are not real therefore you can not burst them.
    0 ≤ n ≤ 500, 0 ≤ nums[i] ≤ 100

Example:

Input: [3,1,5,8]
Output: 167 
Explanation: nums = [3,1,5,8] --> [3,5,8] -->   [3,8]   -->  [8]  --> []
             coins =  3*1*5      +  3*5*8    +  1*3*8      + 1*8*1   = 167

Solved with discussion assistance
*/
/**
 * @param {number[]} nums
 * @return {number}
 */

var getMaxCoins = (extended, memo, left, right) => {
    if(left === right) return 0;
    if(memo[left][right] > 0) return memo[left][right];
    let max = 0;
    for(let ii = left+1; ii < right; ii++) {
        const l = getMaxCoins(extended,memo,left,ii);
        const r = getMaxCoins(extended,memo,ii,right);
        const possibleMax = extended[left]*extended[ii]*extended[right] + l + r
        max = Math.max(max, possibleMax);
    }
    
    memo[left][right] = max;
    
    return max;
}


var maxCoins = function(nums) {
    if(nums.length === 1) return nums[0];
    if(nums.length === 2) return nums[0]*nums[1] + Math.max(...nums);
    
    const extended = [1, ...nums.slice(), 1];
    const memo = new Array(extended.length).fill(null).map(n => new Array(extended.length).fill(null));
    
    return getMaxCoins(extended, memo, 0, extended.length-1);
};
