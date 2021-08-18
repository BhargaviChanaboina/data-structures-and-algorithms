/*
Detect cycle in an undirected graph 

https://practice.geeksforgeeks.org/problems/detect-cycle-in-an-undirected-graph/1/

Given an undirected graph with V vertices and E edges, check whether it contains any cycle or not. 
*/

let bool = false;
const traverse = (index, adj, visited, from) => {
    if (visited[index]) {
        bool = true;
        return;
    }
    visited[index] = true;
    while (adj[index].length) {
        let t = adj[index].shift();
        // if you are travelling from one vertex and the target vertex will also have a connection to the parent but it is not a loop
        if (from != t) traverse(t, adj, visited, index);
    }
}
class Solution 
{
    //Function to detect cycle in an undirected graph.
    isCycle(V, adj)
    {
        // code here
        let visited = [];
        for (let i = 0 ; i < V; i++) {
            if (!visited[i]) traverse(i, adj, visited, -1);
            if (bool) break;
        }
        let b = bool;
        bool = false;
        return b;
    }
}
