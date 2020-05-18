/*
Given an array nums, write a function to move all 0's to the end of it while maintaining the relative order of the non-zero elements.

Example:

Input: [0,1,0,3,12]
Output: [1,3,12,0,0]

Note:

    You must do this in-place without making a copy of the array.
    Minimize the total number of operations.

*/

class Solution {
    public void moveZeroes(int[] nums) {
        int zeroPointer = 0;
        int numPointer = 0;

        while(zeroPointer < nums.length && numPointer < nums.length) {
            if(nums[zeroPointer] == 0) {
                while(numPointer < nums.length && nums[numPointer] == 0) {
                    numPointer++;
                }
                if (numPointer < nums.length) {
                    nums[zeroPointer] = nums[numPointer];
                    nums[numPointer] = 0;
                }
            }
            zeroPointer++;
            numPointer++;
        }
    }
}
