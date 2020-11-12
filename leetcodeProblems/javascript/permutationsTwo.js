/*
Given a collection of numbers, nums, that might contain duplicates, return all possible unique permutations in any order.

Example 1:

Input: nums = [1,1,2]
Output:
[[1,1,2],
 [1,2,1],
 [2,1,1]]

Example 2:

Input: nums = [1,2,3]
Output: [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]

Constraints:

    1 <= nums.length <= 8
    -10 <= nums[i] <= 10

*/
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function(nums) {
    const mySet = new Set([]);
    const numsArr = nums.slice();

    const recurse = (curNums, curBucket=[]) => {
        if(curNums.length === 0) {
            const str = curBucket.join('');
            if(!mySet.has(str)) {
                mySet.add(str);
            }
        }

        for(let ii = 0; ii < curNums.length; ii++) {
            const myNum = curNums.splice(ii, 1)[0];
            curBucket.push(myNum);
            recurse(curNums, curBucket);
            curBucket.pop();
            curNums.splice(ii, 0, myNum);
        }
    }
    recurse(numsArr);

    let numbers = [...mySet].map(str => str.split('').map(num => {
        if(num === '-') return '-';
        return Number(num)
    }));

    for(let ii = 0; ii < numbers.length; ii++) {
        for(let jj = 0; jj < numbers[ii].length; jj++) {
            if(numbers[ii][jj] === '-') {
                numbers[ii][jj+1] *= -1;
            }
        }
    }

    numbers = numbers.map(arr => arr.filter(num => num !== '-'));

    return numbers;
};
