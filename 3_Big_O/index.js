const nemo = ['nemo'];
const everyone = [
  'sadasd',
  'asdasdas',
  'asdasdas',
  'asdasdas',
  'asdasdas',
  'asdasdas',
  'asdasdas',
  'asdasdas',
  'asdasdas',
  'asdasdas',
  'asdasdas',
  'asdasdas',
  'asdasdas',
];

const large = new Array(100000).fill('nemo');

/**
 * O(n)
 * --> Linear Time
 * - 1 operation per element in an array
 */
function findNemo(array) {
  let t0 = performance.now();
  for (let i = 0; i < array.length; i += 1) {
    if (array[i] === 'nemo') {
      console.log('found NEMO!');
    }
  }

  let t1 = performance.now();
  console.log('call to find nemo took ' + (t1 - t0) + ' milliseconds');
}
findNemo(large);

const boxes = [0, 1, 2, 3, 4, 5];
const OOne = (array) => {
  console.log(array[0]);
};
OOne(boxes); // 0(1)
// doing only 1 operation per box's element
// 0(1) - Contant Time

// BIG O Rule Book (!IMPORTANT)
/*
Rule 1: Worst Case
  Rule 2: Remove Constants
    Rule 3: Different terms for inputs
      Rule 4: Drop Non Dominants
*/

// Rule #3
function compressBoxesTwice(boxes, boxes2) {
  boxes.forEach((box) => {
    console.log(box);
  });

  boxes2.forEach((box) => {
    console.log(box);
  });
}
// will result to:
// O(a + b) or O(n + m)
// because different terms of inputs, and there are two inputs

/**
 * NESTED LOOPS (!IMPORTANT)
 */
// O(n^2) - Quadratic Time
// Log all pairs of array
const boxes3 = ['a', 'b', 'c', 'd', 'e'];

// nested array operation
const logAllPairsOfArray = (array) => {
  for (let i = 0; i < array.length; i += 1) {
    // O(n)
    for (let j = 0; j < array.length; j += 1) {
      // O(n)
      console.log(array[i], array[j]);
    }
  }
};
logAllPairsOfArray(boxes3);
// O(n * n) or O(n^2)

// Rule #4
// if result is O(n + n^2)
// choose the most dominant term and drop the other, sor result would be:
// O(n^2)

/**
 * SPACE COMPLEXITY
 */
function booo() {
  // O(1) because you allocate memory for `let i = 0`
  for (let i = 0; i < nemo.length; i += 1) {
    console.log('boooooo!');
  }
}

booo([1, 2, 3, 4, 5]); // O(1)

/**
 * Input a number
 * @param {number} n
 */
function arrayOfHiNTimes(n) {
  let hiArray = []; // O(1)
  for (let i = 0; i < n; i += 1) {
    // i is O(1)
    hi[i] = 'hi'; // O(n)
  }
}
arrayOfHiNTimes(6); // O(n)
