/*
Write an algorithm that takes an array and moves all of the zeros to the end, 
preserving the order of the other elements.
*/

// // TODO
//?https://www.codewars.com/kata/52597aa56021e91c93000cb0/train/javascript

function moveZeros(arr) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
    if (arr[i] === 0) {
      count++;
      arr.splice(i, 1);
      i--;
    }
  }

  for (let i = 0; i < count; i++) {
    arr.push(0);
  }
  return arr;
}

const i1 = [false, 1, 0, 1, 2, 0, 1, 3, 'a'];
const i2 = [
  [],
  0,
  {},
  '2',
  2,
  [],
  [],
  '7',
  1,
  [],
  [],
  [],
  '4',
  1,
  [],
  true,
  [],
  0,
]; // [ [], {}, '2', 2, [], [], '7', 1, [], [], [], '4', 1, [], true, [], 0, 0 ]

const i3 = [9, 0, 9, 1, 2, 1, 1, 3, 1, 9, 0, 0, 9, 0, 0, 0, 0, 0, 0, 0];
//[ 9, 9, 1, 2, 1, 1, 3, 1, 9, 9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ]

//console.log(moveZeros(i1)); // returns[false,1,1,2,1,3,"a",0,0]
//console.log(moveZeros(i2));
console.log(moveZeros(i3));
