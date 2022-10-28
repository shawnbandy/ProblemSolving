/*
Score a throw of given numbers. Always given five 6-sided die values
 Three 1's => 1000 points
 Three 6's =>  600 points
 Three 5's =>  500 points
 Three 4's =>  400 points
 Three 3's =>  300 points
 Three 2's =>  200 points
 One   1   =>  100 points
 One   5   =>   50 point
 Single die can only be counted once in each roll
*/

//?https://www.codewars.com/kata/5270d0d18625160ada0000e4/train/javascript

function score(dice) {
  // Fill me in!
  const sortedDice = dice.sort();
  let score = 0;
  let tempArr = [];

  for (let i = 0; i < sortedDice.length; i++) {
    if (sortedDice[i] == sortedDice[i + 2]) {
      tempArr.push(sortedDice[i], sortedDice[i + 1], sortedDice[i + 2]);
      score += multiplier(tempArr[0]);
      tempArr = [];
      i = i + 2;
    } else {
      sortedDice[i] == 1
        ? (score += 100)
        : sortedDice[i] == 5
        ? (score += 50)
        : score;
    }
  }
  return score;
}

function multiplier(number) {
  if (number == 1) {
    return 1000;
  } else {
    return number * 100;
  }
}

const i1 = [5, 1, 3, 4, 1];
const i2 = [1, 1, 1, 3, 1];
const i3 = [2, 4, 4, 5, 4];
console.log(score(i1)); //250
console.log(score(i2)); //1100
console.log(score(i3)); //450

//TODO: score variable to return
//TODO: go through each array counting the number of triplets,
//TODO: go through the array and count the number of 1s and 5s
