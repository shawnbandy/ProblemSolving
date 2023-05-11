/*
You are given N ropes, where the length of each rope is a positive integer. At each step, you have to reduce all the ropes by the length of the smallest rope.

The step will be repeated until no ropes are left. Given the length of N ropes, print the number of ropes that are left before each step.

 You have 5 ropes: 3 3 2 9 7   ( 5 left) 
 step 1: 1 1 0 7 5   ( 4 left) 
 step 2: 0 0 0 6 4   ( 2 left) 
 step 3: 0 0 0 0 2   ( 1 left) 
 step 4: 0 0 0 0 0     
 Hence the result is [5, 4, 2, 1]
*/

//?https://www.codewars.com/kata/58ad388555bf4c80e800001e/train/javascript

function cutTheRope(a) {
  const resultArr = [];
  let numberOfRopesLeft = 0;
  let lowestNum = Math.max(...a);

  while (Math.max(...a) != 0) {
    for (let i = 0; i < a.length; i++) {
      if (a[i] != 0) {
        numberOfRopesLeft++;
      }
      if (a[i] != 0) {
        if (a[i] < lowestNum) {
          lowestNum = a[i];
        }
      }
    }
    for (let i = 0; i < a.length; i++) {
      if (a[i] > 0) {
        a[i] -= lowestNum;
      }
    }
    resultArr.push(numberOfRopesLeft);
    lowestNum = Math.max(...a);
    numberOfRopesLeft = 0;
  }
  return resultArr;
}

const test1 = [3, 3, 2, 9, 7];
console.log(cutTheRope(test1));
