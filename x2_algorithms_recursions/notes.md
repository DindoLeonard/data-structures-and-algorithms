# Algorithms Introduction

- Sorting
- Dynamic Programming
- BFS + DFS (Searching)
- Recursion

## When it comes to

- Sorting?
  - Arrays
  - Trees
- Dynamic programming?
  - Hash tables
- BFS + DFS?
  - Trees
  - Graphs
- Recursion?
  - Trees

---

# Recursion

- isn't technically an algorithm, it's more like a concept
- example script in bash: `ls -R`
  - it will list files recursively
- like a function refer to itself and calling itself within its function

# Stackoverflow

- A recursive function that exceeds the call stack size using resources like limited memory

# Base case

- A way to stop or telling the recursive function to stop

# 3 rules of calling a recursive function

1. Identify the base case
2. Identify the recursive case
3. Get closer and close and return when needed, Usually you have 2 returns (base case and resursive case)

```js
let counter = 0;
function inception() {
  if (counter > 3) {
    // base case
    return 'done!';
  }

  counter++;

  return inception(); // recursive case
}
```
