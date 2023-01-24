// Given an array of distinct integers. The task is to count all the triplets such that sum of two elements equals the third element.
// https://practice.geeksforgeeks.org/problems/count-the-triplets4615/1
//{ Driver Code Starts
//Initial Template for javascript

'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(string => {
        return string.trim();
    });
    
    main();    
});

function readLine() {
    return inputString[currentLine++];
}

function main() {
    let t = parseInt(readLine());
    let i = 0;
    for(;i<t;i++)
    {
        let n = parseInt(readLine()); 
        let arr = readLine().trim().split(" ").map((x) => parseInt(x)); 
        let obj = new Solution();
        let res = obj.countTriplet(arr,n);
        console.log(res);
    }
}

// } Driver Code Ends


//User function Template for javascript

/**
 * @param {number[]} arr
 * @param {number} n
 * @return {number}
*/

class Solution {
    
    countTriplet(arr,n){
       //code here
       arr = arr.sort((a,b) => b-a);
          let count = 0;
        //   console.log(arr);
       for (let i = 0; i < n-2; i++) {
           let a = i+1;
           let b = n-1;
        
           while (a < b) {
               if (arr[a] + arr[b] === arr[i]) {
                   count++;
                   a++;
                   b--;
                //   break;
               } else if (arr[a] + arr[b] > arr[i]) {
                   a++;
               } else {
                   b--;
               }
           }
       }
       return count;
    }
}
