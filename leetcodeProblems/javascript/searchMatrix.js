/*Write an efficient algorithm that searches for a value in an m x n matrix. This matrix has the following properties:

Integers in each row are sorted in ascending from left to right.
Integers in each column are sorted in ascending from top to bottom.
Example:

Consider the following matrix:

[
  [1,   4,  7, 11, 15],
  [2,   5,  8, 12, 19],
  [3,   6,  9, 16, 22],
  [10, 13, 14, 17, 24],
  [18, 21, 23, 26, 30]
]
Given target = 5, return true.

Given target = 20, return false.
*/

var searchMatrix = function(matrix, target) {
  for (let ii = 0; ii < matrix.length; ii++) {
    for (let jj = 0; jj < matrix[0].length; jj++) {
      const currentNumber = matrix[ii][jj];
      console.log(currentNumber);
      if (currentNumber === target) {
        return true;
      }
    }
  }

  return false;
};

const testMatrix = [
  [1,   4,  7, 11, 15],
  [2,   5,  8, 12, 19],
  [3,   6,  9, 16, 22],
  [10, 13, 14, 17, 24],
  [18, 21, 23, 26, 30]
];

// Case 1
console.log(searchMatrix(testMatrix, 5))

// Case 2
console.log(searchMatrix(testMatrix, 20));

// Case 3
console.log(searchMatrix([[4,9,9,11,12,15,17,22,23],[8,10,11,14,14,17,20,23,26],[9,13,16,21,23,26,30,35,36],[9,14,18,21,26,29,32,35,39],[12,18,19,23,27,33,34,37,39],[15,20,24,26,32,34,36,39,42],[16,24,28,28,33,37,37,43,44],[18,28,28,29,35,42,44,49,52],[23,32,34,34,39,46,51,51,56],[27,35,35,40,45,47,51,55,58]],
30));
