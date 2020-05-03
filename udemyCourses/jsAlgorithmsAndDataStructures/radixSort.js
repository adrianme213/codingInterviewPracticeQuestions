// Radix Sort - only works for integers
function getDigitAtPlace(num, idx) {
  if (idx < 1) return -1
  const numAsString = Math.abs(num).toString();
  if(numAsString.length < idx) return 0
  const result = Number(numAsString[numAsString.length - idx])
  return result;
}


function numOfTimesToRunRadix(arr) {
  let maxLength = Math.abs(arr[0]).toString().length;
  for (let ii = 1; ii < arr.length; ii++) {
    if (Math.abs(arr[ii]).toString().length > maxLength) {
      maxLength = Math.abs(arr[ii]).toString().length
    }
  }
  return maxLength;
}


function radixSort(arr) {
  const numBuckets = {0: [], 1: [], 2: [], 3: [], 4: [], 5: [], 6: [], 7: [], 8: [], 9: []};
  const numBucketsNegative = {9: [], 8: [], 7: [], 6: [], 5: [], 4: [], 3: [], 2: [], 1: [], 0: []};
  const maxLength = numOfTimesToRunRadix(arr);
  let resultPositive = [];
  let resultNegative = [];
  let jointResult = arr.slice();

  for (let numsPlace = 1; numsPlace <= maxLength; numsPlace++) {
    resultPositive = [];
    resultNegative = [];

    for (let ii = 0; ii < arr.length; ii++) {
      const currentNum = jointResult[ii]
      const numAtPlace = getDigitAtPlace(currentNum, numsPlace);
      if(currentNum < 0) {
        numBucketsNegative[Math.abs(numAtPlace)].push(currentNum);
      } else {
        numBuckets[numAtPlace].push(currentNum);
      }

    }

    // Empty negative num buckets into result
    for (let num in numBucketsNegative) {
      while (numBucketsNegative[num].length > 0) {
        const numToShift = numBucketsNegative[num].shift()
        resultNegative.push(numToShift)
      }
    }

    // Empty positive num buckets into result
    for (let num in numBuckets) {
      while (numBuckets[num].length > 0) {
        const numToShift = numBuckets[num].shift()
        resultPositive.push(numToShift)
      }
    }
    console.log(' positive ', resultPositive);
    console.log(' negative ', resultNegative);
    jointResult = [...resultNegative, ...resultPositive];
  }
  resultNegative.reverse();
  jointResult = [...resultNegative, ...resultPositive]

  return jointResult
}

// Testing Functions
// console.log(getDigitAtPlace(1902, 3), 9)
// console.log(getDigitAtPlace(1902, 4), 1)
// console.log(getDigitAtPlace(2, 3), 0)
// console.log(getDigitAtPlace(-1234, 3 ), 2)
// console.log(numOfTimesToRunRadix([100, 1, 23, 4, -4000]), 4)
// console.log(numOfTimesToRunRadix([100, 1, 23, 4]), 3)
// Example
var arrToSort = [4, 3, 55, -2, 1, 6, -8, 100, -101]
radixSort(arrToSort) // [-101, -8, -2, 1, 3, 4, 6, 55, 100]
