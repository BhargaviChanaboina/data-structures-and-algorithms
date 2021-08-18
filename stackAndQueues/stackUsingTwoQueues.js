/*
Stack using two queues

https://practice.geeksforgeeks.org/problems/stack-using-two-queues/1

Input:
push(2)
push(3)
pop()
push(4)
pop()
Output: 3 4
Explanation:
push(2) the stack will be {2}
push(3) the stack will be {2 3}
pop()   poped element will be 3 the 
        stack will be {2}
push(4) the stack will be {2 4}
pop()   poped element will be 4 
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

class Queue{
    constructor(){
        this.arr = [];
        this.front = 0;
    }
    
    push(a){
        this.arr.push(a);
    }
    
    pop(){
        if(this.arr.length != this.front){
            let x = this.arr[this.front];
            this.front++;
            return x;
        }
        else
            return -1;
    }
    
    front_ele(){
        return this.arr[this.front];
    }
    
    empty(){
        if(this.arr.length != this.front)
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
        let qs = new QueueStack();
        let q = parseInt(readLine());
        let input_ar1 = readLine().split(' ').map(x=>parseInt(x));
        let index = 0;
        let res = '';
        while(q--){
            let QueryType = input_ar1[index++];
            if(QueryType == 1){
                let a = input_ar1[index++];
                qs.push(a);
            }
            else{
                res += qs.pop() + " ";
            }
        }
        console.log(res);
        
    }
}// } Driver Code Ends


//User function Template for javascript

/*
class Queue{
    constructor(){
        this.arr = [];
        this.front = 0;
    }
    
    push(a){
        this.arr.push(a);
    }
    
    pop(){
        if(this.arr.length != this.front){
            let x = this.arr[this.front];
            this.front++;
            return x;
        }
        else
            return -1;
    }
    
    front_ele(){
        return this.arr[this.front];
    }
    
    empty(){
        if(this.arr.length != this.front)
            return false;
        else
            return true;
    }
}
*/


class QueueStack{
    constructor(){
        this.q1 = new Queue();  
        this.q2 = new Queue();  
    }
    
    /**
     * @param {number} x
    */
    
    //Function to push an element into stack using two queues.
    push(x){
        // code here
        this.q1.push(x);
    }
    
    /**
     * @returns {number}
    */
    
    //Function to pop an element from stack using two queues. 
    pop(){
        // code here
        if (!this.q1.arr.length) return -1;
        return this.q1.arr.pop();
    }
}
