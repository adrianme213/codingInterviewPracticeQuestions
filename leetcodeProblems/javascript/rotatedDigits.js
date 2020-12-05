/*
X is a good number if after rotating each digit individually by 180 degrees, we get a valid number that is different from X.  Each digit must be rotated - we cannot choose to leave it alone.

A number is valid if each digit remains a digit after rotation. 0, 1, and 8 rotate to themselves; 2 and 5 rotate to each other (on this case they are rotated in a different direction, in other words 2 or 5 gets mirrored); 6 and 9 rotate to each other, and the rest of the numbers do not rotate to any other number and become invalid.

Now given a positive number N, how many numbers X from 1 to N are good?

Example:
Input: 10
Output: 4
Explanation: 
There are four good numbers in the range [1, 10] : 2, 5, 6, 9.
Note that 1 and 10 are not good numbers, since they remain unchanged after rotating.

Note:

    N  will be in range [1, 10000].

*/
/**
 * @param {number} N
 * @return {number}
 */
var rotateDigit = (num) => {
    const map = {
        0: 0,
        1: 1,
        2: 5,
        3: null,
        4: null,
        5: 2,
        6: 9,
        7: null,
        8: 8,
        9: 6
    };
    return map[num];
}

var rotatedDigits = function(N) {
    let count = 0;
    let validRotatedNum = {};
    
    for(let ii = 1; ii <= N; ii++) {
        const ogNum = ii;
        const ogNumStr = String(ogNum);
        if(ogNumStr.length === 1) {
            const rotateNum = rotateDigit(ogNum);
            if(rotateNum !== null && rotateNum !== ogNum) {
                validRotatedNum[ii] = rotateNum;
                count++;
            } else {
                validRotatedNum[ii] = null;
            }
        } else {
            let newNum = "";
            for(let jj = 0; jj < ogNumStr.length; jj++) {
                const curNum = Number(ogNumStr[jj]);
                const rotatedCurNum = rotateDigit(curNum);
                if(rotatedCurNum === null) newNum = null;
                newNum += String(rotatedCurNum);
            }
            if(newNum !== null) {
                newNum = Number(newNum);
                if(newNum !== ogNum && newNum >= 0) {
                    validRotatedNum[ii] = newNum;
                    count++;
                } else {
                    validRotatedNum[ii] = null;
                }
            } else {
                validRotatedNum[ii] = null;
            }
        }
        
    }
        
    return count;
};