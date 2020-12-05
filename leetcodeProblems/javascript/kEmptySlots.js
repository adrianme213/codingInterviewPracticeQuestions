/*
You have n bulbs in a row numbered from 1 to n. Initially, all the bulbs are turned off. We turn on exactly one bulb every day until all bulbs are on after n days.

You are given an array bulbs of length n where bulbs[i] = x means that on the (i+1)th day, we will turn on the bulb at position x where i is 0-indexed and x is 1-indexed.

Given an integer k, return the minimum day number such that there exists two turned on bulbs that have exactly k bulbs between them that are all turned off. If there isn't such day, return -1.

Example 1:

Input: bulbs = [1,3,2], k = 1
Output: 2
Explanation:
On the first day: bulbs[0] = 1, first bulb is turned on: [1,0,0]
On the second day: bulbs[1] = 3, third bulb is turned on: [1,0,1]
On the third day: bulbs[2] = 2, second bulb is turned on: [1,1,1]
We return 2 because on the second day, there were two on bulbs with one off bulb between them.

Example 2:

Input: bulbs = [1,2,3], k = 1
Output: -1

Constraints:

    n == bulbs.length
    1 <= n <= 2 * 104
    1 <= bulbs[i] <= n
    bulbs is a permutation of numbers from 1 to n.
    0 <= k <= 2 * 104
*/
// Initial Submission
/**
 * @param {number[]} bulbs
 * @param {number} k
 * @return {number}
 */
var countMostConsecutiveZeros = (arr) => {
    if(arr === null) return [];
    let spacings = new Set([]);
    
    let p0 = arr.indexOf(1);
    let pf = arr.lastIndexOf(1);
    while(p0 < pf) {
        const nextIdx = arr.indexOf(1, p0+1);
        if(nextIdx === -1) break;
        const dist = nextIdx-p0;
        if(dist > 1) {
            spacings.add(dist-1);
        }
        
        p0 = nextIdx;
    }
    
    return spacings;
}

var kEmptySlots = function(bulbs, k) {
    if(k > bulbs.length-2) return -1;
    const bulbsOnOff = new Array(bulbs.length).fill(0);
    
    for(let ii = 0; ii < bulbsOnOff.length; ii++ ) {
        const bulbIdx = bulbs[ii]-1;
        bulbsOnOff[bulbIdx] = 1;
        const spacingBulbs = countMostConsecutiveZeros(bulbsOnOff);
        if(spacingBulbs.has(k)) {
            return ii+1;
        }
    }
    
    return -1;
};

// Assisted Solution From Boards:
/**
 * @param {number[]} bulbs
 * @param {number} k
 * @return {number}
 */
let noOneBetweenStartEnd = function (status, start, end) {
    for (let i = start; i <= end; i++) {
        if (status[i] === 1) {
            return false;
        }
    }
    return true;
}

var kEmptySlots = function(flowers, k) {
    const status = new Array(flowers.length).fill(0);
    
    for (let i = 0; i < flowers.length; i++) {
        let temp = flowers[i] - 1;
        status[temp] = 1;
        let index1 = temp - k - 1;
        let index2 = temp + k + 1;
        if (index1 >= 0 && status[index1] === 1) {
            if (noOneBetweenStartEnd(status, index1+1, temp-1)) {
                return i + 1;
            }
        }
        if (index2 < status.length && status[index2] === 1) {
            if (noOneBetweenStartEnd(status, temp+1, index2-1)) {
                return i + 1;
            }
        }
    }
    
    return -1;
};