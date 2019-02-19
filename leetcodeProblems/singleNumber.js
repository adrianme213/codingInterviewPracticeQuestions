var singleNumber = function(nums) {
    const myTracker = {};
    nums.forEach(num => {
        myTracker[num] = myTracker[num]+1 || 1;
    });
    for (let prop in myTracker) {
        if (myTracker[prop] <= 1) {
            return Number(prop);
        }
    }
};


// Math Solution
var singleNumber = function(nums) {
    /* Math equation: 
    2*(a+b+c) - sum(a+a+b+b+c) = c
    */
    let uniqueSum = 0;
    const uniqueNums = {};
    nums.forEach(num => {
        if (uniqueNums[num] === undefined) {
            uniqueNums[num] = true;
            uniqueSum += num;
        }
    });
    let sum = nums.reduce((num, tot) => tot += num);

    return 2*uniqueSum - sum
};
