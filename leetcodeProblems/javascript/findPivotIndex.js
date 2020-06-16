/*
Given an array of integers nums, write a method that returns the "pivot" index of this array.

We define the pivot index as the index where the sum of the numbers to the left of the index is equal to the sum of the numbers to the right of the index.

If no such index exists, we should return -1. If there are multiple pivot indexes, you should return the left-most pivot index.

Example 1:

Input:
nums = [1, 7, 3, 6, 5, 6]
28
[28-1, 28-7, 28-3, 28-6, 28-5]
left = nums[0];
right = nums.slice(2).reduce((acc, num) => acc+num, 0);
ii = 1, ii < nums.length-2;ii++
if(left === right) return ii;
left += nums[ii];
right -= nums[ii+1];

Output: 3
Explanation:
The sum of the numbers to the left of index 3 (nums[3] = 6) is equal to the sum of numbers to the right of index 3.
Also, 3 is the first index where this occurs.



Example 2:

Input:
nums = [1, 2, 3]
Output: -1
Explanation:
There is no index that satisfies the conditions in the problem statement.

*/

var pivotIndex = (nums) => {
  if(nums.length < 3) return -1;
  let left = 0;
  let right = nums.slice(1).reduce((acc, num) => acc+num, 0);
  for(let ii = 0; ii < nums.length-1; ii++) {
    if(left === right) return ii;
    left += nums[ii];
    right -= nums[ii+1];
  }
  if(left === right) return nums.length-1;

  return -1;
}

var pivotIndex = function(nums) {
    if(nums.length === 0) { return -1 }
    let max = nums.length-1;
    let mid = 0;
    let bottomHalf = 0;
    let topHalf = nums.slice(mid+1, max+1).reduce((acc, num) => acc + num, 0);

    while(mid < nums.length) {
        if (bottomHalf === topHalf) {
            return mid;
        }
        bottomHalf += nums[mid];
        mid++;
        topHalf -= nums[mid];
    }
    return -1;
};
