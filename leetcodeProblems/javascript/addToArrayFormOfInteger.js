/*
For a non-negative integer X, the array-form of X is an array of its digits in left to right order.  For example, if X = 1231, then the array form is [1,2,3,1].

Given the array-form A of a non-negative integer X, return the array-form of the integer X+K.

Example 1:

Input: A = [1,2,0,0], K = 34
Output: [1,2,3,4]
Explanation: 1200 + 34 = 1234

Example 2:

Input: A = [2,7,4], K = 181
Output: [4,5,5]
Explanation: 274 + 181 = 455

Example 3:

Input: A = [2,1,5], K = 806
Output: [1,0,2,1]
Explanation: 215 + 806 = 1021

Example 4:

Input: A = [9,9,9,9,9,9,9,9,9,9], K = 1
Output: [1,0,0,0,0,0,0,0,0,0,0]
Explanation: 9999999999 + 1 = 10000000000

*/

var addToArrayForm = function(A, K) {
  const reversedA = A.reverse();
  const reversedB = [];
  let num = K;
  while (num > 0) {
    reversedB.push(num % 10);
    num -= num % 10;
    num /= 10;
  }
  const longerArray = reversedA.length > reversedB.length ? reversedA : reversedB;
  let needToAddMore = false;
  let valueToAdd = 0;
  const solution = [];
  let total = 0;

  for (let ii = 0; ii < longerArray.length + 1; ii++) {
    total = 0;
    if (needToAddMore) {
      total += valueToAdd
    }
    total += (reversedA[ii] || 0) + (reversedB[ii] || 0);
    if (total > 9) {
      valueToAdd = 1;
      total -= 10;
      needToAddMore = true;
    } else {
      valueToAdd = 0;
      needToAddMore = false;
    }
    solution.push(total);
  }
  if (solution[solution.length - 1] === 0) {
    solution.pop();
  }
  console.log(solution);
  solution.reverse();
  return solution;
};
