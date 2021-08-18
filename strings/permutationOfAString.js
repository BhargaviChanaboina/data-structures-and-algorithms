/*
Permutations of a given string

https://practice.geeksforgeeks.org/problems/permutations-of-a-given-string2041/1

Given a string S. The task is to print all permutations of a given string.
Input: ABC
Output:
ABC ACB BAC BCA CAB CBA
Explanation:
Given string ABC has permutations in 6 
forms as ABC, ACB, BAC, BCA, CAB and CBA .
*/

let output = [];
const permute = (str, ans, n) => {
  for (let i = 0; i < str.length; i++) {
    let newstr = str.substr(0, i);
    newstr += str.substr(i + 1, str.length - 1);
    const newans = [...ans, str[i]];
    if (newans.length === n) output.push(newans.join(''));
    else permute(newstr, newans, n);
  }
};
class Solution {
    
    find_permutation(S) {
        
         //code here
         const s = S.split('').sort().join('');
         output = [];
         permute(s, [], s.length);
         return output;
    }
}
