/*
Given an array arr of 4 digits, find the latest 24-hour time that can be made using each digit exactly once.

24-hour times are formatted as "HH:MM", where HH is between 00 and 23, and MM is between 00 and 59. The earliest 24-hour time is 00:00, and the latest is 23:59.

Return the latest 24-hour time in "HH:MM" format.  If no valid time can be made, return an empty string.
Example 1:

Input: A = [1,2,3,4]
Output: "23:41"
Explanation: The valid 24-hour times are "12:34", "12:43", "13:24", "13:42", "14:23", "14:32", "21:34", "21:43", "23:14", and "23:41". Of these times, "23:41" is the latest.

Example 2:

Input: A = [5,5,5,5]
Output: ""
Explanation: There are no valid 24-hour times as "55:55" is not valid.

Example 3:

Input: A = [0,0,0,0]
Output: "00:00"

Example 4:

Input: A = [0,0,1,0]
Output: "10:00"

Constraints:

    arr.length == 4
    0 <= arr[i] <= 9

*/
/**
 * @param {number[]} arr
 * @return {string}
 */
var isValidTime = (str) => {
    console.log(' --- ', str);
    const regex = /^[0-2][0-9]:[0-5][0-9]$/
    if(str[0] === "2") {
        const above3 = ["4", "5", "6", "7", "8", "9"];
        if(above3.includes(str[1])) return false;
    }
    
    return regex.test(str);
}

var largestTimeFromDigits = function(arr) {
    const times = [];
    const nums = [];
    
    const traverse = (arr, curStr) => {
        if(curStr.length === 5 && isValidTime(curStr)) {
            const myarr = curStr.split('');
            myarr.splice(2, 1);
            const num = Number(myarr.join(''));
            nums.push(num);
            times.push(curStr);
            return;
        }
        
        if(curStr.length === 2) {
            curStr += ":";
        }
        
        for(let ii = 0; ii < arr.length; ii++) {
            const mynum = arr.splice(ii, 1)[0];
            curStr += `${mynum}`;
            traverse(arr, curStr);
            curStr = curStr.slice(0, curStr.length-1);
            arr.splice(ii, 0, mynum);
        }
    }
    
    traverse(arr, '');

    const copy = nums.slice().sort((a,b) => b-a)
    const idx = nums.indexOf(copy[0]);

    if(times.length === 0) return "";
    
    return times[idx];
};