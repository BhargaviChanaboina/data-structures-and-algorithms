/*
Bottom View of Binary Tree
https://practice.geeksforgeeks.org/problems/bottom-view-of-binary-tree/1
Given a binary tree, print the bottom view from left to right.
A node is included in bottom view if it can be seen when we look at the tree from bottom.

                      20
                    /    \
                  8       22
                /   \        \
              5      3       25
                    /   \      
                  10    14

For the above tree, the bottom view is 5 10 3 14 25.
If there are multiple bottom-most nodes for a horizontal distance from root, then print the later one in level traversal. For example, in the below diagram, 3 and 4 are both the bottommost nodes at horizontal distance 0, we need to print 4.

                      20
                    /    \
                  8       22
                /   \     /   \
              5      3 4     25
                     /    \      
                 10       14

For the above tree the output should be 5 10 4 14 25.
*/

const traverse = (root, obj) => {
   if (!root) return;
   let q = [{node: root, index: 0}];
   while (q.length) {
       let t = q.shift();
    //   console.log(t);
      obj[t.index] = t.node.data;
       if (t.node.left) q.push({ node: t.node.left, index: t.index-1 });
       if (t.node.right) q.push({ node: t.node.right, index: t.index+1  });
   }
}
class Solution
{
    //Function to return a list containing the bottom view of the given tree.
    bottomView(root)
    {
        //your code here
        if (!root) return [];
        let res = [];
        const obj = {};
        traverse(root, obj);
        const keys = [];
        Object.keys(obj).sort((a, b) => a- b).forEach(x => res.push(obj[x]));
        // console.log(obj);
        return res;
    }
}
