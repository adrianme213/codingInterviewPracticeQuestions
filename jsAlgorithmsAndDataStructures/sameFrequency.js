// Frequency Counter
function sameFrequency(num1, num2){
    let num1String = num1.toString();
    let num2String = num2.toString();
    const num1Obj = {};
    const num2Obj = {};
    for (let ii = 0; ii < num1String.length; ii++) {
        num1Obj[num1String[ii]] = num1Obj[num1String[ii]] + 1 || 1;
    }
    for (let ii = 0; ii < num2String.length; ii++) {
        num2Obj[num2String[ii]] = num2Obj[num2String[ii]] + 1 || 1;
    }
    for (let prop in num2Obj) {
        if (num2Obj[prop] !== num1Obj[prop]) {
            return false;
        }
    }
    return true;
}
