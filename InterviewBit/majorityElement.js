/* 
Easy
---
Given an array of size n, find the majority element. The majority element is the element that appears more than floor(n/2) times.
You may assume that the array is non-empty and the majority element always exist in the array.

Example :

Input : [2, 1, 2]
Return  : 2 which occurs 2 times which is greater than 3/2
*/


var majorityElement = function(A) {
    if(A.length <= 2) {
        return A[0].toString();
    }

    var majElem = A.length / 2;
    Math.floor(majElem);

    var elementCounter = new Map();

    for(const value of A) {
        if(!elementCounter.has(value)) {
            elementCounter.set(value, 1);
        }
        else {
            var getCount = elementCounter.get(value);
            getCount++;
            elementCounter.set(value, getCount);
        }
    }

    for(const kvPair of elementCounter.entries()) {
        if(kvPair[1] > majElem) {
            return kvPair[0].toString();
        }
    }
}

if(require.main == module) {
    let A = [4];
    console.log(majorityElement(A)); // 4

    A = [3, 3];
    console.log(majorityElement(A)); // 3

    A = [2, 1, 2];
    console.log(majorityElement(A)); // 2

    A = [1, 1, 2];
    console.log(majorityElement(A)); // 1

    A = [5, 2, 5, 2, 5];
    console.log(majorityElement(A)); // 5
    // majorElem = floor(5/2) = 2
    // 5 appears 3 times > majorElem
}

/*
Passed with success:
https://www.interviewbit.com/problems/majority-element/

Understand:
- notes

Match:
- notes

Plan:
- my pseudocode

Review:
Time complexity: O(n)
Space complexity: O()
*/