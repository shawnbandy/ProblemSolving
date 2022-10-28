//*takes an input and groups everything by 2
//*eg, 'abc' should be ['ab', 'c_']
//*eg, 'abcdef' should be ['ab', 'cd', 'ef']
//? https://www.codewars.com/kata/515de9ae9dcfc28eb6000001/train/javascript

function solution(str) {
  let strArr = str.split('');
  let answer = [];
  let placement = '';

  for (let i = 0; i < strArr.length; i++) {
    placement += strArr[i];

    if (placement.length == 2) {
      answer.push(placement);
      placement = '';
    }

    if (i == strArr.length - 1 && placement.length == 1) {
      placement += '_';
      answer.push(placement);
    }
  }
  return answer;
}

console.log(solution('abc'));
console.log(solution('abcdef'));

//TODO: get the strArr length
//TODO: cycle through array, adding pairs to placement (index and index +1)
//TODO: if strArr length is odd, add '_' to the strArr.length - 1 pair
