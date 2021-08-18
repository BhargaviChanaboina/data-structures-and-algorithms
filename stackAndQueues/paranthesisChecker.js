/*
Parenthesis Checker

https://practice.geeksforgeeks.org/problems/parenthesis-checker2744/1

Given an expression string x. Examine whether the pairs and the orders of “{“,”}”,”(“,”)”,”[“,”]” are correct in exp.
For example, the function should return 'true' for exp = “[()]{}{[()()]()}” and 'false' for exp = “[(])”.

Input:
{([])}
Output: 
true
Explanation: 
{ ( [ ] ) }. Same colored brackets can form 
balaced pairs, with 0 number of 
unbalanced bracket.
*/
class Solution
{
    //Function to check if brackets are balanced or not.
    ispar(x)
    {
        //your code here
        const mapper = {
            '}': '{',
            ']': '[',
            ')': '('
        }
        const arr = [];
        for (let i = 0;i< x.length; i++) {
            const top = arr[arr.length - 1];
            // console.log(top, arr, i, mapper[x[i]]);
            if (top && top === mapper[x[i]]) {
                arr.pop();
            } else arr.push(x[i]);
        }
        // console.log(arr)
        if (arr.length) return false;
        else return true;
    }
}
