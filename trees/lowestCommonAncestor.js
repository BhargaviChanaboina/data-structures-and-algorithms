/*
Lowest Common Ancestor in a BST
https://practice.geeksforgeeks.org/problems/lowest-common-ancestor-in-a-bst/1
Given a Binary Search Tree (with all values unique) and two node values. Find the Lowest Common Ancestors of the two nodes in the BST.
Example 1:

Input:
              5
           /    \
         4       6
        /         \
       3           7
                    \
                     8
n1 = 7, n2 = 8
Output: 7
*/

let parentnode;
const traverse = (node, n1, n2) => {
    
    if (!node) return;
    if (node.data > n1 && node.data < n2) return node;
    else if (node.data < n1 && node.data > n2) return node;
    else if (node.data < n1 && node.data < n2) return traverse(node.right, n1, n2);
    else if (node.data > n1 && node.data > n2) return traverse(node.left, n1, n2);
    else if (node.data === n1) return node;
    else if (node.data === n2) return node;
}

class Solution 
{
    //Function to find the lowest common ancestor in a BST.
    LCA(root, n1, n2)
    {
        return traverse(root, n1, n2);
    }
}
