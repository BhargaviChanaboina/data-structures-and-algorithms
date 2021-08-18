/*
Special Keyboard 

https://practice.geeksforgeeks.org/problems/special-keyboard3018/1

Imagine you have a special keyboard with the following keys: 

Key 1:  Prints 'A' on screen
Key 2: (Ctrl-A): Select screen
Key 3: (Ctrl-C): Copy selection to buffer
Key 4: (Ctrl-V): Print buffer on screen appending it after what has already been printed.

Find maximum numbers of A's that can be produced by pressing keys on the special keyboard N times. 

Example 1:

Input: N = 3
Output: 3
Explaination: Press key 1 three times.
*/
const arr = [];
class Solution {
    
    optimalKeys(N)
    {
        //your code here
        if (arr[N]) return arr[N];
        if (N < 7) {
            arr[N] = N;
            return N;
        }
        // 2 for 
        let max = 'x';
        let repeater = 2;
        for (let i = N-3; i >= 0; i--) {
            if (!arr[i]) arr[i] = this.optimalKeys(i);
            let temp = arr[i] * repeater;
            repeater++;
            if (max == 'x') max = temp;
            else if (max < temp) max = temp;
        }
      return max;
    }

}
