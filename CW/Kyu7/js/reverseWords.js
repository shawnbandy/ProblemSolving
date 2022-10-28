function reverseWords(str) {
  let strArr = str.split(' ');
  let result = '';
  for (let i = 0; i < strArr.length; i++) {
    result += strArr[i].split('').reverse().join('');
    i == strArr.length - 1 ? result : (result += ' ');
  }

  return result;
}

console.log(reverseWords('double spaces'));
console.log(reverseWords('This is an example!'));
