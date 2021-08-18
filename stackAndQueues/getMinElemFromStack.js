/*
Get minimum element from stack 

https://practice.geeksforgeeks.org/problems/get-minimum-element-from-stack/1

You are given N elements and your task is to Implement a Stack in which you can get minimum element in O(1) time.

Input:
push(2)
push(3)
pop()
getMin()
push(1)
getMin()
Output: 3 2 1
Explanation: In the first test case for
query 
push(2)  the stack will be {2}
push(3)  the stack will be {2 3}
pop()    poped element will be 3 the
         stack will be {2}
getMin() min element will be 2 
push(1)  the stack will be {2 1}
getMin() min element will be 1
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

class MyStack
{
    constructor(){
        this.arr = new Array(1000);
        this.top=-1;
    }
    push(x){
        
    }
    pop(){
        
    }
    getMin(){
        
    }
}

function main() {
    let t = parseInt(readLine());
    for(let i=0;i<t;i++)
    {
        let input_line = readLine().split(' ');
        let Q = parseInt(input_line[0]);
        let s="";
        input_line = readLine().split(' ');
        let st = new MyStack();
        
        let i =0;
        while(Q>0)
        {
            let QueryType = parseInt(input_line[i++]);
            if(QueryType === 1){
                let val = parseInt(input_line[i++]);
                st.push(val);
            }
            else if(QueryType === 2){
                s+=st.pop();
                s+=" ";
            }
            else{
                s+=st.getMin();
                s+=" ";
            }
            Q--;
        }
        
        console.log(s);
    }
}


// } Driver Code Ends


//User function Template for javascript

/*
structure of MyStack
class MyStack
{
    constructor(){
        this.arr = new Array(1000);
        this.top=-1;
    }
    push(x){
    
    }
    pop(){
    
    }
    getMin(){
        
    }
}
*/


/**
 * @param {number} x
*/
/* The method push to push element into the stack */
let minelem;
MyStack.prototype.push = function(x) {
  // code here
   if (this.top < 0) {
       this.top++;
       minelem = x;
       this.arr[this.top] = x;
   } else if (x < minelem) {
       this.top++;
       let d = x+x- minelem;
       minelem = x;
       this.arr[this.top] = d;
   } else {
       this.top++;
       this.arr[this.top] = x;
   }
   
}


/**
 * @returns {number} 
*/
/*The method pop which return the element 
  poped out of the stack*/
MyStack.prototype.pop = function() {
  // code here
  if (this.top < 0) return -1;
  let a = this.arr[this.top];
  this.arr[this.top] = '';
  if (a >= minelem) {
      this.top--;
      if (this.top < 0) minelem = -1;
      return a;
  } else {
      let b = minelem;
      minelem = 2*minelem - a;
      this.top--;
      if (this.top < 0) minelem = -1;
      return b;
  }
}
/**
 * @returns {number} 
*/
/*The method getMin() which return the minimum
element of the stack*/
MyStack.prototype.getMin = function() {
  // code here
  if (minelem == undefined || this.top < 0) return -1;
  return minelem;
}
