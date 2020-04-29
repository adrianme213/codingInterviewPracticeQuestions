// Bubble Sort
function bubbleSort(arr) {

  const swapIndices = (myArr, idx1, idx2) => {
    [myArr[idx1], myArr[idx2]] = [myArr[idx2], myArr[idx1]];
  }

  for (let ii = arr.length; ii > 0; ii--) {
    let didSwapOccur = false;
    for (let jj = 0; jj < ii - 1; jj++) {
      if (arr[jj] > arr[jj+1]) {
        swapIndices(arr, jj, jj+1);
        didSwapOccur = true
      }
    }

    // Short circuit check if sort is completed
    if(didSwapOccur) break;
  }

  return arr;
}

// Example
var arrToSort = [4, 1, 6, 10, -3]
bubbleSort(arrToSort) // [-3, 1, 4, 6, 10]
