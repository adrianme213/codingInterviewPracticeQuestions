/*
Given an array nums of n integers where n > 1,  return an array output such that output[i] is equal to the product of all the elements of nums except nums[i].

Example:

Input:  [1,2,3,4]
Output: [24,12,8,6]

Constraint: It's guaranteed that the product of the elements of any prefix or suffix of the array (including the whole array) fits in a 32 bit integer.

Note: Please solve it without division and in O(n).

Follow up:
Could you solve it with constant space complexity? (The output array does not count as extra space for the purpose of space complexity analysis.)

*/
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    const dpLeft = new Array(nums.length);
    const dpRight = new Array(nums.length);
    for(let ii = 0; ii < dpLeft.length; ii++) {
        if(ii === 0) {
            dpLeft[ii] = nums[ii];
        } else {
            dpLeft[ii] = dpLeft[ii-1]*nums[ii];
        }
    }

    for(let ii = dpRight.length-1; ii >= 0  ; ii--) {
        if(ii === dpRight.length-1) {
            dpRight[dpRight.length-1] = nums[ii]
        } else {
            dpRight[ii] = dpRight[ii+1]*nums[ii];
        }
    }

    const products = new Array(nums.length);
    for(let ii = 0; ii < products.length; ii++) {
        if(ii === 0) {
            products[ii] = dpRight[ii+1];
        } else if (ii === nums.length-1) {
            products[ii] = dpLeft[ii-1];
        } else {
            products[ii] = dpLeft[ii-1]*dpRight[ii+1]
        }
    }
    return products;
};
