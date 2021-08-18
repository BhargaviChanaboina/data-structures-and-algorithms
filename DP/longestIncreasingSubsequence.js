/*
Longest Increasing Subsequence 

https://practice.geeksforgeeks.org/problems/longest-increasing-subsequence-1587115620/1

Given an array of integers, find the length of the longest (strictly) increasing subsequence from the given array.

Example 1:

Input:
N = 16
A[]={0,8,4,12,2,10,6,14,1,9,5
     13,3,11,7,15}
Output: 6
Explanation:Longest increasing subsequence
0 2 6 9 13 15, which has length 6

Expected Time Complexity : O( N*log(N) )
Expected Auxiliary Space: O(N)
*/

class Solution 
{
    //Function to find length of longest increasing subsequence.
    longestSubsequence(n, arr)
    {
        // code here
        const res = new Array(n).fill(1);
        if (n === 1) return 1;
        for (let j = 1; j < n; j++) {
            for (let i = 0; i < j; i++) {
                if (arr[i] < arr[j]) {
                    res[j] = Math.max(res[j], res[i]+1);
                }
            }
        }
        let max = 1;
        for (let i = 0; i < n; i++) {
            if (res[i] > max) max = res[i];
        }
        return max;
    }
}
