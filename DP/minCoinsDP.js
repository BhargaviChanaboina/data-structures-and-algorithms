// link: https://practice.geeksforgeeks.org/problems/number-of-coins1824/1
// greedy based approach does not work here. It works only when coins are given in an order such that the sum of no (2 or many) coins
// that are to the left of a current coin is greater than the current coin


class Solution {
    
    minCoins(coins, V, M)
    {
        //your code here
        const dp = [];
        for (let c = 0; c < coins.length; c++) {
            for (let n = 0; n <= M; n++) {
                if (n === 0) dp[n] = 0;
                else if (n >= coins[c]) {
                    if (dp[n-coins[c]] !== undefined && dp[n] !== undefined) dp[n] = Math.min(dp[n], 1+dp[n-coins[c]]);
                    else if (dp[n-coins[c]] !== undefined) {
                        dp[n] = 1+dp[n-coins[c]];
                    }
                   
                }
            }
        }
        if (dp[M] != undefined) return dp[M];
        else return -1;

    }
}