// Linear Search - unsorted array find value
const linearSearch = (arr, val) => {
  if (arr.length === 0) return -1
  for (let ii = 0; ii < arr.length; ii++) {
    if (arr[ii] === val) return ii
  }
  return -1
}
