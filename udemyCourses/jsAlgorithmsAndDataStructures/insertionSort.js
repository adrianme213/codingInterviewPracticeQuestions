// Insertion Sort
function insertionSort(arr) {
  let p1 = 1;
  while (p1 < arr.length) {
    let ii = p1;
    let isNotInserted = true
    const numSpliced = arr.splice(p1, 1)[0]

    while (ii >= 0 && isNotInserted) {
      if (ii === 0 || arr[ii-1] < numSpliced) {
        arr.splice(ii, 0, numSpliced)
        isNotInserted = false
      }
      ii--
    }

    p1++;
  }

  return arr;
}

// Example
var arrToSort = [4, 1, 6, 10, -3]
insertionSort(arrToSort) // [-3, 1, 4, 6, 10]
