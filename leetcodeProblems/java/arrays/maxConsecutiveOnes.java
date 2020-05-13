/*
Given a binary array, find the maximum number of consecutive 1s in this array.

Example 1:

Input: [1,1,0,1,1,1]
Output: 3
Explanation: The first two digits or the last three digits are consecutive 1s.
    The maximum number of consecutive 1s is 3.

Note:

    The input array will only contain 0 and 1.
    The length of input array is a positive integer and will not exceed 10,000

*/
class Solution {
    public int findMaxConsecutiveOnes(int[] nums) {
        // --- Edge case ---
        if(nums.length == 0) {
            return 0;
        } else if(nums.length == 1) {
            return nums[0];
        }

        // --- Variables ---
        int p1 = 0;
        int maxLength = 0;

        // --- Logic ----
        while(p1 < nums.length) {
            if(nums[p1] == 1) {
                int temp = p1+1;
                while(temp < nums.length && nums[temp] == 1) {
                    temp++;
                }
                if (temp-p1 > maxLength) {
                    maxLength = temp-p1;
                }
                p1 = temp-1;
            }
            p1++;
        }

        return maxLength;
    }
}
