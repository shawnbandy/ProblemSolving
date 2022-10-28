//*capitalizes every even numbered index of a string

function toWeirdCase(string) {
  //TODO
  let strArr = string.split(' ');
  let answer = '';
  for (let i = 0; i < strArr.length; i++) {
    let currentWord = strArr[i].split('');

    for (let j = 0; j < currentWord.length; j++) {
      if (j % 2 == 0) {
        currentWord[j] = currentWord[j].toUpperCase();
      }
    }

    answer += currentWord.join('');
    i == strArr.length - 1 ? answer : (answer += ' ');
  }
  return answer;
}

console.log(toWeirdCase('String'));
console.log(toWeirdCase('Weird string case'));
