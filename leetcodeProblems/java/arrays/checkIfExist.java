/*
Given an array arr of integers, check if there exists two integers N and M such that N is the double of M ( i.e. N = 2 * M).

More formally check if there exists two indices i and j such that :

    i != j
    0 <= i, j < arr.length
    arr[i] == 2 * arr[j]



Example 1:

Input: arr = [10,2,5,3]
Output: true
Explanation: N = 10 is the double of M = 5,that is, 10 = 2 * 5.

Example 2:

Input: arr = [7,1,14,11]
Output: true
Explanation: N = 14 is the double of M = 7,that is, 14 = 2 * 7.

Example 3:

Input: arr = [3,1,7,11]
Output: false
Explanation: In this case does not exist N and M, such that N = 2 * M.



Constraints:

    2 <= arr.length <= 500
    -10^3 <= arr[i] <= 10^3

*/

/* QUADRATIC SOLUTION */
class Solution {
  public boolean checkIfExist(int[] arr) {
    int[] doubledNums = new int[arr.length];

    for(int ii = 0; ii < arr.length; ii++) {
      doubledNums[ii] = 2*arr[ii];
    }

    for(int ii = 0; ii < arr.length; ii++) {
      for(int jj = 0; jj < arr.length; jj++) {
        if(arr[ii] == doubledNums[jj] && ii != jj) {
          return true;
        }
      }
    }
    return false;
  }
}

/* HASHMAP USED */
class Solution {
    public boolean checkIfExist(int[] arr) {
        HashMap<Integer, Integer> doubledNums = new HashMap<Integer, Integer>();

        for(int ii = 0; ii < arr.length; ii++) {
            doubledNums.put(2*arr[ii], ii);
        }

        for(int ii = 0; ii < arr.length; ii++) {
          if(doubledNums.containsKey(arr[ii]) && doubledNums.get(arr[ii]) != ii) {
              return true;
          }
        }

        return false;
    }
}
