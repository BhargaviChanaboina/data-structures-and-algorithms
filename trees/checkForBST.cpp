/*
Check for BST
https://practice.geeksforgeeks.org/problems/check-for-bst/1
Given a binary tree. Check whether it is a BST or not.
Note: We are considering that BSTs can not contain duplicate Nodes.

Example 1:

Input:
    2
 /    \
1      3
Output: 1 
Explanation: 
The left subtree of root node contains node 
with key lesser than the root node’s key and 
the right subtree of root node contains node 
with key greater than the root node’s key.
Hence, the tree is a BST.
*/

void check(Node* root, int min, int max, bool *flag) {
    if (!root) return;
    if (root->data < min || root->data > max) {
        *flag = false;
        return;
    }
    check(root->left, min, root->data-1, flag);
    check(root->right, root->data+1, max, flag);
}
class Solution
{
    public:
    //Function to check whether a Binary Tree is BST or not.
    bool isBST(Node* root) 
    {
        // Your code here
        if (!root) return false;
        bool b = true;
        check(root, INT_MIN, INT_MAX, &b);
        return b;
    }
};
