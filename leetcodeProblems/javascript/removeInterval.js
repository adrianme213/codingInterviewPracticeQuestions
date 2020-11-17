/*
Given a sorted list of disjoint intervals, each interval intervals[i] = [a, b] represents the set of real numbers x such that a <= x < b.

We remove the intersections between any interval in intervals and the interval toBeRemoved.

Return a sorted list of intervals after all such removals.

Example 1:

Input: intervals = [[0,2],[3,4],[5,7]], toBeRemoved = [1,6]
Output: [[0,1],[6,7]]

Example 2:

Input: intervals = [[0,5]], toBeRemoved = [2,3]
Output: [[0,2],[3,5]]

Example 3:

Input: intervals = [[-5,-4],[-3,-2],[1,2],[3,5],[8,9]], toBeRemoved = [-1,4]
Output: [[-5,-4],[-3,-2],[4,5],[8,9]]



Constraints:

    1 <= intervals.length <= 10^4
    -10^9 <= intervals[i][0] < intervals[i][1] <= 10^9

*/
/**
 * @param {number[][]} intervals
 * @param {number[]} toBeRemoved
 * @return {number[][]}
 */
var removeInterval = function(intervals, toBeRemoved) {
    const nums = intervals.map(arr => arr.slice());
    const [lo, hi] = toBeRemoved;
    const toRemove = [];

    for(let ii = 0; ii < nums.length; ii++) {
        const pair = nums[ii];

        if(lo <= pair[0] && hi >= pair[1]) {
            toRemove.push(ii);
            continue;
        }

        if(lo <= pair[0] && pair[0] <= hi) {
            pair[0] = hi;
            continue;
        }

        if(lo >= pair[0] && pair[1] <= hi && lo <= pair[1]) {
            pair[1] = lo;
            continue;
        }

        if(lo >= pair[0] && hi <= pair[1]) {
            const temp = pair[1];
            pair[1] = lo;
            const newPair = [hi, temp];
            nums.splice(ii+1, 0, newPair);
            continue;
        }
    }

    const finalNums = [];
    nums.forEach((pair, idx) => {
        if(!toRemove.includes(idx)) {
            finalNums.push(pair);
        }
    })
    return finalNums;
};
