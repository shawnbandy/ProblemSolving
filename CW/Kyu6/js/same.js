/*
Given two arrays a and b write a function comp(a, b) (orcompSame(a, b)) 
that checks whether the two arrays have the "same" elements, 
with the same multiplicities (the multiplicity of a member is the number of times it appears). 
"Same" means, here, that the elements in b are the elements in a squared, regardless of the order.
*/

// // TODO

//?https://www.codewars.com/kata/550498447451fbbd7600041c/train/javascript

function comp(array1, array2) {
  //your code here
  if (!array1 || !array2) {
    return false;
  }
  array1.sort(function (a, b) {
    return a - b;
  });
  array2.sort(function (a, b) {
    return a - b;
  });

  for (let i = 0; i < array1.length; i++) {
    console.log('arr2sq', Math.sqrt(array2[i]));
    if (Math.sqrt(array2[i]) != array1[i]) {
      return false;
    }
  }
  return true;
}

const a = [121, 144, 19, 161, 19, 144, 19, 11];
const b = [121, 14641, 20736, 361, 25921, 361, 20736, 361]; //true

const c = [121, 144, 19, 161, 19, 144, 19, 11];
const d = [132, 14641, 20736, 361, 25921, 361, 20736, 361]; //false

const e = [2, 5, 2, 0, 10, 6, 2, 10, 5, 8, 4, 9, 3, 3, 6, 9, 8, 3, 0, 9, 8];
const f = [
  25, 100, 9, 36, 9, 4, 9, 4, 81, 0, 36, 64, 0, 100, 64, 81, 4, 81, 25, 64, 16,
];

//console.log(comp(a, b));
//console.log(comp(c, d));
console.log(comp(e, f));
