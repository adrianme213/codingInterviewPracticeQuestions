/*
The Tribonacci sequence Tn is defined as follows: 

T0 = 0, T1 = 1, T2 = 1, and Tn+3 = Tn + Tn+1 + Tn+2 for n >= 0.

Given n, return the value of Tn.

 

Example 1:

Input: n = 4
Output: 4
Explanation:
T_3 = 0 + 1 + 1 = 2
T_4 = 1 + 1 + 2 = 4
Example 2:

Input: n = 25
Output: 1389537
 

Constraints:

0 <= n <= 37
The answer is guaranteed to fit within a 32-bit integer, ie. answer <= 2^31 - 1
*/

/**
 * @param {number} n
 * @return {number}
 */
var tribonacci = function(n) {
    if(n < 0  || typeof(n) !== "number") {
        const err_message = "Need to provide number greater than or equal to 0 for tribonacci."
        console.log(err_message)
        throw Error(err_message)
    }
    else if(n === 0) return 0;
    else if(n === 1) return 1;
    else if(n === 2) return 1;
    
    let furthestBackSum = 0;
    let furtherSum = 1;
    let backOneSum = 1;
    
    let sum = 0;
    let ii = 2;
    
    while(ii < n) {
        const _furthestBackSum = furthestBackSum;
        const _furtherSum = furtherSum;
        const _backOneSum = backOneSum;
        sum = furthestBackSum + furtherSum + backOneSum;
        furthestBackSum = _furtherSum;
        furtherSum = _backOneSum;
        backOneSum = sum;
        
        ii += 1;
    }
    
    return sum;
};
