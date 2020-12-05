/*
Given a time represented in the format "HH:MM", form the next closest time by reusing the current digits. There is no limit on how many times a digit can be reused.

You may assume the given input string is always valid. For example, "01:34", "12:09" are all valid. "1:34", "12:9" are all invalid.

Example 1:

Input: "19:34"
Output: "19:39"
Explanation: The next closest time choosing from digits 1, 9, 3, 4, is 19:39, which occurs 5 minutes later.  It is not 19:33, because this occurs 23 hours and 59 minutes later.

Example 2:

Input: "23:59"
Output: "22:22"
Explanation: The next closest time choosing from digits 2, 3, 5, 9, is 22:22. It may be assumed that the returned time is next day's time since it is smaller than the input time numerically.

*/
/**
 * @param {string} time
 * @return {string}
 */
var isValidTime = (str) => {
    const regex = /^[0-2][0-9]:[0-5][0-9]$/;
    if(!regex.test(str)) return false;
    if(str[0] === "2") {
        const digit = str[1];
        if(digit === "4" || digit === "5" || digit === "6" || digit === "7" || digit === "8" || digit === "9") {
            return false;
        }
    }
    
    return true;
}

var nextClosestTime = function(time) {
    const numsStr = time.slice(0,2) + time.slice(3)
    const nums = numsStr.split('');
    const validTimes = new Set([]);
    
    const allPossibilities = (curStr) => {
        if(curStr.length === 2) curStr += ":"
        if(curStr.length === 5) {
            if(isValidTime(curStr)) {
                validTimes.add(curStr);
            }
            return;
        }
        
        for(let ii = 0; ii < nums.length; ii++) {
            curStr += nums[ii];
            allPossibilities(curStr);
            curStr = curStr.slice(0,curStr.length-1);
        }
    }
    allPossibilities('');
    
    const times = [...validTimes];
    times.sort();
    const idxTime = times.indexOf(time);
    return times[idxTime+1] || times[0]
};