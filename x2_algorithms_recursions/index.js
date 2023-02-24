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
