/*
Rotten Oranges 

https://practice.geeksforgeeks.org/problems/rotten-oranges2536/1

Given a grid of dimension nxm where each cell in the grid can have values 0, 1 or 2 which has the following meaning:
0 : Empty cell
1 : Cells have fresh oranges
2 : Cells have rotten oranges

We have to determine what is the minimum time required to rot all oranges. 
A rotten orange at index [i,j] can rot other fresh orange at indexes [i-1,j], [i+1,j], [i,j-1], [i,j+1] (up, down, left and right) in unit time.

Input: grid = {{0,1,2},{0,1,2},{2,1,1}}
Output: 1
Explanation: The grid is-
0 1 2
0 1 2
2 1 1
Oranges at positions (0,2), (1,2), (2,0)
will rot oranges at (0,1), (1,1), (2,2) and 
(2,1) in unit time. 
*/
const issafe = (r, c, n, m) => {
        if (r >= 0 && r < n && c >= 0 && c < m) return true;
    };
class Solution
{
    //Function to find minimum time required to rot all oranges. 
    orangesRotting(grid) 
    {
       // code here
       const t = [[0,1], [0,-1], [1, 0], [-1, 0]];
       let rotten = [];
       let fresh = 0
       for (let i = 0 ; i < grid.length;i++) {
           for (let j = 0 ; j < grid[0].length; j++) {
               if (grid[i][j] == 2) rotten.push([i, j]);
               if (grid[i][j] == 1) fresh++;
       }
       }
       let count = 0;
    //   console.log(rotten, fresh);
       if (!rotten.length && fresh) return -1;
       while (rotten.length && fresh) {
           const temprotten = [];
           count++;
           for (let i = 0; i < rotten.length; i++) {
               for (let t1 = 0 ; t1 < 4; t1++) {
                   let x = rotten[i][0]+t[t1][0];
                   let y = rotten[i][1]+t[t1][1];
                   if (issafe(x, y, grid.length, grid[0].length) && grid[x][y] == 1) {
                    //   console.log(x, y);
                    temprotten.push([x, y]);
                    fresh--;
                    grid[x][y] = 2;
                   }
               }
           }
        //   console.log(temprotten);
           rotten = temprotten;
       }
       if (!fresh) return count;
       else return -1;
    }
}
