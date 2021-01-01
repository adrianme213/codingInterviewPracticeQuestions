/*
Given n non-negative integers representing the histogram's bar height where the width of each bar is 1, find the area of largest rectangle in the histogram.

 


Above is a histogram where width of each bar is 1, given height = [2,1,5,6,2,3].

 


The largest rectangle is shown in the shaded area, which has area = 10 unit.

 

Example:

Input: [2,1,5,6,2,3]
Output: 10


*/
/**
 * @param {number[]} heights
 * @return {number}
 */

var largestRectangleArea = function(heights) {
    const stack = [];
    let ii = 0;
    const n = heights.length;
    let maxArea = 0;
    
    while (ii < n) {
        if(stack.length === 0 || heights[stack[stack.length-1]] < heights[ii]) {
            stack.push(ii);
            ii++;
            continue;
        } else {
            let x = stack.pop()
            const area = heights[x]*(stack.length === 0 ? ii : ii-stack[stack.length-1]-1);
            maxArea = Math.max(maxArea, area);
        }
    }
    
    while(stack.length !== 0){
            let x = stack.pop();
            const area = heights[x]*(stack.length === 0 ? ii : ii-stack[stack.length-1]-1);
            maxArea = Math.max(maxArea, area);
    }
    
    return maxArea;
};

/*
var largestRectangleArea = function(heights) {
    if(heights.length === 1) return heights[0]
    let maxArea = 0;
    for(let ii = 0; ii <= heights.length-1; ii++) {
        for(let jj = ii+1; jj <= heights.length; jj++) {
            const height = Math.min(...heights.slice(ii,jj));
            const curArea = (jj-ii)*(height);
            if(curArea > maxArea) maxArea = curArea;
        }
    }
    return maxArea;
};
*/