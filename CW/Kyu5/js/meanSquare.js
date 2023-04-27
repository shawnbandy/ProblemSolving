/*
accepts two integer arrays of equal length
compares the value each member in one array to the corresponding member in the other
squares the absolute value difference between those two values
and returns the average of those squared absolute value difference between each member pair.
*/

//?https://www.codewars.com/kata/51edd51599a189fe7f000015/train/javascript

var solution = function (firstArray, secondArray) {
  let sum = 0;

  for (let i = 0; i < firstArray.length; i++) {
    let tempNum = Math.abs(secondArray[i] - firstArray[i]);
    sum += tempNum * tempNum;
  }

  return sum / firstArray.length;
};

const test1_1 = [1, 2, 3];
const test1_2 = [4, 5, 6]; //9
const test2_1 = [10, 20, 10, 2];
const test2_2 = [10, 25, 5, -2];

console.log(solution(test1_1, test1_2));
console.log(solution(test2_1, test2_2));
