// Quick Sort
function swapIndices(arr, idx1, idx2) {
  [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]
}

function returnQuickSortPivotIndex(arr, start=Math.floor(arr.length/2), end=arr.length-1) {

  const pivotNum = arr[start];
  let pivotIdx = start;
  for (let ii = start+1; ii <= end; ii++) {
    if(arr[ii] < pivotNum) {
      pivotIdx++;
      swapIndices(arr, ii, pivotIdx)
    }
  }

  swapIndices(arr, start, pivotIdx);
  return pivotIdx
}

function quickSort(arr, left=0, right=arr.length-1) {
  if (left < right) {
		const pivotPointIdx = returnQuickSortPivotIndex(arr, left, right);

    quickSort(arr, left, pivotPointIdx-1);
    quickSort(arr, pivotPointIdx+1, right);
	}

  return arr
}

// Example
var arrToSort = [4, 1, 6, 10, -3]
quickSort(arrToSort) // [-3, 1, 4, 6, 10]
