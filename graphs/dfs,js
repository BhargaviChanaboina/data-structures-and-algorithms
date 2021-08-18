/*
DFS of Graph

https://practice.geeksforgeeks.org/problems/depth-first-traversal-for-a-graph/1

Given a connected undirected graph. Perform a Depth First Traversal of the graph.
Note: Use recursive approach to find the DFS traversal of the graph starting from the 0th vertex from left to right according to the graph..

*/

const traverse = (adj, index, vis, res) => {
  if (vis[index]) return;
  res.push(index);
  vis[index] = true
  while (adj[index].length) {
      let t = adj[index].shift();
      if (!vis[t]) traverse(adj, t, vis, res);
  }
}
class Solution 
{
    //Function to return a list containing the DFS traversal of the graph.
    dfsOfGraph(V, adj) {
        const vis = [];
        for (let i = 0; i < V; i++) {
            vis[i] = false;
        }
        const res = [];
        for (let j = 0 ; j < V; j++) {
            traverse(adj, j, vis, res);
            // console.log(res);
        }
        return res;
    }
    
}
