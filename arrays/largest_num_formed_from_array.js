

// https://www.geeksforgeeks.org/problems/largest-number-formed-from-an-array1117/1



//{ Driver Code Starts
// Initial Template for javascript

"use strict";

process.stdin.resume();
process.stdin.setEncoding("utf-8");

let inputString = "";
let currentLine = 0;

process.stdin.on("data", (inputStdin) => { inputString += inputStdin; });

process.stdin.on("end", (_) => {
    inputString =
        inputString.trim().split("\n").map((string) => { return string.trim(); });

    main();
});

function readLine() { return inputString[currentLine++]; }

function main() {
    let t = parseInt(readLine());
    let i = 0;
    for (; i < t; i++) {
        let n = parseInt(readLine());
        let arr = new Array(n);
        let input_ar1 = readLine().split(" ");
        for (let i = 0; i < n; i++) arr[i] = input_ar1[i];
        let obj = new Solution();
        let res = obj.printLargest(n, arr);
        console.log(res);
    }
}
// } Driver Code Ends


// User function Template for javascript

/**
 * @param {Number} n
 * @param {Number[]} arr
 * @returns {String}
 */

const isSmall = (a, b) => {
    let s1 = a.toString() + b.toString();
    let s2 = b.toString() + a.toString();
    if (s1 > s2) return true;
    else return false;
}
class Solution {
    printLargest(n, arr) {
        // code here
        arr = arr.sort((a,b) => {
            if (isSmall(a,b)) {
                return -1;
                
            }else return 1;
        });
        return arr.join('');
    }
}
