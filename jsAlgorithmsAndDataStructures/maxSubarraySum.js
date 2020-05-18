function maxSubarraySum(arr, sumLength){
  if (arr.length < sumLength) {
      return null;
  } else if (arr.length === sumLength) {
      return arr.reduce((acc = 0, num) => acc + num );
  }

  let p1 = 0;
  let p2 = sumLength;
  let maxSum = arr.slice(0, sumLength).reduce((acc = 0, num) => acc + num );
  let currentSum = maxSum;

  while (p2 < arr.length) {
      currentSum = currentSum - arr[p1] + arr[p2];
      if (currentSum > maxSum) {
          maxSum = currentSum;
      }
      p1++;
      p2++;
  }
  return maxSum;
}
