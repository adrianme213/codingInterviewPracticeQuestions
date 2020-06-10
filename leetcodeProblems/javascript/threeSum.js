/*
Given an array nums of n integers, are there elements a, b, c in nums such that a + b + c = 0? Find all unique triplets in the array which gives the sum of zero.

Note:

The solution set must not contain duplicate triplets.

Example:

Given array nums = [-1, 0, 1, 2, -1, -4],

A solution set is:
[
  [-1, 0, 1],
  [-1, -1, 2]
]

*/

var giveHashkey = function(nums) {
    const sortedNums = nums.slice().sort((a,b) => a-b);
    const joinedNums = sortedNums.join('');
    return `key_${joinedNums}`;
}

var threeSum = function(nums) {
    const solution = [];
    const objSolution = {};
    const sortedNums = nums.slice().sort((a,b) => a-b);

    for(let ii = 0; ii < sortedNums.length; ii++) {
        if(sortedNums[ii] > 0) break;
        if(ii > 0 && sortedNums[ii] === sortedNums[ii-1]) continue;
        let left = ii+1;
        let right = sortedNums.length-1;

        while(left < right) {
            const localSum = sortedNums[ii]+sortedNums[left]+sortedNums[right];
            if(localSum === 0) {

                const foundSolution = [sortedNums[ii], sortedNums[left], sortedNums[right]];
                const hashKey = giveHashkey(foundSolution);
                if(!objSolution[hashKey]) {
                    objSolution[hashKey] = foundSolution;
                }
                left++;
            } else if(localSum < 0) {
                left++;
            } else {
                right--;
            }
        }
    }

    for(let key in objSolution) {
        solution.push(objSolution[key]);
    }
    return solution;
};
