// First recurring character
//Google Question
//Given an array = [2,5,1,2,3,5,1,2,4]:
//It should return 2

//Given an array = [2,1,1,2,3,5,1,2,4]:
//It should return 1

//Given an array = [2,3,4,5]:
//It should return undefined

/**
 *
 * @param {number[]} input
 */
function firstRecurringCharacter(input) {
  if (!input || input.length < 2) return;
  const seen = new Object();

  for (let i = 0; i < input.length; i++) {
    if (seen[input[i]]) {
      return seen[input[i]];
    }
    seen[input[i]] = input[i];
  }
}

//Bonus... What if we had this:
// [2,5,5,2,3,5,1,2,4]
// return 5 because the pairs are before 2,2

const result = firstRecurringCharacter([2, 5, 1, 2, 3, 5, 1, 2, 4]);
console.log(result);
