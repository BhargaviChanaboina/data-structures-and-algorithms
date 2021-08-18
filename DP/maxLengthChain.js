/*
https://practice.geeksforgeeks.org/problems/max-length-chain/1


You are given N pairs of numbers. In every pair, the first number is always smaller than the second number. 
A pair (c, d) can follow another pair (a, b) if b < c. Chain of pairs can be formed in this fashion. 
You have to find the longest chain which can be formed from the given set of pairs. 

Input:
N = 5
P[] = {5  24 , 39 60 , 15 28 , 27 40 , 50 90}
Output: 3
Explanation: The given pairs are { {5, 24}, {39, 60},
{15, 28}, {27, 40}, {50, 90} },the longest chain that
can be formed is of length 3, and the chain is
{{5, 24}, {27, 40}, {50, 90}}

Expected Time Complexity: O(N*N)
Expected Auxiliary Space: O(N)
*/


class Solution {
    maxChainLen(arr,n){
        if ( n=== 0) return 0;
        //code here
        arr = arr.sort((a, b) => a[0] - b[0]);
        const res = new Array(n).fill(1);
        let max = 1;
        if (arr.length === 1) return 1;
        for (let j = 1; j < n; j++) {
            for (let i = 0; i < j; i++) {
                if (arr[i][1] < arr[j][0]) {
                    res[j] = Math.max(res[i]+1, res[j]);
                    if (res[j] > max) max = res[j];
                }
            }
        }
        return max;
    }
}
