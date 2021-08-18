/*
Minimum Swaps to Sort 

https://practice.geeksforgeeks.org/problems/minimum-swaps/1

Given an array of n distinct elements. Find the minimum number of swaps required to sort the array in strictly increasing order.
*/

class Solution
{
    //Function to find the minimum number of swaps required to sort the array.
	minSwaps(nums)
	{
		// code here
		const arr = [];
		for (let i = 0 ; i < nums.length; i++) {
		    arr.push([nums[i], i]);
		}
		
		const old = [...arr];
		arr.sort((a, b) => a[0] - b[0]);
        let count = 0;
        for (let i = 0; i < arr.length; i++) {
            if (i != arr[i][1]) {
              const curindex = arr[i][1];
              const curVal = [...arr[i]];
              const valueAtCurIndex = [...arr[curindex]];
              arr[i] = valueAtCurIndex;
              arr[curindex] = curVal;
              count++;
              i--;
            }
        }
        return count;
	}
	
}
