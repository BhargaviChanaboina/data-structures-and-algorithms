//{ Driver Code Starts
'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => { inputString += inputStdin; });

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(string => string.trim());
    main();
});

function readLine() { return inputString[currentLine++]; }

function main() {
    let t = parseInt(readLine());
    for (let i = 0; i < t; i++) {
        let arr = readLine().trim().split(' ').map(Number);
        let k = parseInt(readLine().trim());
        let obj = new Solution();
        let res = obj.maxOfSubarrays(arr, k);

        // Print the result as space-separated values
        console.log(res.join(' '));
        console.log("~");
    }
}

// } Driver Code Ends


class Solution {
    maxOfSubarrays(arr, k) {
        // code here'let max = -1;
        const ans = []
        let max = -1;
        for (let i = 0; i < k; i++) {
            if (arr[i] > max) {
                max = arr[i];
            }
        }
        ans.push(max);
        for (let i = k, j = 0; i < arr.length; i++, j++) {
            if (arr[i] >= max) {
                max = arr[i];
                ans.push(max);
            } else if (max != arr[j]) {
                ans.push(max);
            } else {
                let newMax = -1;
                for (let start = j+1; start < i; start++) {
                   if (arr[start] > newMax) {
                        newMax = arr[start];
                    }
                }
                if (newMax > arr[i]) {
                    ans.push(newMax);
                    max = newMax;
                } else {
                    ans.push(arr[i]);
                    max = arr[i];
                }
            }
        }
        return ans;
    }
}
