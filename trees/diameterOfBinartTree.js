/*
Diameter of Binary Tree 
https://practice.geeksforgeeks.org/problems/diameter-of-binary-tree/1
Given a Binary Tree, find diameter of it.
The diameter of a tree is the number of nodes on the longest path between two end nodes in the tree. 
The diagram below shows two trees each with diameter nine, the leaves that form the ends of a longest path are shaded 
(note that there is more than one path in each tree of length nine, but no path longer than nine nodes).

Input:
         10
        /   \
      20    30
    /   \ 
   40   60
Output: 4

*/
let max = 0;
const traverse = (root) => {
    if (!root) return 0;
    let left;
    let right;
  left = root.left ? traverse(root.left) : 0;
   right = root.right ? traverse(root.right) : 0;
    let tempmax= left+right+1;
    if (tempmax > max) max = tempmax;
    return Math.max(left, right) +1;
}

class Solution {
    // Function to return the diameter of a Binary Tree.
    diameter(root) {
        // your code here
        if (!root) return 0;
        traverse(root);
        let r = max;
        max = 0;
        return r;
        
    }
}
