/*

Sorting Elements of an Array by Frequency

https://practice.geeksforgeeks.org/problems/sorting-elements-of-an-array-by-frequency/0

Given an array A[] of integers, sort the array according to frequency of elements. That is elements that have higher frequency come first. If frequencies of two elements are same, then smaller number comes first.

Input:
The first line of input contains an integer T denoting the number of test cases. The description of T test cases follows. The first line of each test case contains a single integer N denoting the size of array. The second line contains N space-separated integers A1, A2, ..., AN denoting the elements of the array.

Output:
For each testcase, in a new line, print each sorted array in a seperate line. For each array its numbers should be seperated by space.

Constraints:
1 ≤ T ≤ 70
30 ≤ N ≤ 130
1 ≤ Ai ≤ 60 

Example:
Input:
2
5
5 5 4 6 4
5
9 9 9 2 5

Output:
4 4 5 5 6
9 9 9 2 5

Explanation:
Testcase1: The highest frequency here is 2. Both 5 and 4 have that frequency. Now since the frequencies are same then smaller element comes first. So 4 4 comes first then comes 5 5. Finally comes 6.
The output is 4 4 5 5 6.
*/

const sortmethod = (arr) => {
    const map= {};
    for(let i = 0; i< arr.length; i++) {
        if (!map[arr[i]]) map[arr[i]] = 1;
        else map[arr[i]] = map[arr[i]]+1;
    }
    let newmap = {};
    const newarr = Object.keys(map);
    for (let i = 0; i < newarr.length; i++) {
       if (!newmap[map[newarr[i]]]) {
           newmap[map[newarr[i]]] = {
               times: map[newarr[i]],
               count: 1,
               keys: [ newarr[i]]
           }
       } else {
           newmap[map[newarr[i]]].count++;
           newmap[map[newarr[i]]].keys.push(newarr[i]);
       }
    }
    let res = Object.values(newmap).sort((a, b) => b.times - a.times);
    // console.log(res);
    res = res.map(x => {
        let temp = [];
        while(x.times) {
            temp = [...temp, ...x.keys];
            x.times--;
        }
        // x.keys.sort((a, b) => a-b);
        return temp.sort((a,b) => a -b);
        
    });
     let finalres = [];
     for (let y = 0; y < res.length; y++) {
         finalres = [...finalres, ...res[y]];
     }
    //  console.log(finalres);
return finalres;
    
}
