/* Problem: Find the maximum sum increasing subsequence
 link: https://practice.geeksforgeeks.org/problems/maximum-sum-increasing-subsequence4749/1

 Example Input: [1, 101, 2, 3, 100];
 output: 106 
 */
 
/**
 * @param {number[]} arr
 * @param {number} n
 * @return {number}
 */

class Solution {
    maxSumIS(arr,n){
        //code here
          const dp = [...arr];
	   let max= -1;
	    
	    for (let i = 0 ; i < n; i++)
	    {
	        for (let j = 0; j < i; j++) {
	            if (arr[i] > arr[j]) {
	                dp[i] = Math.max(dp[j]+arr[i], dp[i]);
	            }
	        }
	        if (dp[i] > max) max = dp[i];
	    }
	    return max;
    }