const assertEqualArrays = (arr1, arr2) => {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let ii = 0; ii < arr1.length; ii++) {
    if (Array.isArray(arr1[ii]) && Array.isArray(arr2[ii])) {
      if (! assertEqualArrays(arr1[ii], arr2[ii])) {
		console.log('--- this')
        return false;
      }
    } else if (arr1[ii] !== arr2[ii]) {
      return false;
    }
  }
  return true;
}

const rotateMatrix = (arr, dir = 'left') => {
  if (arr.length === 0) {
    return arr;
  }

  if (dir === 'left') {
    return arr[0].map((_1, ii) => {
      return arr.map((_2, jj) => {
        return arr[jj][ii]
      });
    }).reverse();
  } else {
    return arr[0].map((_1, ii) => {
      return arr.map((_2, jj) => {
        return arr[jj][ii]
      }).reverse();
    });
  }
}


const testA = [ [1, 2],[3, 4] ];
const solutionA = [ [ 3, 1 ], [ 4, 2 ] ];
const testB = [ [ 1, 2, 3, 4], [ 5, 6, 7, 8], [ 9, 'A','B','C'],['D','E','F','G'] ];
const solutionB = [ [ "D", 9, 5, 1 ], [ "E", "A", 6, 2 ], [ "F", "B", 7, 3 ], [ "G", "C", 8, 4 ] ];
const testC = [ [ 1 ] ];
const solutionC = [ [ 1 ] ];
const testD = [ [ 1, 2, 3 ], [ 4, 5, 6 ], [ 7, 8, 9 ] ];
const solutionD = [ [ 7, 4, 1 ], [ 8, 5, 2 ], [ 9, 6, 3 ] ];

console.log('TEST A: ', assertEqualArrays(rotateMatrix(testA, 'right'), solutionA))
console.log('TEST B: ', assertEqualArrays(rotateMatrix(testB, 'right'), solutionB))
console.log('TEST C: ', assertEqualArrays(rotateMatrix(testC, 'right'), solutionC))
console.log('TEST D: ', assertEqualArrays(rotateMatrix(testD, 'right'), solutionD))
