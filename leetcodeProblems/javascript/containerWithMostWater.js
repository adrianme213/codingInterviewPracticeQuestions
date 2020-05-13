/* Given n non-negative integers a1, a2, ..., an , where each represents a point at coordinate (i, ai). n vertical lines are drawn such that the two endpoints of line i is at (i, ai) and (i, 0). Find two lines, which together with x-axis forms a container, such that the container contains the most water.
Example:

Input: [1,8,6,2,5,4,8,3,7]
Output: 49 */

// Quadratic Solution
var maxArea = function(height) {
  let maxWaterVolume = 0;
  for (let ii = 0; ii < height.length; ii++) {
    for (let jj = ii + 1; jj < height.length; jj++) {
      let currentWaterVolume = (jj - ii) * Math.min(height[ii], height[jj]);
      if (currentWaterVolume > maxWaterVolume) {
        maxWaterVolume = currentWaterVolume;
      }
    }
  }
  return maxWaterVolume
};

// Linear Solution
var maxArea = function(height) {
  let maxWaterVolume = 0;
  let leftPointer = 0;
  let rightPointer = height.length - 1;
  while (leftPointer < rightPointer) {
    let currentWaterVolume = (rightPointer - leftPointer) * Math.min(height[leftPointer], height[rightPointer]);
    if (currentWaterVolume > maxWaterVolume) {
      maxWaterVolume = currentWaterVolume;
    }

    if (height[leftPointer] < height[rightPointer]) {
      leftPointer++;
    } else {
      rightPointer--;
    }
  }

  return maxWaterVolume
};
