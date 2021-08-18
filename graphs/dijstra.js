/*
Implementing Dijkstra Algorithm

https://practice.geeksforgeeks.org/problems/implementing-dijkstra-set-1-adjacency-matrix/1

Given a weighted, undirected and connected graph of V vertices and E edges, Find the shortest distance of all the vertex's from the source vertex S.
Note: The Graph doesn't contain any negative weight cycle.
*/

const traverse = (adj, i, processed, ans, v) => {
    //  if (processed[i]) return;
     let min = Number.MAX_SAFE_INTEGER;
     let ind;
     for (let j = 0 ; j < v; j++) {
         if (min > ans[j] && !processed[j]) {
             min = ans[j];
             ind = j;
         }
     }
     if (ind == undefined) return;
     processed[ind] = true;
     while (adj[ind].length) {
         const t = adj[ind].shift();
         const len = t[1];
         const index = t[0];
         ans[index] = Math.min(ans[index], ans[ind]+len);
     }
     traverse(adj, i, processed,ans, v);
     return;
 }
class Solution
{
    //Function to find the shortest distance of all the vertices
    //from the source vertex S.
    dijkstra(V,Adj,S)
    {
        //code here
        const processed = [];
        const ans = [];
        for (let i = 0 ; i < V; i++) {
            if (i == S) ans[i] = 0;
            else ans[i] = Number.MAX_SAFE_INTEGER;
        }
        // console.log(V, Adj, S);
        traverse(Adj, S, processed, ans, V);
        // console.log(ans);
        return ans;
        
    }
    
}
