/*
Symmetric Tree 
https://practice.geeksforgeeks.org/problems/symmetric-tree/1
Given a Binary Tree. Check whether it is Symmetric or not, i.e. whether the binary tree is a Mirror image of itself or not.
Input:
         5
       /   \
      1     1
     /       \
    2         2
Output: True
Explanation: Tree is mirror image of
itself i.e. tree is symmetric
*/

let bool= true;
const traverse = (node) => {
    let nodes = [];
    if (!node) return;
    nodes.push(node);
    while (nodes.length) {
        let tempres = [];
        let tempnodes = [];
        nodes.forEach(n => {
            tempres.push(n.key);
            if (n.left) tempnodes.push(n.left);
            if (n.right) tempnodes.push(n.right);
        });
        // console.log(tempres);
        if (tempres.join('') !== tempres.reverse().join('') || tempnodes.length%2 !== 0) {
            bool = false;
            break;
        }
        nodes = [...tempnodes];
    }
}
class Solution {
  	// return true/false denoting whether the tree is Symmetric or not
    isSymmetric(root){
        //code here
        if (!root) return true;
        traverse(root);
        let temp = bool;
        bool = true;
        return temp;
    }
}
