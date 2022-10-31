/*
Pete likes to bake some cakes. He has some recipes and ingredients. Unfortunately he is not good in maths. Can you help him to find out, how many cakes he could bake considering his recipes?

Write a function cakes(), which takes the recipe (object) and the available ingredients (also an object) and returns the maximum number of cakes Pete can bake (integer). For simplicity there are no units for the amounts (e.g. 1 lb of flour or 200 g of sugar are simply 1 or 200). Ingredients that are not present in the objects, can be considered as 0.
*/

// // TODO

//?https://www.codewars.com/kata/525c65e51bf619685c000059/train/javascript

function cakes(recipe, available) {
  let recipeList = [];
  let availableList = [];
  let valueArr = [];

  let recipeObj = Object.keys(recipe);
  let availableObj = Object.keys(available);

  for (const ingredient of recipeObj) {
    let found = availableObj.find((ing) => ing === ingredient);
    if (!found) {
      return 0;
    }
  }

  for (const [key, value] of Object.entries(recipe)) {
    recipeList.push([key, value]);
  }
  for (const [key, value] of Object.entries(available)) {
    availableList.push([key, value]);
  }

  for (let i = 0; i < recipeList.length; i++) {
    for (let j = 0; j < availableList.length; j++) {
      if (recipeList[i][0] == availableList[j][0]) {
        let limitingFactor = Math.floor(availableList[j][1] / recipeList[i][1]);
        valueArr.push(limitingFactor);
      }
    }
  }

  return Math.min(...valueArr);
}

const r1 = { flour: 500, sugar: 200, eggs: 1 };
const a1 = { flour: 1200, sugar: 1200, eggs: 5, milk: 200 };
const r2 = { apples: 3, flour: 300, sugar: 150, milk: 100, oil: 100 };
const a2 = { sugar: 500, flour: 2000, milk: 2000 };
const r3 = { cream: 200, flour: 300, sugar: 150, milk: 100, oil: 100 };
const a3 = { sugar: 1700, flour: 20000, milk: 20000, oil: 30000, cream: 5000 };

// must return 2
console.log(cakes(r1, a1));
console.log(cakes(r2, a2));
console.log(cakes(r3, a3)); //11

//TODO get all the objects in an array from the two inputs
//TODO compare the objects by recipe list, so if there isn't a recipe item on the available list, return 0
//TODO get rid of the items not needed in avail?
//TODO if it passes prev test, compare the item amounts by limiting factor
