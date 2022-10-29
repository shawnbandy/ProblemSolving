/*
Write a function called sumIntervals/sum_intervals() that accepts an array of intervals, and returns the sum of all the interval lengths. Overlapping intervals should only be counted once.

Intervals
Intervals are represented by a pair of integers in the form of an array. The first value of the interval will always be less than the second value. Interval example: [1, 5] is an interval from 1 to 5. The length of this interval is 4.
*/

//TODO

//?https://www.codewars.com/kata/52b7ed099cdc285c300001cd/train/javascript

function sumIntervals(intervals) {
  //TODO
}

console.log(sumIntervals(i1));
console.log(sumIntervals(i2));
console.log(sumIntervals(i3));
console.log(sumIntervals(i4));

//9
const i1 = [
  [1, 2],
  [6, 10],
  [11, 15],
];

//7
const i2 = [
  [1, 4],
  [7, 10],
  [3, 5],
];

//19
const i3 = [
  [1, 5],
  [10, 20],
  [1, 6],
  [16, 19],
  [5, 11],
];

//100000030
const i4 = [
  [0, 20],
  [-100000000, 10],
  [30, 40],
];
