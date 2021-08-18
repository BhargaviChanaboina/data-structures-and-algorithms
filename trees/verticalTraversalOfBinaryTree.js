/*
Vertical Traversal of Binary Tree
https://practice.geeksforgeeks.org/problems/print-a-binary-tree-in-vertical-order/1
Given a Binary Tree, find the vertical traversal of it starting from the leftmost level to the rightmost level.
If there are multiple nodes passing through a vertical line, then they should be printed as they appear in level order traversal of the tree.

Example 1:

Input:
           1
         /   \
       2       3
     /   \   /   \
   4      5 6      7
              \      \
               8      9           
Output: 
4 2 1 5 6 3 8 7 9 
*/

const traverse = (node, map) => {
    if (!node) return;
    let nodes = [{ node, index: 0 }];
    while(nodes.length) {
        let temp = [];
        nodes.forEach((x) => {
            if (!map[x.index]) map[x.index] = [x.node.data];
            else map[x.index].push(x.node.data);
            if (x.node.left) temp.push( { node: x.node.left, index: x.index - 1 });
            if (x.node.right) temp.push( { node: x.node.right, index: x.index + 1 });
        });
        nodes = [...temp];
    }
}
class Solution 
{
    //Function to find the vertical order traversal of Binary Tree.
    verticalOrder(root)
    {
        //your code here
        if (!root) return [];
        const obj = {};
        traverse(root, obj);
        let res = [];
        // console.log(obj);
        Object.keys(obj).sort((a, b) => a-b).forEach(x => {
            res = [...res, ...obj[x]];
        });
        return res;
        
    }
}
