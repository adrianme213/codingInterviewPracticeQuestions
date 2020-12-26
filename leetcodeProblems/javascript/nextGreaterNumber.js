/*
Given a positive integer n, find the smallest integer which has exactly the same digits existing in the integer n and is greater in value than n. If no such positive integer exists, return -1.

Note that the returned integer should fit in 32-bit integer, if there is a valid answer but it does not fit in 32-bit integer, return -1.

Example 1:

Input: n = 12
Output: 21

Example 2:

Input: n = 21
Output: -1

 

Constraints:

    1 <= n <= 231 - 1

*/
/**
 * @param {number} n
 * @return {number}
 */
var nextGreaterElement = function(n) {
    const len = String(n).length;
    let curMax = -1;
    let diff = Number.MAX_SAFE_INTEGER;
    
    const traverse = (nums, curArr) => {
        if(curArr.length === len) {
            if(Number(curArr.join('')) !== n && diff > Number(curArr.join(''))-n && Number(curArr.join(''))-n > 0 && Number(curArr.join('')) < 2147483651) {
                console.log(' diff ', diff);
                console.log(' newdiff ', Number(curArr.join(''))-n);
                diff = Number(curArr.join(''))-n
                curMax = Number(curArr.join(''));
            }
            return;
        }
        for(let ii = 0; ii < nums.length; ii++) {
            const myNums = nums.slice();
            const [num] = myNums.splice(ii, 1);
            curArr.push(num);
            traverse(myNums, curArr);
            curArr.pop();
        }
    }
    traverse(String(n).split(''), []);

    return curMax;
};