/*
Given a m x n matrix, if an element is 0, set its entire row and column to 0. Do it in-place.

Example 1:

Input:
[
  [1,1,1],
  [1,0,1],
  [1,1,1]
]
Output:
[
  [1,0,1],
  [0,0,0],
  [1,0,1]
]

Example 2:

Input:
[
  [0,1,2,0],
  [3,4,5,2],
  [1,3,1,5]
]
Output:
[
  [0,0,0,0],
  [0,4,5,0],
  [0,3,1,0]
]

Follow up:

    A straight forward solution using O(mn) space is probably a bad idea.
    A simple improvement uses O(m + n) space, but still not the best solution.
    Could you devise a constant space solution?


*/

var setZeroes = function(matrix) {
  // {rows: [1,1,1], cols: [false,false,false]}
  const zeroLocations = {
    rows: {},
    columns: {}
  };
  matrix.forEach((row, rowIndex) => {
    row.forEach((num, colIndex) => {
      if (num === 0) {
        zeroLocations['rows'][rowIndex] = rowIndex;
        zeroLocations['columns'][colIndex] = colIndex;
      }
    })
  });

  // rows change to zeros
  matrix.forEach((row, rowIndex) => {
    if (zeroLocations['rows'][rowIndex] !== undefined) {
      row.forEach((num, index) => {
        row[index] = 0
      });
    }
  })

  // cols to zeros
  for (let ii = 0; ii < matrix[0].length; ii++) {
    if (zeroLocations['columns'][ii] !== undefined) {
      for (let jj = 0; jj < matrix.length; jj++) {
        matrix[jj][ii] = 0;
      }
    }
  }

  return matrix;

};
