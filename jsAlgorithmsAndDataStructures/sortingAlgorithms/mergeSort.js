// Merge Sort
function mergeTwoSortedArrays(arr1, arr2) {
  const result = [];
  let p1 = 0;
  let p2 = 0;

  while (p1 < arr1.length && p2 < arr2.length) {
    if (arr1[p1] < arr2[p2]) {
      result.push(arr1[p1])
      p1++
    } else {
      result.push(arr2[p2])
      p2++
    }
  }
  if (p1 === arr1.length) {
    result.push(...arr2.slice(p2))
  } else {
    result.push(...arr1.slice(p1))
  }

  return result;
}

console.log(mergeTwoSortedArrays([1,10,50], [2,14,99,100]))

function mergeSort(arr) {
  if(arr.length <= 1) return arr;
  const arrFirstHalf = arr.slice(0, Math.floor(arr.length/2))
  const arrSecondHalf = arr.slice(Math.floor(arr.length/2))

  return mergeTwoSortedArrays(mergeSort(arrFirstHalf), mergeSort(arrSecondHalf))
}

console.log(mergeSort([1, 2, 14, 99, 50, 100, 10]))
console.log(mergeSort([1, 2, 14, 99, 5, -10, 10, -5, 1, 2, 33, 44444, 100, 10]))
