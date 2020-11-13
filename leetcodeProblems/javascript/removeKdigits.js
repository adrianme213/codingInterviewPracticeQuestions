/*
Given a non-negative integer num represented as a string, remove k digits from the number so that the new number is the smallest possible.

Note:

    The length of num is less than 10002 and will be ≥ k.
    The given num does not contain any leading zero.

Example 1:

Input: num = "1432219", k = 3
Output: "1219"
Explanation: Remove the three digits 4, 3, and 2 to form the new number 1219 which is the smallest.

Example 2:

Input: num = "10200", k = 1
Output: "200"
Explanation: Remove the leading 1 and the number is 200. Note that the output must not contain leading zeroes.

Example 3:

Input: num = "10", k = 2
Output: "0"
Explanation: Remove all the digits from the number and it is left with nothing which is 0.

*/
/**
 * @param {string} num
 * @param {number} k
 * @return {string}
 */
var removeKdigits = function(num, k) {
    if(num.length === k) return "0";
    let numsDesired = num.length-k;

    let p1 = 0;
    let p2 = k;
    let minNum = "";
    let indexSet = new Set([]);

    while(p2 < num.length) {
        const subNumString = num.substring(p1, p2+1);
        const subStringArr = subNumString.split('').map(str => Number(str));

        let minNumber = Math.min(...subStringArr);
        let idxWithinSubString = subStringArr.indexOf(minNumber);
        let idxTrue = p1+idxWithinSubString;
        let offSet = 0;

        while(indexSet.has(idxTrue)) {
            subStringArr.splice(idxWithinSubString, 1);
            offSet++;
            minNumber = Math.min(...subStringArr);
            idxWithinSubString = subStringArr.indexOf(minNumber);
            idxTrue = p1+idxWithinSubString+offSet;
        }

        minNum += String(minNumber);
        indexSet.add(idxTrue);
        p1 = idxTrue;
        p2++;
    }

    while(minNum[0] === "0" ) {
        minNum = minNum.substring(1);
    }

    return minNum.length > 0 ? minNum : "0";
};
