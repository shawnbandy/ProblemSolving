/*
Create a function that takes a positive integer and returns the next bigger number that can be formed by rearranging its digits. For example

  12 ==> 21
 513 ==> 531
2017 ==> 2071

  9 ==> -1
111 ==> -1
531 ==> -1
*/

//?https://www.codewars.com/kata/55983863da40caa2c900004e/train/javascript
//*Bubble sort? separate the number and then move each num to the left if it's larger?

function nextBigger(n) {
  let newArr = Array.from(n.toString()).map(Number);
  let finished = false;
  let result = '';

  while (finished == false) {
    for (let i = 0; i < newArr.length; i++) {
      if (newArr[i] < newArr[i + 1]) {
        let temp1 = newArr[i];
        let temp2 = newArr[i + 1];
        newArr[i] = temp2;
        newArr[i + 1] = temp1;
        i = 0;
      }
      if ((i = newArr.length)) {
        finished = true;
      }
    }
  }

  for (let i = 0; i < newArr.length; i++) {
    result += newArr[i].toString();
  }

  return Number(result);
}

const test = 12;
const test1 = 513;
const test2 = 531;

console.log(nextBigger(test));
console.log(nextBigger(test1));
console.log(nextBigger(test2));
