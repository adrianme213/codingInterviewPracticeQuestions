/*
Given an array of intervals where intervals[i] = [starti, endi], merge all overlapping intervals, and return an array of the non-overlapping intervals that cover all the intervals in the input.
Example 1:

Input: intervals = [[1,3],[2,6],[8,10],[15,18]]
Output: [[1,6],[8,10],[15,18]]
Explanation: Since intervals [1,3] and [2,6] overlaps, merge them into [1,6].

Example 2:

Input: intervals = [[1,4],[4,5]]
Output: [[1,5]]
Explanation: Intervals [1,4] and [4,5] are considered overlapping.

Constraints:

    1 <= intervals.length <= 104
    intervals[i].length == 2
    0 <= starti <= endi <= 104

*/
/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    const sorted = intervals.map(arr => arr.slice()).sort((a,b) => {
        if(a[0] !== b[0]) return a[0]-b[0];
        return a[1]-b[1];
    });

    let p = 0;
    while(p < sorted.length-1) {
        const curr = sorted[p];
        const next = sorted[p+1];

        if(next[0] <= curr[1]) {
            const newInterval = [curr[0], Math.max(curr[1], next[1])];
            sorted.splice(p, 2, newInterval);
        } else {
            p++;
        }
    }
    return sorted;
};
