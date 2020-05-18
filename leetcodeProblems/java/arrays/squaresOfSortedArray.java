/*
Given an array of integers A sorted in non-decreasing order, return an array of the squares of each number, also in sorted non-decreasing order.



Example 1:

Input: [-4,-1,0,3,10]
Output: [0,1,9,16,100]

Example 2:

Input: [-7,-3,2,3,11]
Output: [4,9,9,49,121]



Note:

    1 <= A.length <= 10000
    -10000 <= A[i] <= 10000
    A is sorted in non-decreasing order.

*/

class Solution {
    public int[] sortedSquares(int[] A) {
        int[] sortedSquaresResult = new int[A.length];

        if (A[0] >= 0) {
            for(int ii = 0; ii < A.length; ii++) {
                sortedSquaresResult[ii] = A[ii]*A[ii];
            }
            return sortedSquaresResult;

        }

        /* TWO POINTER APPROACH */
        int pPositive = 1;
        int pNegative = 0;
        for(int ii = 1; ii < A.length; ii++) {
            if (A[ii] >= 0 && A[ii-1] < 0) {
                pNegative = ii-1;
                pPositive = ii;
            }
        }

        int idx = 0;
        while (pNegative >= 0 && pPositive < A.length) {
            if (Math.abs(A[pNegative]) < Math.abs(A[pPositive])) {
                sortedSquaresResult[idx] = A[pNegative]*A[pNegative];
                pNegative--;
            } else {
                sortedSquaresResult[idx] = A[pPositive]*A[pPositive];
                pPositive++;
            }
            idx++;
        }

        if(pNegative < 0) {
            for (int ii = idx; ii < A.length; ii++) {
                sortedSquaresResult[ii] = A[pPositive]*A[pPositive];
                pPositive++;
            }
        } else {
            for (int ii = idx; ii < A.length; ii++) {
                sortedSquaresResult[ii] = A[pNegative]*A[pNegative];
                pNegative--;
            }
        }

        return sortedSquaresResult;
    }
}

/*
class Solution {
    public int[] sortedSquares(int[] A) {
        int[] sortedSquaresResult = new int[A.length];
        for(int ii = 0; ii < sortedSquaresResult.length; ii++) {
          sortedSquaresResult[ii] = A[ii] * A[ii];
        }
        Arrays.sort(sortedSquaresResult);
        return sortedSquaresResult;
    }
}
*/
