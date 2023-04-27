/*
You are given an array (which will have a length of at least 3, but could be very large) containing integers. 
The array is either entirely comprised of odd integers or entirely comprised of even integers 
except for a single integer N. 
Write a method that takes the array as an argument and returns this "outlier" N.
*/

// // TODO

//?https://www.codewars.com/kata/5526fc09a1bbd946250002dc/train/javascript

function findOutlier(integers) {
  //your code here
  let oddArr = integers.filter((num) => num % 2 != 0);
  if (oddArr.length == 1) {
    return oddArr[0];
  } else {
    return integers.find((num) => num % 2 == 0);
  }
}

const i1 = [2, 4, 0, 100, 4, 11, 2602, 36]; //1
const i2 = [160, 3, 1719, 19, 11, 13, -21]; //160
const i3 = [0, 1, 2]; //1
const i4 = [1, 2, 3]; //2
const i5 = [2, 6, 8, 10, 3]; //3
const i6 = [0, 0, 3, 0, 0]; //3
const i7 = [1, 1, 0, 1, 1]; //0

console.log(findOutlier(i1));
console.log(findOutlier(i2));
console.log(findOutlier(i3));
console.log(findOutlier(i4));
console.log(findOutlier(i5));
console.log(findOutlier(i6));
console.log(findOutlier(i7));
