/*
Binary Tree to DLL
https://practice.geeksforgeeks.org/problems/binary-tree-to-dll/1
Given a Binary Tree (BT), convert it to a Doubly Linked List(DLL) In-Place. 
The left and right pointers in nodes are to be used as previous and next pointers respectively in converted DLL.
The order of nodes in DLL must be same as Inorder of the given Binary Tree. The first node of Inorder traversal (leftmost node in BT) must be the head node of the DLL.

Input:
       10
      /   \
     20   30
   /   \
  40   60
Output:
40 20 60 10 30 
30 10 60 20 40
Explanation:  DLL would be 
40<=>20<=>60<=>10<=>30.
*/

const traverse = (node, obj) => {
    if (!node) return;
    if (node.left) traverse(node.left, obj);
    if (obj.prev) {
        obj.prev.right = node;
        node.left = obj.prev;
        obj.prev = node;
    }
    if (!obj.prev) {
        obj.start = node;
        obj.prev = node;
    }
    if (node.right) traverse(node.right, obj);
}
class Solution {
    //Function to convert a binary tree to doubly linked list and return it.
    bToDLL(root)
    {
      if (!root) return;
      let obj = { };
      traverse(root, obj);
      return obj.start;
    }
}
