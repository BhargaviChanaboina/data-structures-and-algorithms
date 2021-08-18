/*
0 - 1 Knapsack Problem

https://practice.geeksforgeeks.org/problems/0-1-knapsack-problem0945/1

You are given weights and values of N items, put these items in a knapsack of capacity W to get the maximum total value in the knapsack.
Note that we have only one quantity of each item.
In other words, given two integer arrays val[0..N-1] and wt[0..N-1] which represent values and weights associated with N items respectively.
Also given an integer W which represents knapsack capacity, find out the maximum value subset of val[] such that sum of the weights of this subset is smaller than or equal to W.
You cannot break an item, either pick the complete item or don’t pick it (0-1 property).

Input:
N = 3
W = 4
values[] = {1,2,3}
weight[] = {4,5,1}
Output: 3
*/

class Solution 
{
    //Function to return max value that can be put in knapsack of capacity W.
    knapSack(W, wt, value, n)
    { 
       // code here
       const arr = [];
      for (let val = 0; val < n; val++) {
          arr[val] = [];
          for (let wgt = 0; wgt <= W; wgt++) {
              if (wgt === 0) arr[val][wgt] = 0;
              else if (val === 0) {
                  if (wt[val] <= wgt) {
                      arr[val][wgt] = value[val];
                  } else arr[val][wgt] = 0;
          } else {
              if (wt[val] > wgt) arr[val][wgt] = arr[val-1][wgt];
              else arr[val][wgt] = Math.max(value[val] + arr[val-1][wgt-wt[val]], arr[val-1][wgt]);
          }
      }
    }
    // console.log(arr);
    return arr[n-1][W];
}
}
