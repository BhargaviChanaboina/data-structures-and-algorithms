/*
Level order traversal in spiral form
https://practice.geeksforgeeks.org/problems/level-order-traversal-in-spiral-form/1
Complete the function to find spiral order traversal of a tree.
Input:
           10
         /     \
        20     30
      /    \
    40     60
Output: 10 20 30 60 40 
*/

class Solution {
    //Function to return a list containing the level order 
	//traversal in spiral form.	
    findSpiral(root)
    {
        //your code here
        if (!root) return [];
        let nodes = [];
        let res = [];
        nodes.push(root);
        let flag = true;
        while(nodes.length) {
            let tempnodes = [];
            let tempres = [];
            nodes.forEach(n => {
                tempres.push(n.data);
                if (n.left) tempnodes.push(n.left);
                if (n.right) tempnodes.push(n.right);
            });
            if (flag) res = [...res, ...tempres.reverse()];
            else res = [ ...res, ...tempres];
            nodes = [...tempnodes];
            flag = !flag;
        }
        return res;
    }
}
