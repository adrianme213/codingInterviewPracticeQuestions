/*
Write an efficient algorithm that searches for a value in an m x n matrix. This matrix has the following properties:

    Integers in each row are sorted from left to right.
    The first integer of each row is greater than the last integer of the previous row.

Example 1:

Input: matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,50]], target = 3
Output: true

Example 2:

Input: matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,50]], target = 13
Output: false

Example 3:

Input: matrix = [], target = 0
Output: false

Constraints:

    m == matrix.length
    n == matrix[i].length
    0 <= m, n <= 100
    -104 <= matrix[i][j], target <= 104

*/
/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    if(matrix.length === 0) return false;
    for(let ii = 0; ii < matrix.length; ii++) {
        const [rowMin, rowMax] = [matrix[ii][0], matrix[ii][matrix[ii].length-1]];
        if(target === rowMin || target === rowMax) return true;
        if(target > rowMin && target < rowMax) {
            for(let jj = 0; jj < matrix[ii].length; jj++) {
                if(target === matrix[ii][jj]) return true;
            }
            return false;
        }
    }
    return false;
};
