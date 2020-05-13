/*
Input: [[1,3],[2,6],[8,10],[15,18]]
Output: [[1,6],[8,10],[15,18]]
Explanation: Since intervals [1,3] and [2,6] overlaps, merge them into [1,6].

Input: [[1,4],[4,5]]
Output: [[1,5]]
Explanation: Intervals [1,4] and [4,5] are considered overlapping.
*/

var sortIntervals = function(intervals) {
  return intervals.slice().sort((first, next) => first.start - next.start);
}

var merge = function(intervals) {

  if (intervals.length === 0) {
    return [];
  }
  intervals = sortIntervals(intervals);

  let nextSetCounter = 1;
  let currentSet = intervals[nextSetCounter - 1];
  let nextSet = intervals[nextSetCounter];
  const result = [];

  while (nextSet) {
    const [currentSetLow, currentSetHigh] = [currentSet.start, currentSet.end];
    const [nextSetLow, nextSetHigh] = [nextSet.start, nextSet.end];

    if (nextSetLow <= currentSetHigh) {
      currentSet = new Interval(Math.min(currentSetLow, nextSetLow), Math.max(currentSetHigh, nextSetHigh));
      nextSetCounter++;
      nextSet = intervals[nextSetCounter];
    } else {
      result.push(currentSet);
      currentSet = nextSet;
      nextSetCounter++;
      nextSet = intervals[nextSetCounter];
    }
  }
  result.push(currentSet);

  return result;
};
