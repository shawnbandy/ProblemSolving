/*
The drawing shows 6 squares the sides of which have a length of 1, 1, 2, 3, 5, 8. 
It's easy to see that the sum of the perimeters of these squares is : 
4 * (1 + 1 + 2 + 3 + 5 + 8) = 4 * 20 = 80 

Could you give the sum of the perimeters of all the squares in a rectangle when there are n + 1 
squares disposed in the same manner as in the drawing:
*/

// // TODO

//? https://www.codewars.com/kata/559a28007caad2ac4e000083/train/javascript

function perimeter(n) {
  if (n == 0) {
    return 4;
  }

  let numArr = [1, 1];
  let total = 2;

  for (let i = 1; i < n; i++) {
    numArr.push(numArr[i] + numArr[i - 1]);
    total += numArr[i + 1];
  }

  return total * 4;
}

console.log(perimeter(5));
console.log(perimeter(7));
console.log(perimeter(0));
console.log(perimeter(1));
