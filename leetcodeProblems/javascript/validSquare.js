/*
Given the coordinates of four points in 2D space, return whether the four points could construct a square.

The coordinate (x,y) of a point is represented by an integer array with two integers.

Example:

Input: p1 = [0,0], p2 = [1,1], p3 = [1,0], p4 = [0,1]
Output: True

Note:

    All the input integers are in the range [-10000, 10000].
    A valid square has four equal sides with positive length and four equal angles (90-degree angles).
    Input points have no order.

*/
/**
 * @param {number[]} p1
 * @param {number[]} p2
 * @param {number[]} p3
 * @param {number[]} p4
 * @return {boolean}
 */
var validSquare = function(p1, p2, p3, p4) {
    const [x1, y1] = p1;
    const [x2, y2] = p2;
    const [x3, y3] = p3;
    const [x4, y4] = p4;

    const x1dist1 = Math.sqrt(Math.pow(x2-x1,2) + Math.pow(y2-y1,2));
    const x1dist2 = Math.sqrt(Math.pow(x3-x1,2) + Math.pow(y3-y1,2));
    const x1dist3 = Math.sqrt(Math.pow(x4-x1,2) + Math.pow(y4-y1,2));
    const x2dist1 = Math.sqrt(Math.pow(x1-x2,2) + Math.pow(y1-y2,2));
    const x2dist2 = Math.sqrt(Math.pow(x3-x2,2) + Math.pow(y3-y2,2));
    const x2dist3 = Math.sqrt(Math.pow(x4-x2,2) + Math.pow(y4-y2,2));
    const x3dist1 = Math.sqrt(Math.pow(x1-x3,2) + Math.pow(y1-y3,2));
    const x3dist2 = Math.sqrt(Math.pow(x2-x3,2) + Math.pow(y2-y3,2));
    const x3dist3 = Math.sqrt(Math.pow(x4-x3,2) + Math.pow(y4-y3,2));
    const x4dist1 = Math.sqrt(Math.pow(x1-x4,2) + Math.pow(y1-y4,2));
    const x4dist2 = Math.sqrt(Math.pow(x2-x4,2) + Math.pow(y2-y4,2));
    const x4dist3 = Math.sqrt(Math.pow(x3-x4,2) + Math.pow(y3-y4,2));

    const setDistances1 = new Set([x1dist1, x1dist2, x1dist3]);
    const setDistances2 = new Set([x2dist1, x2dist2, x2dist3]);
    const setDistances3 = new Set([x3dist1, x3dist2, x3dist3]);
    const setDistances4 = new Set([x4dist1, x4dist2, x4dist3]);
    if(setDistances1.size !== 2 || setDistances2.size !== 2 || setDistances3.size !== 2 || setDistances4.size !== 2) return false;
    else if(new Set([...setDistances1, ...setDistances2, ...setDistances3, ...setDistances4]).size !== 2) return false;

    return true;
};
