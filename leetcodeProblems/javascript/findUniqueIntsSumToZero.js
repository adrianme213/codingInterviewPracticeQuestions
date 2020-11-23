/*
Given an integer n, return any array containing n unique integers such that they add up to 0.

Example 1:

Input: n = 5
Output: [-7,-1,1,3,4]
Explanation: These arrays also are accepted [-5,-1,1,2,3] , [-3,-1,2,-2,4].

Example 2:

Input: n = 3
Output: [-1,0,1]

Example 3:

Input: n = 1
Output: [0]

Constraints:
    1 <= n <= 1000
*/
/**
 * @param {number} n
 * @return {number[]}
 */
var sumZero = function(n) {
    if(n === 1) return [0];
    else if (n === 2) return [-1, 1]
    else if (n === 3) return [-1, 0, 1]
    
    const arr = new Array(n);
    let num = 1;
    for(let ii = 0; ii < n; ii = ii+2) {
        arr[ii] = num;
        if(ii+1 < n) {
            arr[ii+1] = num*-1;
        }
        num++;
    }
    
    if(n%2 === 1) {
        arr[arr.length-1] = 0;
    }
    return arr;
};
