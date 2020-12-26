/*
Given a matrix of M x N elements (M rows, N columns), return all elements of the matrix in diagonal order as shown in the below image.

 

Example:

Input:
[
 [ 1, 2, 3 ],
 [ 4, 5, 6 ],
 [ 7, 8, 9 ]
]

Output:  [1,2,4,7,5,3,6,8,9]

Explanation:

 

Note:

The total number of elements of the given matrix will not exceed 10,000.

*/
/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var findDiagonalOrder = function(matrix) {
    let topRightDir = true;
    let curRow = 0;
    let curCol = 0;
    let result = [];
    if(matrix.length === 0) return matrix;
    
    while(result.length < matrix.length*matrix[0].length) {
        const num = matrix[curRow][curCol];
        result.push(num);
        
        if(topRightDir) {
            curRow--;
            curCol++;
            
            if(matrix[curRow] === undefined || matrix[curRow][curCol] === undefined) {
                topRightDir = false;
                curRow++;
                if(matrix[curRow][curCol] === undefined) {
                    curCol--;
                    curRow++;
                }
            }
            
        } else {
            curRow++;
            curCol--; 
            
            if(matrix[curRow] === undefined || matrix[curRow][curCol] === undefined) {
                topRightDir = true;
                curCol++;
                if(matrix[curRow] === undefined) {
                    curRow--;
                    curCol++;
                }
            }
        }
    }
    return result;
};