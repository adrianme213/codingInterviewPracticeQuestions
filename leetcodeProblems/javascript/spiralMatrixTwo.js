/*
Given a positive integer n, generate an n x n matrix filled with elements from 1 to n2 in spiral order.

Example 1:
Input: n = 3
Output: [[1,2,3],[8,9,4],[7,6,5]]

Example 2:
Input: n = 1
Output: [[1]]

Constraints:
    1 <= n <= 20

*/
/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function(n) {
    const matrix = new Array(n).fill(null).map(_ => new Array(n).fill(null));
    let r = 0;
    let c = 0;
    let dir = 'right';
    
    for(let num = 1; num <= n*n; num++) {
        if(dir === 'right' && (c+1 >= n || matrix[r][c+1] !== null)) {
            dir = 'down'
        } else if(dir === 'down' && (r+1 >= n || matrix[r+1][c] !== null)) {
            dir = 'left';
        } else if(dir === 'left' && (c-1 < 0 || matrix[r][c-1] !== null)) {
            dir = 'up';
        } else if(dir === 'up' && (r-1 < 0 || matrix[r-1][c] !== null)) {
            dir = 'right';
        }
        
        matrix[r][c] = num;
        if(dir === 'right') {
            c += 1;
        } else if(dir === 'down') {
            r += 1;
        } else if(dir === 'left') {
            c -= 1
        } else if(dir === 'up') {
            r -= 1;
        }
        
    }
    return matrix;
};