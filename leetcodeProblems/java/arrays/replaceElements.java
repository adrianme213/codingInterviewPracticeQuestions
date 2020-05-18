/*
Given an array arr, replace every element in that array with the greatest element among the elements to its right, and replace the last element with -1.

After doing so, return the array.



Example 1:

Input: arr = [17,18,5,4,6,1]
Output: [18,6,6,6,1,-1]



Constraints:

    1 <= arr.length <= 10^4
    1 <= arr[i] <= 10^5

*/
class Solution {
    public int[] replaceElements(int[] arr) {
        if (arr == null || arr.length < 2) {
            int[] result = new int[1];
            result[0] = -1;
            return result;
        }

        int currentMaxToRight = arr[arr.length-1];
        arr[arr.length-1] = -1;

        for(int ii = arr.length-2; ii >= 0; ii--) {
          int tempNum = arr[ii];
          arr[ii] = Math.max(currentMaxToRight, arr[ii+1]);
          currentMaxToRight = Math.max(currentMaxToRight, tempNum);
        }

        return arr;
    }
}
