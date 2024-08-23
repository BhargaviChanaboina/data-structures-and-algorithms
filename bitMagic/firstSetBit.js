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
        let input_line = readLine().split(' ').map(x=>parseInt(x));
        let n = input_line[0];
        let obj = new Solution();
        console.log(obj.getFirstSetBit(n));
    }
}
// } Driver Code Ends


//User function Template for javascript

/**
 * @param {Number} n
 * @returns {Number}
*/


class Solution 
{
    //Function to find position of first set bit in the given number.
    getFirstSetBit(n)
    {
        // code here
        if ( n == 0) return 0;
        let pos = 0;
        while (n) {
            pos++;
            if (parseInt(n%2) === 1) {
                break;
            }
            n = parseInt(n/2);
        }
        return pos;
    }
}
