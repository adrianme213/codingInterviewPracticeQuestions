/*
You are given a list of songs where the ith song has a duration of time[i] seconds.

Return the number of pairs of songs for which their total duration in seconds is divisible by 60. Formally, we want the number of indices i, j such that i < j with (time[i] + time[j]) % 60 == 0.

Example 1:

Input: time = [30,20,150,100,40]
Output: 3
Explanation: Three pairs have a total duration divisible by 60:
(time[0] = 30, time[2] = 150): total duration 180
(time[1] = 20, time[3] = 100): total duration 120
(time[1] = 20, time[4] = 40): total duration 60

Example 2:

Input: time = [60,60,60]
Output: 3
Explanation: All three pairs have a total duration of 120, which is divisible by 60.

Constraints:

    1 <= time.length <= 6 * 104
    1 <= time[i] <= 500

*/
/**
 * @param {number[]} time
 * @return {number}
 */
var numPairsDivisibleBy60 = function(time) {
    let count = 0;
    let mapByCounts = {};
    for(let ii = 0; ii < time.length; ii++) {
        const remainder = time[ii]%60;
        const lookupVal = 60-remainder === 60 ? 0 : 60-remainder        
        count += mapByCounts[lookupVal] !== undefined ? mapByCounts[lookupVal] : 0;
        mapByCounts[remainder] = mapByCounts[remainder] ? mapByCounts[remainder]+1 : 1;
    }
    return count;
};
