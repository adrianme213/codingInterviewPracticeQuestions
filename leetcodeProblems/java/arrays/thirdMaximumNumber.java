/*
Given a non-empty array of integers, return the third maximum number in this array. If it does not exist, return the maximum number. The time complexity must be in O(n).

Example 1:

Input: [3, 2, 1]

Output: 1

Explanation: The third maximum is 1.

Example 2:

Input: [1, 2]

Output: 2

Explanation: The third maximum does not exist, so the maximum (2) is returned instead.

Example 3:

Input: [2, 2, 3, 1]

Output: 1

Explanation: Note that the third maximum here means the third maximum distinct number.
Both numbers with value 2 are both considered as second maximum.


*/

class Solution {
    public int thirdMax(int[] nums) {

        /* Third Max*/
        int[] numsClone = Arrays.copyOf(nums, nums.length);
        Arrays.sort(numsClone);
        int curNum = Integer.MAX_VALUE;
        int count = 0;
        for(int ii = numsClone.length-1; ii >= 0 && count < 3; ii--) {
            if(numsClone[ii] < curNum) {
                curNum = numsClone[ii];
                count++;
            }
        }

        /* Edge Case */
        if(nums.length < 3 || count < 3) {
          int maxNum = Integer.MIN_VALUE;
          for(int num : nums) {
            if(num > maxNum) {
              maxNum = num;
            }
          }
          return maxNum;
        }

        return curNum;
    }
}
