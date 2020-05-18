/*
Given an array A of integers, return true if and only if it is a valid mountain array.

Recall that A is a mountain array if and only if:

    A.length >= 3
    There exists some i with 0 < i < A.length - 1 such that:
        A[0] < A[1] < ... A[i-1] < A[i]
        A[i] > A[i+1] > ... > A[A.length - 1]




Example 1:

Input: [2,1]
Output: false

Example 2:

Input: [3,5,5]
Output: false

Example 3:

Input: [0,3,2,1]
Output: true



Note:

    0 <= A.length <= 10000
    0 <= A[i] <= 10000

*/

class Solution {
    public boolean validMountainArray(int[] A) {
        /* Edge Cases */
        if(A == null || A.length < 2) {
            return false;
        }

        /* Find Max Linear Search */
        int maxNum = Integer.MIN_VALUE;
        for(int ii = 0; ii < A.length; ii++) {
          maxNum = Math.max(maxNum, A[ii]);
        }

        boolean onTheWayUp = true;
        boolean onTheWayDown = false;
        for(int ii = 1; ii < A.length; ii++) {
          /* Follows Rules on Way Up */
          if(onTheWayUp && A[ii-1] >= A[ii]) {
            return false;

          /* Follows Rules on Way Down */
          } else if(onTheWayDown && A[ii-1] <= A[ii]) {
            return false;
          }

          /* Arrived at end of list and max is at end */
          if(onTheWayUp && A[ii] == maxNum && ii == A.length-1) {
              return false;

          /* Arrived at max, switch rules to OnTheWayDown */
          } else if (onTheWayUp && A[ii] == maxNum){
            onTheWayUp = false;
            onTheWayDown = true;
          }
        }

        return true;
    }
}
