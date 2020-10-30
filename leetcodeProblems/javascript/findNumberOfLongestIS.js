/*
Given an integer array nums, return the number of longest increasing subsequences.

Example 1:

Input: nums = [1,3,5,4,7]
Output: 2
Explanation: The two longest increasing subsequences are [1, 3, 4, 7] and [1, 3, 5, 7].
Example 2:

Input: nums = [2,2,2,2,2]
Output: 5
Explanation: The length of longest continuous increasing subsequence is 1, and there are 5 subsequences' length is 1, so output 5.

Constraints:

0 <= nums.length <= 2000
-106 <= nums[i] <= 106
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var findNumberOfLIS = (nums) => {
    const dp = [];
    let maxAndCount = [0, 0];

    for (let ii = 0; ii < nums.length; ii++) {
        dp[ii] = [1, 1];

        for (let jj = 0; jj < ii; jj++) {
            if (nums[ii] > nums[jj]) {
                if (dp[ii][0] < dp[jj][0] + 1) {
                    dp[ii][0] = dp[jj][0] + 1;
                    dp[ii][1] = dp[jj][1];
                } else if (dp[ii][0] === dp[jj][0] + 1) {
                    dp[ii][1] += dp[jj][1]
                }
            }
        }

        if (dp[ii][0] > maxAndCount[0]) {
            maxAndCount = [...dp[ii]];
        } else if (dp[ii][0] === maxAndCount[0]) {
            maxAndCount[1] += dp[ii][1];
        }
    }

    return maxAndCount[1];
}
