/*
Determine if Two Trees are Identical
https://practice.geeksforgeeks.org/problems/determine-if-two-trees-are-identical/1
Given two binary trees, the task is to find if both of them are identical or not. 
Input:
     1          1
   /   \      /   \
  2     3    2     3
Output: Yes
Explanation: There are two trees both
having 3 nodes and 2 edges, both trees
are identical having the root as 1,
left child of 1 is 2 and right child
of 1 is 3.
*/

let bool = true;
 const traverse = (node1, node2) => {
     if (!node1 && !node2) return;
     if (!node1 
       || !node2
       || node1.data != node2.data
       || (node1.left && !node2.left)
       || (node1.right && !node2.right)
       || (node2.left && !node1.left)
       || ( node2.right && !node1.right)) {
         bool = false;
         return;
     }
     traverse(node1.left, node2.left);
     traverse(node1.right, node2.right);
  }
class Solution {
    //Function to check if two trees are identical.
    isIdentical(root1, root2)
    {
        traverse(root1, root2);
        let temp = bool;
        bool = true;
        return temp;
    }
}
