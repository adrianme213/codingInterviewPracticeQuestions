/*
You are given an integer array prices where prices[i] is the price of a given stock on the ith day.

Design an algorithm to find the maximum profit. You may complete at most k transactions.

Notice that you may not engage in multiple transactions simultaneously (i.e., you must sell the stock before you buy again).

Example 1:

Input: k = 2, prices = [2,4,1]
Output: 2
Explanation: Buy on day 1 (price = 2) and sell on day 2 (price = 4), profit = 4-2 = 2.

Example 2:

Input: k = 2, prices = [3,2,6,5,0,3]
Output: 7
Explanation: Buy on day 2 (price = 2) and sell on day 3 (price = 6), profit = 6-2 = 4. Then buy on day 5 (price = 0) and sell on day 6 (price = 3), profit = 3-0 = 3.



Constraints:

    0 <= k <= 109
    0 <= prices.length <= 104
    0 <= prices[i] <= 1000

ASSISTED SOLUTION THROUGH USER

*/
/**
 * @param {number} k
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(numOfSells, prices) {

  if(numOfSells > (prices.length / 2) ){
       let profit = 0;
       for(let i = 1; i < prices.length; i++){
           if(prices[i] > prices[i - 1]) profit += prices[i] - prices[i - 1];
       }
       return profit;
   }

   let dpSell = new Array(prices.length).fill(0);
   let dpBuy = new Array(prices.length).fill(0);

   for(let ii = 0; ii < numOfSells; ii++) {
     [dpSell, dpBuy] = [dpBuy, dpSell];
     for(let jj = 1; jj < prices.length; jj++) {
       let maxProfitAtIndex = 0;
       for(let kk = 0; kk < jj; kk++) {
         const profit = prices[jj] - prices[kk];
         const remainder = (kk > 0) ? dpSell[kk-1] : 0;
         maxProfitAtIndex = Math.max(maxProfitAtIndex, profit + remainder);
       }

       const maxProfitBeforeIndex = jj > 0 ? dpBuy[jj-1] : 0;
       dpBuy[jj] = Math.max(maxProfitAtIndex, maxProfitBeforeIndex);
     }
   }

   return dpBuy[prices.length-1];
};


/*
LEETCODE SOLUTION
var maxProfit = function(k, prices) {
    if(!prices || prices.length <= 0 || k <=0){
        return 0;
    }
    if(2 * k > prices.length){
        let dpik0 = 0, dpik1 = -Infinity;
        for(let price of prices){
            let dpik0Old = dpik0;
            dpik0 = Math.max(dpik0, dpik1 + price);
            dpik1 = Math.max(dpik1, dpik0Old - price);
        }
        return dpik0;
    }
//     let dp = Array(prices.length).fill().map(() => Array(k+1).fill().map(() => Array(2).fill(0)));
//     for(let i = 0; i < prices.length; i++){
//         for(let j = 0; j <= k; j++){
//                 dp[i][j][0] = -Infinity
//                 dp[i][j][1] = -Infinity
//         }

//     }
//     dp[0][0][0] = 0;
//     dp[0][1][1] = -prices[0];
//     for(let i = 1; i < prices.length; i++){
//         for(let j = 0; j <=k; j++){
//             dp[i][j][0] = Math.max(dp[i-1][j][0], dp[i-1][j][1] + prices[i]);
//             if(j > 0){
//                 dp[i][j][1] = Math.max(dp[i-1][j][1], dp[i-1][j-1][0] - prices[i]);
//             }
//         }
//     }
//     let res = 0;
//     for(let j = 0; j <= k; j++){
//         res = Math.max(res, dp[prices.length-1][j][0]);
//     }
//     return res;
    let dpik0 = Array(k+1).fill(0);
    let dpik1 = Array(k+1).fill(-Infinity);
    for(let price of prices){
        for(let j = k; j > 0; j--){
            dpik0[j] = Math.max(dpik0[j], dpik1[j] + price);
            dpik1[j] = Math.max(dpik1[j], dpik0[j-1] - price);
        }
    }
    return dpik0[k];
};
*/
