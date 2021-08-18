/*
Connect Nodes at Same Level 
https://practice.geeksforgeeks.org/problems/connect-nodes-at-same-level/1
Given a binary tree, connect the nodes that are at same level. You'll be given an addition nextRight pointer for the same.

Initially, all the nextRight pointers point to garbage values. Your function should set these pointers to point next right for each node.
       10                       10 ------> NULL
      / \                       /      \
     3   5       =>     3 ------> 5 --------> NULL
    / \     \               /  \           \
   4   1   2          4 --> 1 -----> 2 -------> NULL
 
Example- Input:
      10
    /   \
   20   30
  /  \
 40  60
Output:
10 20 30 40 60
40 20 60 10 30
Explanation:The connected tree is
         10 ----------> NULL
       /     \
     20 ------> 30 -------> NULL
  /    \
 40 ----> 60 ----------> NULL
*/
/*
class Node{
    constructor(data){
        this.data = data;
        this.left = null;
        this.right = null;
        this.nextRight = null;
    }
}
*/

class Solution 
{
    //Function to connect nodes at same level.
    connect(p)
    {
        //your code here
        if (!p) return;
        let nodes = [p];
        while (nodes.length) {
            let tempnodes = [];
            let prev = null;
            nodes.forEach(n => {
                if (prev) prev.nextRight = n;
                prev = n;
                n.nextRight = null;
                if (n.left) tempnodes.push(n.left);
                if (n.right) tempnodes.push(n.right);
            });
            nodes = [...tempnodes];
        }
    }
}
