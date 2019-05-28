// Come back to this one! - sliding window
// function minSubArrayLen(arr, sum) {
//     if (arr.length < 1) { return null; }
//     let totalArrSum = arr.reduce((acc=0, num) => acc + num );
//     if (totalArrSum < sum) { return 0 }
//     else if (totalArrSum === sum) { return arr.length }

//     // Find smallest pair by window
//     let p1 = 0;
//     let p2 = arr.length-1;
//     let currentSum = totalArrSum;
//     console.log('arr ', arr);
//     while (currentSum > sum) {
//         console.log('CurrentSum ', currentSum);
//         if (arr[p1] < arr[p2]) {
//             console.log('minus p1 ', arr[p1])
//             currentSum -= arr[p1];
//             p1++
//         } else if (arr[p2] < arr[p1]) {
//             console.log('minus p2 ', arr[p2])
//             currentSum -= arr[p2];
//             p2--;
//         } else {
//             currentSum -= arr[p1];
//             p1++
//         }
//     }

//     return p2-p1+1

// }


// Course solution below
function minSubArrayLen(nums, sum) {
  let total = 0;
  let start = 0;
  let end = 0;
  let minLen = Infinity;

  while (start < nums.length) {
    // if current window doesn't add up to the given sum then
		// move the window to right
    if(total < sum && end < nums.length){
        total += nums[end];
        end++;
    }
    // if current window adds up to at least the sum given then
		// we can shrink the window
    else if(total >= sum){
        minLen = Math.min(minLen, end-start);
        total -= nums[start];
        start++;
    }
    // current total less than required total but we reach the end, need this or else we'll be in an infinite loop
    else {
      break;
    }
  }

  return minLen === Infinity ? 0 : minLen;
}
