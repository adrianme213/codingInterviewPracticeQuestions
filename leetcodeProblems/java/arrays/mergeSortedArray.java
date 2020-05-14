/*
Given two sorted integer arrays nums1 and nums2, merge nums2 into nums1 as one sorted array.

Note:

    The number of elements initialized in nums1 and nums2 are m and n respectively.
    You may assume that nums1 has enough space (size that is greater or equal to m + n) to hold additional elements from nums2.

Example:

Input:
nums1 = [1,2,3,0,0,0], m = 3
nums2 = [2,5,6],       n = 3

Output: [1,2,2,3,5,6]

*/

class Solution {
    public void merge(int[] nums1, int m, int[] nums2, int n) {
        int[] sortedJoinedArray = new int[nums1.length];
        int p1 = 0;
        int p2 = 0;
        while(p1 < m && p2 < n) {
            if(nums1[p1] < nums2[p2]) {
                sortedJoinedArray[p1+p2] = nums1[p1];
                p1++;
            } else {
                sortedJoinedArray[p1+p2] = nums2[p2];
                p2++;
            }
        }

        if(p2 < n) {
            for(int ii = p2; p2 < n; p2++) {
                sortedJoinedArray[p1+p2] = nums2[p2];
            }
        } else {
            for(int ii = p1; p1 < m; p1++) {
                sortedJoinedArray[p1+p2] = nums1[p1];
            }
        }

        for(int ii = 0; ii < nums1.length; ii++) {
            nums1[ii] = sortedJoinedArray[ii];
        }
    }
}
