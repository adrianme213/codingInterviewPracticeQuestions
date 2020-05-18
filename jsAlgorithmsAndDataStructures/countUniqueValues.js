/* Multiple Pointers Method
Implement a function called countUniqueValues, which accepts a sorted array and
counts the unique values in the arrya. There can be negative numbers in the
array, but it will always be sorted.
*/

function countUniqueValues(arr) {
  if (arr.length === 0) {
    return 0;
  }
  let p1 = 0;
  let p2 = 1;
  while (p2 < arr.length) {
    if (arr[p1] === arr[p2]) {
      p2++;
    } else {
      p1++;
      arr[p1] = arr[p2];
      p2++;
    }
  }
  return p1 + 1;
}


console.log(countUniqueValues([1, 1, 1, 1, 1, 2])); // 2
console.log(countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13])); // 7
console.log(countUniqueValues([])); // 0
console.log(countUniqueValues([-2, -1, -1, 0, 1])); // 4
