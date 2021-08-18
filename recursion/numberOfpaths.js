/*

Number of paths

https://practice.geeksforgeeks.org/problems/number-of-paths0926/1

The problem is to count all the possible paths from top left to bottom right of a MxN matrix with the constraints that from each cell you can either move to right or down.

Input:
M = 3 and N = 3
Output: 6
Explanation:
Let the given input 3*3 matrix is filled 
as such:
A B C
D E F
G H I
The possible paths which exists to reach 
'I' from 'A' following above conditions 
are as follows:ABCFI, ABEHI, ADGHI, ADEFI, 
ADEHI, ABEFI
*/

 let count = 0;
 const recurse = (i, j, m, n) => {
      if (i > m || j > n) return;
    //   console.log(i, j);
     if (i === m && j === n) count++;
     recurse(i, j+1, m, n);
     recurse(i+1, j, m, n);
 }
class Solution {
    numberOfPaths(m,n){
        //code here
        recurse(1, 1, m, n);
        let res = count;
        count = 0;
        return res;
    }
}
