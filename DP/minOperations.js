/* 
https://practice.geeksforgeeks.org/problems/find-optimum-operation4504/1
Given a number N. Find the minimum number of operations required to reach N starting from 0. You have 2 operations available:
Double the number
Add one to the number
Input:
N = 8
Output: 4
Explanation: 0 + 1 = 1, 1 + 1 = 2,
2 * 2 = 4, 4 * 2 = 8
Expected Time Complexity: O(LogN)
Expected Auxiliary Space: O(1)
*/

class Solution {

    minOperation(n){
        
        //code here
        if (n == 1 || n === 0) return n;
        const last = n%2 === 0 ? this.minOperation(n/2)+1 : this.minOperation(n-1)+1;
        return last;
    }
}
