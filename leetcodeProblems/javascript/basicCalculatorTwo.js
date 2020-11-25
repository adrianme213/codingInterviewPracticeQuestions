/*
Complete research at Shunting Yard Algorithm: https://www.cs.utexas.edu/~EWD/MCReps/MR35.PDF
Implement a basic calculator to evaluate a simple expression string.

The expression string contains only non-negative integers, +, -, *, / operators and empty spaces . The integer division should truncate toward zero.

Example 1:

Input: "3+2*2"
Output: 7

Example 2:

Input: " 3/2 "
Output: 1

Example 3:

Input: " 3+5 / 2 "
Output: 5

Note:

    You may assume that the given expression is always valid.
    Do not use the eval built-in library function.

*/
/**
 * @param {string} s
 * @return {number}
 */
var calculate = function(s) {
  let mySum = 0;
  
  const multiply = (str, negative,  tempStr = '') => {
    let divide = false;
    let sum = Number(str && str[0]) ? 1 : 0;
    if (!sum) return;
    for (let ii = 0; ii <= str.length; ii++) {
      const num = str[ii];
      if (!isNaN(Number(num))) {
        tempStr += num;
      } else {
        if (divide) {
          sum = Math.floor(sum / Number(tempStr));
        } else {
          sum = sum * Number(tempStr);
        }
        tempStr = '';
      }
      if (num === '*') divide = false;
      if (num === '/') divide = true;
    }
    mySum = negative ? mySum - sum : mySum + sum;
  };
 
  let str = '';
  let negative = false;
  
  for (let ii = 0; ii <= s.length; ii++) {
    const num = s[ii];
    if (num === ' ') continue;
    if (num === '+') {
      multiply(str, negative);
      str = '';
      negative = false;
    } else if (num === '-') {
      multiply(str, negative);
      str = '';
      negative = true;
    } else if (num) {
      str += num;
    } else {
      multiply(str, negative);
    }
  }
  
  return mySum;
};
