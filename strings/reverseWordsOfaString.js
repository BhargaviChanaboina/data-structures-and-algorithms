/*
Reverse words in a given string

https://practice.geeksforgeeks.org/problems/reverse-words-in-a-given-string5459/1

Given a String S, reverse the string without reversing its individual words. Words are separated by dots.

Input:
S = i.like.this.program.very.much
Output: much.very.program.this.like.i
Explanation: After reversing the whole
string(not individual words), the input
string becomes
much.very.program.this.like.i
*/
class Solution 
{
    //Function to reverse words in a given string.
    reverseWords(s)
    {
        return s.split('.').reverse().join('.');
    }
}
