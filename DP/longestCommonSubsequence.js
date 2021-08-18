/*
Longest Common Subsequence 

https://practice.geeksforgeeks.org/problems/longest-common-subsequence-1587115620/1

Given two sequences, find the length of longest subsequence present in both of them. Both the strings are of uppercase.

Input:
A = 6, B = 6
str1 = ABCDGH
str2 = AEDFHR
Output: 3
Explanation: LCS for input Sequences
“ABCDGH” and “AEDFHR” is “ADH” of
length 3.

*/
class Solution
{
    //Function to find the length of longest common subsequence in two strings.
    lcs(x, y, s1, s2)
    {
        // code here
     const res = [];
       let max = 0;
        for (let i = 0; i < x; i++) {
            res.push([]);
            for (let j = 0; j < y; j++) {
                if (s1[i] === s2[j]) res[i][j] = res[i-1] && res[i-1][j-1] && res[i-1][j-1] !== undefined ? res[i-1][j-1]+1 : 1;
                else {
                    let val = res[i][j-1]|| 0;
                    let upper =  res[i-1] && res[i-1][j] && res[i-1][j] !== undefined ? res[i-1][j] : 0;
                    res[i][j] = upper > val ? upper : val;
                }
                if (res[i][j] > max) max = res[i][j];
            }
        }
        // console.log(max);
        return max;
    }
}
