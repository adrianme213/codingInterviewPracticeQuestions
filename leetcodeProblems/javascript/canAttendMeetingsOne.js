/*
Given an array of meeting time intervals where intervals[i] = [starti, endi], determine if a person could attend all meetings.
Example 1:

Input: intervals = [[0,30],[5,10],[15,20]]
Output: false
Example 2:

Input: intervals = [[7,10],[2,4]]
Output: true

Constraints:

0 <= intervals.length <= 104
intervals.length == 2
0 <= starti < endi <= 106
*/
/**
 * @param {number[][]} intervals
 * @return {boolean}
 */
var canAttendMeetings = function(intervals) {
    const maxTimes = intervals.map(tuple => [tuple[1], -1]);
    const minTimes = intervals.map(tuple => [tuple[0], 1]);


    const sortedIntervals = [...minTimes, ...maxTimes].sort((a,b) => {
        if(a[0] <= b[0]) return -1;
        return 1;
    });

    let curRoomsUsed = 0;
    for(let ii = 0; ii < sortedIntervals.length; ii++) {
        curRoomsUsed += sortedIntervals[ii][1];
        if(curRoomsUsed > 1) return false;
    }

    return true;
};
