/*
Sort an array according to the other

https://practice.geeksforgeeks.org/problems/relative-sorting4323/1

Given two integer arrays A1[ ] and A2[ ] of size N and M respectively. Sort the first array A1[ ] such that all the relative positions of the elements in the first array are the same as the elements in the second array A2[ ].
See example for better understanding.
Note: If elements are repeated in the second array, consider their first occurance only.

N = 11 
M = 4
A1[] = {2, 1, 2, 5, 7, 1, 9, 3, 6, 8, 8}
A2[] = {2, 1, 8, 3}
Output: 
2 2 1 1 8 8 3 5 6 7 9
Explanation: Array elements of A1[] are
sorted according to A2[]. So 2 comes first
then 1 comes, then comes 8, then finally 3
comes, now we append remaining elements in
sorted order.
*/

class Solution {
    //Function to sort an array according to the other array.
    sortA1ByA2(A1, N, A2, M){
        // code here
        const map = {};
        for (let i = 0; i < A1.length; i++) {
            if (!map[A1[i]]) map[A1[i]] = 1;
            else map[A1[i]] =  map[A1[i]]+1;
        }
        let i = 0;
        for (let j = 0; j < A2.length; j++) {
            while (map[A2[j]]) {
                A1[i] = A2[j];
                map[A2[j]] = map[A2[j]] - 1;
                i++;
            }
            delete map[A2[j]];
        }
        const newArr = Object.keys(map);
        // console.log(newArr);
        const f = [];
        // console.log(map);
         for (let i = 0; i< newArr.length; i++) {
             while (map[newArr[i]]) {
                 f.push(newArr[i]);
                 map[newArr[i]] = map[newArr[i]]-1;
             };
         }
        f.sort((a, b) => a- b);
        let k = 0;
        while (k < f.length) {
            A1[i] = f[k];
            k++;
            i++;
        }
        return A1;
    }
}
