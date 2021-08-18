/*
Count Leaves in Binary Tree
https://practice.geeksforgeeks.org/problems/count-leaves-in-binary-tree/1
Input:
Given Tree is 
               4
             /   \
            8     10
           /     /   \
          7     5     1
         /
        3 
Output:
3
Explanation: 
Three leaves are 3 , 5 and 1.
*/

class Solution {
    constructor() {
        this.count = 0
    }
  	countLeaves(root){
  		//code here
  		if (!root) return this.count;
  		if (!root.left && !root.right) this.count++;
  		this.countLeaves(root.left);
  		this.countLeaves(root.right);
  		return this.count;
  	}
}
