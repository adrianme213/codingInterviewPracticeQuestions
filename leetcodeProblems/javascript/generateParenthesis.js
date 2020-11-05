/**
 * @param {number} n
 * @return {string[]}
 */
var isValidParenthesis = function(str) {
    /* Returns true if valid parens combination, otherwise false */
    let curSum = 0;

    for(let ii = 0; ii < str.length; ii++) {
        if(str[ii] === '(') curSum += 1;
        if(str[ii] === ')') curSum -= 1;
        if(curSum < 0) return false;
    }
    if(curSum !== 0) return false;

    return true;
}

var generateParenthesis = function(n, str='', solutions=[]) {
    if(str.length === n*2) {
        if(isValidParenthesis(str)) {
            solutions.push(str);
        }
    } else {
        str += '(';
        generateParenthesis(n, str, solutions);
        str = str.slice(0, str.length-1);

        str += ')';
        generateParenthesis(n, str, solutions);
        str = str.slice(0, str.length-1);
    }

    return solutions;
};
