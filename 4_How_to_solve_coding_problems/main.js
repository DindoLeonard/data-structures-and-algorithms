// Given 2 arrays, create a function that let's a user know (true/false) whether two arrays contain any common items
// For Example:
// const array1 = ['a', 'b', 'c', 'x'];
// const array2 = ['z', 'y', 'i'];
// should return false
// ----------
const array1 = ['a', 'b', 'c', 'x'];
const array2 = ['z', 'y', 'x'];
// should return true

/*
Write key points
- What are key points?
 - 2 array
 - parameters are 2 arrays
- What is the output?
 - boolean
 - true if it 2 array has pair
 - false if no pair
- Ask the interviewer the most important value of problem
 - Do you have time, and space, and memory? etc?
  - If array is no bigger than 5, you don't have to worry about BigO
done
*/

const compareTwoArrayForPairs = (array1, array2) => {
  for (let i = 0; i < array1.length; i += 1) {
    for (let j = 0; j < array2.length; j += 1) {
      if (array1[i] === array2[j]) {
        return true;
      }
    }
  }
  return false;
};

// O(a * b);
// O(n^2) if array size is the same
// O(1) - Space Complexity, because we're not using any variables
const result = compareTwoArrayForPairs(array1, array2);
console.log(result);

// Tell interviewer this is the brute force
// Might not be efficient
// Tell the interviewer why this solution might not be the best
// Because of quadratic BigO, if size get bigger

// good solution
/*
Convert first array to object that looks like
const obj = {
  a: true,
  b: true,
  c: true,
  x: true,
}

then
just loop through the second array, and check if property/element exist in the object created

array[inde] === obj.properties
*/

// O(a * b)
const containsCommonItem2 = (arr1, arr2) => {
  // loop throught first array and create object where properties === items in the array
  let map = {};
  for (let i = 0; i < arr1.length; i += 1) {
    // O(a)
    if (!map[arr1[i]]) {
      const item = arr1[i];
      map[item] = true;
    }
  }

  console.log(map);
  // loop through second array and check if item is second array exist on created object
  for (let j = 0; j < arr2.length; j += 1) {
    // O(b)
    if (map[arr2[j]]) {
      return true;
    }
  }

  return false;
};

// O(a + b) Time Complexity
// O(a) Space Complexity, because we're assigning many variables
const result2 = containsCommonItem2(array1, array2);
console.log(result2);

const numArray = [5, 5, 4, 4, 5];
const sumValue = 6;

// takes in an array and a number
// if any combinations in the array will result into the second input return true
// if not return false
function hasPairWithSum(arr1, sum) {
  const totalLength = arr1.length;

  for (let i = 0; i < totalLength; i += 1) {
    for (let j = 0; j < totalLength; j += 1) {
      if (arr1[i] + arr1[2] === sum) {
        console.log(arr1[i], arr1[2]);
        return true;
      }
    }
  }

  return false;
}

const hasPairResult = hasPairWithSum(numArray, sumValue);

// // WHAT??
// function hasPairWithSum2(arr, sum) {
//   const mySet = new Set();
//   const len = arr.length;
//   for (let i = 0; i < len; i++) {
//     if (mySet.has(arr[i])) {
//       console.log(mySet, arr[i]);
//       return true;
//     }
//     mySet.add(sum - arr[i]);
//   }
//   return false;
// }

// const hasPairResult2 = hasPairWithSum2([6, 4, 3, 2, 1, 7], 9);
// console.log(hasPairResult2);
