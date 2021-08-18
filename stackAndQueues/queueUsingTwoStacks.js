/*
Queue using two Stacks

https://practice.geeksforgeeks.org/problems/queue-using-two-stacks/1

Implement a Queue using 2 stacks s1 and s2 .
A Query Q is of 2 Types
(i) 1 x (a query of this type means  pushing 'x' into the queue)
(ii) 2   (a query of this type means to pop element from queue and print the poped element)

Input:
5
1 2 1 3 2 1 4 2

Output: 
2 3

Explanation: 
In the first testcase
1 2 the queue will be {2}
1 3 the queue will be {2 3}
2   poped element will be 2 the queue 
    will be {3}
1 4 the queue will be {3 4}
2   poped element will be 3.
*/

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

class Stack{
    constructor(){
        this.arr = [];
        this.top = -1;
    }
    
    push(a){
        this.arr.push(a);
        this.top++;
    }
    
    pop(){
        this.arr.pop();
        this.top--;
    }
    
    front(){
        return this.arr[this.top];
    }
    
    empty(){
        if(this.top != -1)
            return false;
        else
            return true;
    }
}

function main() {
    let t = parseInt(readLine());
    let i = 0;
    for(;i<t;i++)
    {
        let sq = new StackQueue();
        let q = parseInt(readLine());
        let input_ar1 = readLine().split(' ').map(x=>parseInt(x));
        let index = 0;
        let res = '';
        while(q--){
            let QueryType = input_ar1[index++];
            if(QueryType == 1){
                let a = input_ar1[index++];
                sq.push(a);
            }
            else{
                res += sq.pop() + " ";
            }
        }
        console.log(res);
    }
}// } Driver Code Ends


//User function Template for javascript

class StackQueue{
    constructor(){
        this.s1 = new Stack();
        this.s2 = new Stack();
    }
    
    /**
     * @param {number} B
    */
    
    //Function to push an element in queue by using 2 stacks.
    push(B){
        // code here
        
        this.s1.arr.push(B);
        this.s1.top++;
        // console.log(this.s1.arr, 's', this.s1.top);
    }
    
    /**
     * @returns {number}
    */
    
    //Function to pop an element from queue by using 2 stacks.
    pop(){
        // code here
        let a;
        while (this.s1.top != -1) {
            a = this.s1.arr.pop();
            this.s1.top--;
            this.s2.arr.push(a);
            this.s2.top++;
        }
        if (!this.s2.arr.length) return -1;
        a = this.s2.arr.pop();
        this.s2.top--;
        while(this.s2.top != -1) {
            this.s2.top--;
            this.s1.arr.push(this.s2.arr.pop());
            this.s1.top++;
        }
        // console.log(a);
        return a;
    }
}
