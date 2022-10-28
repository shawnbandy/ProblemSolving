/*
Move the first letter of each word to the end of it, then add "ay" to the end of the word. 
Leave punctuation marks untouched.
*/

// // TODO

//?https://www.codewars.com/kata/520b9d2ad5c005041100000f/train/javascript

function pigIt(str) {
  //Code here
  let answer = '';
  let strArr = str.split(' ');
  let specialLetter = '';
  const nonChars = ['.', '!', '?'];

  for (let i = 0; i < strArr.length; i++) {
    let tempArr = strArr[i].split('');
    specialLetter = tempArr[tempArr.length - 1];

    if (nonChars.includes(specialLetter)) {
      tempArr.pop();
    }

    tempArr.push(tempArr[0]);
    tempArr.shift();
    answer += tempArr.join('');

    if (!nonChars.includes(specialLetter)) {
      answer += 'ay ';
    }

    if (nonChars.includes(specialLetter)) {
      answer += specialLetter;
    }
  }
  return answer.trim();
}

console.log(pigIt('Pig latin is cool')); // igPay atinlay siay oolcay
console.log(pigIt('Hello world !')); // elloHay orldway !
console.log(pigIt('Testing?')); // estingTay?

// // TODO: separate string into array, Hello World => Hello, World
// // TODO: separate array words into char arrays, Hello => H, e, l, l, o
// // TODO: copy first letter, push into array, H, e, l, l, o => H, e, l, l, o, H
// // TODO: delete first letter of array, H, e, l, l, o, H => e, l, l, o, H
// // TODO: add 'ay', e, l, l, o, H, a, y,
// // TODO: join it and put it back into a string
