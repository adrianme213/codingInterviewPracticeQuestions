/*
There is a special square room with mirrors on each of the four walls.  Except for the southwest corner, there are receptors on each of the remaining corners, numbered 0, 1, and 2.

The square room has walls of length p, and a laser ray from the southwest corner first meets the east wall at a distance q from the 0th receptor.

Return the number of the receptor that the ray meets first.  (It is guaranteed that the ray will meet a receptor eventually.)

Example 1:

Input: p = 2, q = 1
Output: 2
Explanation: The ray meets receptor 2 the first time it gets reflected back to the left wall.

Note:

    1 <= p <= 1000
    0 <= q <= p

*/
/**
 * @param {number} p
 * @param {number} q
 * @return {number}
 */
var mirrorReflection = function(p, q) {
    let x = 0;
    let y = 0;
    let firstRun = true;
    let ascending = true;

    while(firstRun || !((x === p && y === 0) || (x === p && y === p) || (x === 0 && y === p))) {
        if(firstRun) firstRun = false;

        if(x < p && ascending) {
            x += p;
            y += q;
        } else if(x < p && !ascending) {
            x += p;
            y -= q;
        } else if(x === p && ascending) {
            x -= p;
            y += q;
        } else if(x === p && !ascending) {
            x -= p;
            y -= q;
        }

        if(y >= p) {
            ascending = false;
            y = p - (y-p);
        } else if(y <= 0) {
            ascending = true;
            y = 0 - y;
        }
    }

    if(x === p && y === 0) return 0;
    else if (x === p && y === p) return 1;
    else if (x === 0 && y === p) return 2;
};
