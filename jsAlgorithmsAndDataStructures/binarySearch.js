// Binary Search - sorted nums array, find value
const binarySearch = (nums, val) => {
  let pLeft = 0;
  let pRight = nums.length-1;
  while (pLeft < pRight) {
    const middle = Math.round((pLeft+pRight)/2);
    if (val === nums[middle]) {
      return middle;
    } else if (val > nums[middle]) {
      pLeft = middle;
    } else {
      pRight = middle;
    }
  }
  return -1
}
