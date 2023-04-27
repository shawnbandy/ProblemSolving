/*
Write two functions that convert a roman numeral to and from an integer value. Multiple roman numeral values will be tested for each function.

Modern Roman numerals are written by expressing each digit separately starting with the left most digit and skipping any digit with a value of zero. In Roman numerals 1990 is rendered: 
1000=M, 
900=CM, 
90=XC; resulting in MCMXC. 
2008 is written as 2000=MM, 
8=VIII; or MMVIII. 
1666 uses each Roman symbol in descending order: MDCLXVI.

Input range : 1 <= n < 4000

In this kata 4 should be represented as IV, NOT as IIII (the "watchmaker's four").

Symbol	Value
I	1
IV	4
V	5
X	10
L	50
C	100
D	500
M	1000

https://www.codewars.com/kata/51b66044bce5799a7f000003/train/javascript
*/
const test = [1, 2, 3, 4];
const test1 = [1, 2, 3];
const test2 = [1, 2];

class RomanNumerals {
  static toRoman(num) {
    let answer = '';
    let symbolVal = {};
    let numStrArr = num.toString().split('');
    if (numStrArr.length == 4) {
      for (let i = 0; i < Number(numStrArr[0]); i++) {
        answer += 'M';
      }
    }
    if (numStrArr.length >= 3) {
      let index = numStrArr.length - 3;
      symbolVal = { 4: 'CD', 9: 'CM', 5: 'D' };
      let isSpecial = decideIfSpecial(numStrArr[index]);
      if (isSpecial == -1) {
        for (let i = 0; i < Number(numStrArr[index]); i++) {
          answer += 'C';
        }
      } else {
        answer += symbolVal[isSpecial];
      }
    }
    if (numStrArr.length >= 2) {
      let index = numStrArr.length - 2;
      symbolVal = { 4: 'XD', 9: 'XC', 5: 'L' };
      let isSpecial = decideIfSpecial(numStrArr[index]);
      if (isSpecial == -1) {
        for (let i = 0; i < Number(numStrArr[index]); i++) {
          answer += 'X';
        }
      } else {
        answer += symbolVal[isSpecial];
      }
    }
    if (numStrArr.length >= 1) {
      let index = numStrArr.length - 1;
      symbolVal = { 4: 'IV', 9: 'IX', 5: 'V' };
      let isSpecial = decideIfSpecial(numStrArr[index]);
      if (isSpecial == -1) {
        for (let i = 0; i < Number(numStrArr[index]); i++) {
          answer += 'I';
        }
      } else {
        answer += symbolVal[isSpecial];
      }
    }
    return answer;
  }

  static fromRoman(str) {
    return 4;
  }
}

function decideIfSpecial(str) {
  switch (Number(str)) {
    case 4:
      return 4;
      break;
    case 9:
      return 9;
      break;
    case 5:
      return 5;
      break;
    default:
      return -1;
      break;
  }
}
