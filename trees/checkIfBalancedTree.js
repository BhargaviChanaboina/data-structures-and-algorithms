/*
Check for Balanced Tree
https://practice.geeksforgeeks.org/problems/check-for-balanced-tree/1
Given a binary tree, find if it is height balanced or not. 
A tree is height balanced if difference between heights of left and right subtrees is not more than one for all nodes of tree. 
Input:
       10
     /   \
    20   30 
  /   \
 40   60
Output: 1
Explanation: The max difference in height
of left subtree and right subtree is 1.
Hence balanced. 
*/

let bool = true;
const check = (node) => {
    if (!node) return 0;
    const leftheight = node.left ? check(node.left) : 0;
    const rightheight = node.right ? check(node.right) : 0;
    // console.log(node.data, leftheight, rightheight, 'llllllll');
    if (leftheight - rightheight >= 2 || rightheight - leftheight >=2) {
        bool = false;
        return;
    }
    return Math.max(leftheight, rightheight) + 1;
}
class Solution {
    
    //Function to check whether a binary tree is balanced or not.
    isBalanced(root)
    {
        if (!root) return;
        check(root);
        let res = bool;
        bool = true;
        return res;
    }
}
