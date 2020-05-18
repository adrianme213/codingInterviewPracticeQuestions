/*
Given an array A of non-negative integers, return an array consisting of all the even elements of A, followed by all the odd elements of A.

You may return any answer array that satisfies this condition.



Example 1:

Input: [3,1,2,4]
Output: [2,4,3,1]
The outputs [4,2,3,1], [2,4,1,3], and [4,2,1,3] would also be accepted.



Note:

    1 <= A.length <= 5000
    0 <= A[i] <= 5000



*/

class Solution {
    public void sortArrayByParity(int[] A) {
        int[] B = Arrays.copyOf(A, A.length);
        int evenPointer = 0;
        int oddPointer = Math.ceil(A.length/2);
        for(int ii = 0; ii < A.length; ii++) {
          if(ii%2 == 1) {
            A[oddPointer] = B[ii];
            oddPointer++;
          } else {
            A[evenPointer] = B[ii];
            evenPointer++;
          }
        }
    }
}

/* SECOND SOLUTION */
class Solution {
    public int[] sortArrayByParity(int[] A) {
        int[] B = Arrays.copyOf(A, A.length);

        int pEven = 0;
        int pOdd = A.length-1;

        for(int ii = 0; ii < A.length; ii++) {
            if(B[ii]%2 == 0) {
                A[pEven] = B[ii];
                pEven++;
            } else {
                A[pOdd] = B[ii];
                pOdd--;
            }
        }

        return A;
    }
}
