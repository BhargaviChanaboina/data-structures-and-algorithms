//{ Driver Code Starts
//Initial Template for javascript

"use strict";

process.stdin.resume();
process.stdin.setEncoding("utf-8");

let inputString = "";
let currentLine = 0;

process.stdin.on("data", (inputStdin) => {
  inputString += inputStdin;
});

process.stdin.on("end", (_) => {
  inputString = inputString
    .trim()
    .split("\n")
    .map((string) => {
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
 
  for (; i < t; i++) {
    let S = readLine().trim();    
    let obj = new Solution();
    let res = obj.longestPalin(S);
    console.log(res);
  }

}
// } Driver Code Ends


//User function Template for javascript

/**
 * @param {string} S
 * @return {string} 
*/

class Solution {
  longestPalin(S){
    //code here
    
    let maxleft = 0;
    let maxRight = 0;
    if (S.length == 1) return S[0];
    let res = 0;
    
    for (let i = 0; i < S.length; i++) {
        let left = i;
        let right = i;
        while (left >= 0 && right < S.length && S[left] == S[right]) {
            let maxlen = right-left + 1;
            if (res < maxlen) {
                maxleft = left;
                maxRight = right;
                res = maxlen
            }
            left--;
            right++;
        }
    }

    for (let i = 0; i < S.length; i++) {
        let left = i;
        let right = i+1;
        while (left >= 0 && right < S.length && S[left] == S[right]) {
            let maxlen = right-left + 1;
            if (res < maxlen) {
                maxleft = left;
                maxRight = right;
                res = maxlen;
            }
            left--;
            right++;
        }
    }

    if (maxleft == maxRight) return S[maxleft];
    return S.substr(maxleft, res);
  }
}
