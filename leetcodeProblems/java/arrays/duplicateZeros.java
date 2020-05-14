/*
Given a fixed length array arr of integers, duplicate each occurrence of zero, shifting the remaining elements to the right.

Note that elements beyond the length of the original array are not written.

Do the above modifications to the input array in place, do not return anything from your function.



Example 1:

Input: [1,0,2,3,0,4,5,0]
Output: null
Explanation: After calling your function, the input array is modified to: [1,0,0,2,3,0,0,4]

Example 2:

Input: [1,2,3]
Output: null
Explanation: After calling your function, the input array is modified to: [1,2,3]



Note:

    1 <= arr.length <= 10000
    0 <= arr[i] <= 9

*/

class Solution {
    public void duplicateZeros(int[] arr) {
        for(int ii = 0; ii < arr.length; ii++) {
          if(arr[ii] == 0) {
            int temp = 0;
            for(int jj = ii+1; jj < arr.length; jj++) {
              int nextTemp = arr[jj];
              arr[jj] = temp;
              temp = nextTemp;
            }
            ii++;


            // for(int jj = arr.length-1; jj > ii; jj--) { //jj = 7, ii = 1
            //   arr[jj] = arr[jj-1]; // arr[7] = 5, arr[6] = arr[5]
            // }
            // ii++;
          }
        }
    }
}
