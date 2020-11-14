/*
Given an unsorted array return whether an increasing subsequence of length 3 exists or not in the array.

Formally the function should:

    Return true if there exists i, j, k
    such that arr[i] < arr[j] < arr[k] given 0 ≤ i < j < k ≤ n-1 else return false.

Note: Your algorithm should run in O(n) time complexity and O(1) space complexity.

Example 1:

Input: [1,2,3,4,5]
Output: true

Example 2:

Input: [5,4,3,2,1]
Output: false

*/

var increasingTriplet = function(nums) {
  if (nums === null || nums.length < 3) return false;
  let small = nums[0];
  let mid = Infinity;

  for (ii = 1; ii < nums.length; ii++) {
    if (nums[ii] > small && nums[ii] < mid) {
      mid = nums[ii];
    }
    if (nums[ii] < small) {
      small = nums[ii];
    }
    if (nums[ii] > mid) return true;
  }

  return false;
};
