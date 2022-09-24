BIG O - "Asymptotic analysis"

---

What is Good Code?

1. Readable
2. Scalable ( Big O )

- allow us to measure the idea of scalable

---

Big O and Scalability

javascript

```
// to log time, not efficient because it will depend on the computer it runs in
performance.now()
```

!!! should count how many operations does it take, or how many steps to measure Big O

---

o(n)
--> Linear Time

- most common

O === operation, n === element
1 operation per element in an array

---

o(1)
---> Constant Time

- 1 operation for each item

---

Simplyfying Big O

Rule 1: Worst Case
Rule 2: Remove Constants
Rule 3: Different terms for inputs
Rule 4: Drop Non Dominants

---

Rule 1: Worst Case

- always think about the worst case
- that means in the loop you are always going to loop the entire thing even if you do call a `break` out of loop
- in javascript use break if you already found something in loop

---

Rule #3

```
function compressBoxesTwice(boxes, boxes2) {
  boxes.forEach((box) => {
    console.log(box);
  });

  boxes2.forEach((box) => {
    console.log(box);
  });
}
will result to:
O(a + b) or O(n + m)
because different terms of inputs, and there are two inputs
```

---

/\*\*

- NESTED LOOPS (!IMPORTANT)
  \*/

```js
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
```

---

```
// Rule #4
// if result is O(n + n^2)
// choose the most dominant term and drop the other, sor result would be:
// O(n^2)
```

---

Goog programmers create

- Good Data Structures
- Good Algorithms
- To create a program
- Data Structures + Algorithms = Programs

---

O(n!)
--> Adding nested loop for every input

---

Pillars of programming

1. Readable

- Maintainable

2. Scalable

- Speed
- Memory

Which code is best? 3 Pillars

- Readable
- Memory
- Space Complexity
- Speed
- Time Complexity

---

Space Complexity

Heap
Stack

What causes Space complexity?

- Variables
- Data Structures
- Function call
- Allocations

---

Javascript Loops

```js
//
for (let = 0; 1 < length; i++) {}

//
[].forEach((item) => {});

//
for (let item of array) {
}
```

---

## Section Summary

- Readable
- Memory
- Speed

---
