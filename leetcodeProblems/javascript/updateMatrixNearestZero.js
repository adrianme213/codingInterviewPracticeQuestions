/*
Given a matrix consists of 0 and 1, find the distance of the nearest 0 for each cell.

The distance between two adjacent cells is 1.

Example 1:

Input:
[[0,0,0],
 [0,1,0],
 [0,0,0]]

Output:
[[0,0,0],
 [0,1,0],
 [0,0,0]]
Example 2:

Input:
[[0,0,0],
 [0,1,0],
 [1,1,1]]

Output:
[[0,0,0],
 [0,1,0],
 [1,2,1]]

Note:

The number of elements of the given matrix will not exceed 10,000.
There are at least one 0 in the given matrix.
The cells are adjacent in only four directions: up, down, left and right.
*/
/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
var updateMatrix = function(matrix) {
    const dp = new Array(matrix.length).fill(0).map(num => new Array(matrix[0].length).fill(Number.MAX_SAFE_INTEGER));

    // Top-Left Explore
    for(let rr = 0; rr < matrix.length; rr++) {
        for(let cc = 0; cc < matrix[0].length; cc++) {
            if(matrix[rr][cc] === 0) {
                dp[rr][cc] = 0;
            } else {
                if(rr > 0) {
                    dp[rr][cc] = Math.min(dp[rr][cc], dp[rr-1][cc]+1);
                }
                if(cc > 0) {
                    dp[rr][cc] = Math.min(dp[rr][cc], dp[rr][cc-1]+1);
                }
            }
        }
    }

    // Bottom-Right Explore
    for(let rr = matrix.length-1; rr >= 0; rr--) {
        for(let cc = matrix[0].length-1; cc >= 0; cc--) {
            if(rr < matrix.length-1) {
                dp[rr][cc] = Math.min(dp[rr][cc], dp[rr+1][cc]+1);
            }
            if(cc < matrix[0].length-1) {
                dp[rr][cc] = Math.min(dp[rr][cc], dp[rr][cc+1]+1);
            }
        }
    }

    return dp;
};
