/*
We have a list of points on the plane.  Find the K closest points to the origin (0, 0).

(Here, the distance between two points on a plane is the Euclidean distance.)

You may return the answer in any order.  The answer is guaranteed to be unique (except for the order that it is in.)



Example 1:

Input: points = [[1,3],[-2,2]], K = 1
Output: [[-2,2]]
Explanation:
The distance between (1, 3) and the origin is sqrt(10).
The distance between (-2, 2) and the origin is sqrt(8).
Since sqrt(8) < sqrt(10), (-2, 2) is closer to the origin.
We only want the closest K = 1 points from the origin, so the answer is just [[-2,2]].
Example 2:

Input: points = [[3,3],[5,-1],[-2,4]], K = 2
Output: [[3,3],[-2,4]]
(The answer [[-2,4],[3,3]] would also be accepted.)


Note:

1 <= K <= points.length <= 10000
-10000 < points[i][0] < 10000
-10000 < points[i][1] < 10000

*/
/**
 * @param {number[][]} points
 * @param {number} K
 * @return {number[][]}
 */
var findClosestPointsReturnIndex = (points) => {
    if(points.length === 0) return 0;

    let indexes = [];
    let minDist = Number.MAX_SAFE_INTEGER;
    points.forEach((point, index) => {
        const distForPoint = Math.sqrt(Math.pow(point[0], 2) + Math.pow(point[1], 2));
        if(distForPoint < minDist) {
            minDist = distForPoint;
            indexes = [index];
        }
    });

    return indexes;
}

var kClosest = function(points, K) {
    let numPointsToRetrieve = K;
    const remainingPoints = points.map(tuple => [tuple[0], tuple[1]]);
    const closestPoints = [];

    while(numPointsToRetrieve > 0) {
        const closestIdx = findClosestPointsReturnIndex(remainingPoints);
        const extractedPoint = remainingPoints.splice(closestIdx, 1);
        closestPoints.push(extractedPoint.flat());
        numPointsToRetrieve--;
    }

    return closestPoints;
};
