/*
Write a function named first_non_repeating_letter that takes a string input, and returns the first character that is not repeated anywhere in the string.

For example, if given the input 'stress', the function should return 't', since the letter t only occurs once in the string, and occurs first in the string.

As an added challenge, upper- and lowercase letters are considered the same character, but the function should return the correct case for the initial letter. For example, the input 'sTreSS' should return 'T'.

If a string contains all repeating characters, it should return an empty string ("") or None -- see sample tests.
*/

// // TODO

//?https://www.codewars.com/kata/52bc74d4ac05d0945d00054e/train/javascript

function firstNonRepeatingLetter(s) {
  // Add your code here
  let str = s.toLowerCase();
  for (let i = 0; i < str.length; i++) {
    if (str.indexOf(str[i]) === str.lastIndexOf(str[i])) {
      return s[i];
    }
  }
  return '';
}

const i1 = 'a';
const i2 = 'stress';
const i3 = 'moonmen';
const i4 = 'sTreSS';
const i5 = 'abc';
const i6 = 'twit';
const i7 = 'tttttt';

console.log('1', firstNonRepeatingLetter(i1)); //a
console.log('2', firstNonRepeatingLetter(i2)); //t
console.log('3', firstNonRepeatingLetter(i3)); //e
console.log('4', firstNonRepeatingLetter(i4)); //T
console.log('5', firstNonRepeatingLetter(i5)); //a
console.log('6', firstNonRepeatingLetter(i6)); //w
console.log('7', firstNonRepeatingLetter(i7)); //''
