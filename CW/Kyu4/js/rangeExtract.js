/*
A format for expressing an ordered list of integers is to use a comma separated list of either individual integers or a range of integers denoted by the starting integer separated from the end integer in the range by a dash, '-'. The range includes all integers in the interval including both endpoints. It is not considered a range unless it spans at least 3 numbers. For example "12,13,15-17"
Complete the solution so that it takes a list of integers in increasing order and returns a correctly formatted string in the range format.
*/

//TODO

//?https://www.codewars.com/kata/51ba717bb08c1cd60f00002f/train/javascript

function solution(list) {
  return string;
}

function makeGrouping(arr) {
  let tempArr = [];
  let answerArr = [];

  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i + 1] - arr[i] == 1 || arr[i + 1] - arr[i] == -1) {
      tempArr.push(arr[i + 1]);
    } else {
      tempArr = [];
    }
  }

  tempArr.sort((a, b) => a - b);

  return tempArr.length >= 3 ? tempArr : null;
}

const i2 = [-3, -2, -1, 0, 1]; //'-3-1'
const i3 = [-3, -2, 0, 1, 2]; //0, 1, 2

const i1 = [
  -10, -9, -8, -6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18,
  19, 20,
];
//console.log(solution(i1)); //'-10--8,-6,-3-1,3-5,7-11,14,15,17-20'
console.log(makeGrouping(i3));
console.log(makeGrouping(i2));
