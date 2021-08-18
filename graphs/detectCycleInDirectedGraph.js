/*
Detect cycle in a directed graph 

https://practice.geeksforgeeks.org/problems/detect-cycle-in-a-directed-graph/1

Given a Directed Graph with V vertices (Numbered from 0 to V-1) and E edges, check whether it contains any cycle or not.
*/

const traverse = (index, adj, visited, order) => {
    order[index] = 1;
    visited[index] = 1;
   for (let i = 0 ; i < adj[index].length; i++) {
       if (!visited[adj[index][i]]) {
            if (traverse(adj[index][i], adj, visited, order)) return true;
       }
       else if (order[adj[index][i]]) return true;
   }
   order[index] = 0;
   return false;
}
class Solution
{
    //Function to detect cycle in a directed graph.
    isCyclic(V, adj)
    {
        // code here
        let visited = [];
        let order = [];
        let bool;
        for (let i = 0; i< V; i++) {
           if (!visited[i]) bool = traverse(i, adj, visited, order);
           if (bool) return true;
        }
        return false;
    }
}
