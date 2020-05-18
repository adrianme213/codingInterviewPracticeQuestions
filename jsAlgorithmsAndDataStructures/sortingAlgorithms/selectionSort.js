// Selection Sort
function selectionSort(arr) {
  const swapIndices = (myArr, idx1, idx2) => {
    [myArr[idx1], myArr[idx2]] = [myArr[idx2], myArr[idx1]];
  }

  for (let ii = 0; ii < arr.length; ii++) {
    let minIndex = ii;
    for (let jj = ii+1; jj < arr.length; jj++) {
      if (arr[jj] < arr[minIndex]) {
        minIndex = jj;
      }
    }

    if (minIndex !== ii) {
      swapIndices(arr, ii, minIndex);
    }
  }

  return arr;
}

// Example
var arrToSort = [4, 1, 6, 10, -3]
selectionSort(arrToSort) // [-3, 1, 4, 6, 10]
