// example of recursion

let counter = 0;
function recursiveFn() {
  if (counter > 3) {
    //  base case
    return 'done';
  }
  counter++;

  // returning the recursive case will return the returned value of the base case
  // if you do not return the recursive case, it will return undefined
  return recursiveFn(); // recursive case
}

// exercise:
// Write two functions that finds the factorial of any number. One should use recursive, the other should just use a for loop
function findFactorialRecursive(number) {
  //code here
  if (number < 1) {
    // if this recursive function is 1, return it right away
    return 1;
  }

  // if the number is not 1, it will go here
  // every time this function is called inside another function, it will be put on top of the callstack
  // the top of the callstack is going to be executed first as a priority and it will return a value to the previous function that calls it
  // then it will then return again and again for each stack that is on top of one another until it will give out the first call stack
  // the first call stack function is now going to return a true value because the function is now going to be settled
  // then the loop will end because it will not return the answer
  const answer = number * findFactorialRecursive(number - 1);
  return answer;
}
console.log(findFactorialRecursive(5));

function findFactorialIterative(number) {
  //code here
  let answer;
  for (let i = number; i >= 1; i--) {
    if (!answer) {
      answer = 1;
    }
    answer = answer * i;
  }
  return answer;
}

console.log(findFactorialIterative(5));

// ----------

// Given a number N return the index value of the Fibonacci sequence, where the sequence is:

// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144 ...
// the pattern of the sequence is that each value is the sum of the 2 previous values, that means that for N=5 → 2+3

//For example: fibonacciRecursive(6) should return 8
function fibonacciIterative(n) {
  // O(n)
  //code here;
  // let arr = [0, 1];
  // for (let i = 2; i <= n; i++) {
  //   arr.push(arr[i - 2] + arr[i - 1]);
  // }
  // return arr[n];

  let a = 0; // this is going to be the first num
  let b = 1; // this is going to be the second num
  let temp = 0; // this is going to hold a temporary variable

  for (let i = 2; i <= n; i++) {
    // what happens here is that we are like traversing through the next number for each iteration
    temp = b; // hold the b terporarily;
    b = a + b; // making b going to be the result of the previous 2 numbers, which then is going to be used for the next iteration
    a = temp; // making a going to be the previous b
  }
  return b;
}
console.log(fibonacciIterative(50));

// example, in sequence 6 which is number 8
// the 8 is because of sequence #4 + sequence #5, which is 3 + 5, resulted to 8
// O(2^n)  because we are using 2 recursive inside
function fibonacciRecursive(n) {
  // O(2^n)
  //code here;
  if (n <= 1) {
    return n;
  }

  return fibonacciRecursive(n - 1) + fibonacciRecursive(n - 2);
}
console.log(fibonacciRecursive(40));

//Implement a function that reverses a string using iteration...and then recursion!
let stringArr = [];
let reverseSeq = 1;
function reverseString(str) {
  if (stringArr.length === str.length) {
    console.log(stringArr);
    return stringArr.join('');
  }
  stringArr.push(str[str.length - reverseSeq]);
  reverseSeq++;
  return reverseString(str);
}

const result = reverseString('yoyo mastery');
console.log(result);
//should return: 'yretsam oyoy'

function reverseString2(str) {
  // this is andrei's
  if (str === '') {
    return '';
  } else {
    return reverseString2(str.substr(1)) + str.charAt(0);
  }
}
console.log(reverseString2('dindo'));
