/*
BFS of graph

https://practice.geeksforgeeks.org/problems/bfs-traversal-of-graph/1

Given a directed graph. The task is to do Breadth First Traversal of this graph starting from 0.
Note: One can move from node u to node v only if there's an edge from u to v and find the BFS traversal of the graph starting from the 0th vertex,
from left to right according to the graph. Also, you should only take nodes directly or indirectly connected from Node 0 in consideration.
*/

const traverse = (adj, i, vis, res) => {
  if (vis[i]) return;
  let queue = [i];
  while (queue.length) {
      let t = queue.shift();
      if (!vis[t]) {
          vis[t] = true;
          res.push(t);
          for (let k = 0 ; k < adj[t].length; k++) {
              if (!vis[adj[t][k]]) queue.push(adj[t][k]);
          }
      }
  }
}
class Solution
{
    //Function to return Breadth First Traversal of given graph.
    bfsOfGraph(V, adj)
    {
        // code here
        const vis = [];
        for (let i = 0; i < V; i++) {
            vis[i] = false;
        }
        const res = [];
        for (let i = 0 ; i < 1; i++) {
            if (!vis[i]) traverse(adj, i, vis, res);
        }
        // console.log(res);
        return res;
    }
}
