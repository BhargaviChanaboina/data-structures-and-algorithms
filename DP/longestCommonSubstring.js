/*
Longest Common Substring 

https://practice.geeksforgeeks.org/problems/longest-common-substring1452/1

Given two strings. The task is to find the length of the longest common substring.

Input: S1 = "ABCDGH", S2 = "ACDGHR"
Output: 4
Explanation: The longest common substring
is "CDGH" which has length 4.
*/

class Solution {
    longestCommonSubstr(s1,s2,n,m){
        //code here
        const  res = [];
        let max = 0;
        for (let i = 0; i < n; i++) {
            res.push([]);
            for (let j = 0; j < m ; j++) {
                if (s1[i] === s2[j]) res[i][j] = res[i-1] && res[i-1][j-1] && res[i-1][j-1] !== undefined ? res[i-1][j-1]+1 : 1;
                else res[i][j] = 0;
                if (res[i][j] > max) max = res[i][j];
            }
        }
        return max;
    }
}
