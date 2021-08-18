/*
Height of Binary Tree
https://practice.geeksforgeeks.org/problems/height-of-binary-tree/1
Input:
  2
   \
    1
   /
 3
Output: 3   
*/
void getHeight(struct Node* node, int index, int *max) {
    if (node == NULL) return;
    if (index + 1 > *max) *max = index+1;
    if (node->left != NULL) getHeight(node->left, index+1, max);
    if (node->right != NULL) getHeight(node->right, index+1, max);
    return;
}
class Solution{
    public:
    //Function to find the height of a binary tree.
    int height(struct Node* node){
        // code here 
        int max = 0;
        getHeight(node, 0, &max);
        // cout << max;
        return max;
    }
};
