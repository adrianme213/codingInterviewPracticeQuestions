/*
Design a data structure that accepts a stream of integers and checks if it has a pair of integers that sum up to a particular value.

Implement the TwoSum class:

    TwoSum() Initializes the TwoSum object, with an empty array initially.
    void add(int number) Adds number to the data structure.
    boolean find(int value) Returns true if there exists any pair of numbers whose sum is equal to value, otherwise, it returns false.

Example 1:

Input
["TwoSum", "add", "add", "add", "find", "find"]
[[], [1], [3], [5], [4], [7]]
Output
[null, null, null, null, true, false]

Explanation
TwoSum twoSum = new TwoSum();
twoSum.add(1);   // [] --> [1]
twoSum.add(3);   // [1] --> [1,3]
twoSum.add(5);   // [1,3] --> [1,3,5]
twoSum.find(4);  // 1 + 3 = 4, return true
twoSum.find(7);  // No two integers sum up to 7, return false

Constraints:

    -105 <= number <= 105
    -231 <= value <= 231 - 1
    At most 5 * 104 calls will be made to add and find.

*/
/**
 * Initialize your data structure here.
 */
// var TwoSum = () => {
//     dict = {};
//     nums = [];
// };

class TwoSum {
    constructor() {
        this.dict = {};
        this.nums = [];
    }
}

/**
 * Add the number to an internal data structure..
 * @param {number} number
 * @return {void}
 */
TwoSum.prototype.add = function(number) {
    this.dict[number] = this.dict[number] ? this.dict[number]+1 : 1;
    this.nums.push(number);
    return null;
};

/**
 * Find if there exists any pair of numbers which sum is equal to the value.
 * @param {number} value
 * @return {boolean}
 */
TwoSum.prototype.find = function(value) {

    for(let ii = 0; ii < this.nums.length; ii++) {
        const num = this.nums[ii];
        const numToFind = value-num;
        if(num === numToFind && this.dict[num] > 1) {
            return true;
        } else if(num !== numToFind && this.dict[numToFind] > 0) {
            return true;
        }
    }
    return false;
};

/**
 * Your TwoSum object will be instantiated and called as such:
 * var obj = new TwoSum()
 * obj.add(number)
 * var param_2 = obj.find(value)
 */
