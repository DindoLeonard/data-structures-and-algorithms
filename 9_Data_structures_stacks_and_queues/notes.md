# Stacks and Queues

- Linear data structures
- Sequential and one by one
- Data usually deal with first and last element of the data structure

---

## Stacks

- Big O
  - | Method | BigO |
    | ------ | ---- |
    | lookup | O(n) |
    | pop    | O(1) |
    | push   | O(1) |
    | peek   | O(1) |
    |        |      |
- think of them as plates which stack on top of each other vertically
  - where you can only touch the top plate
  - like call stack in javascript
- LIFO - "Last In First Out"
- most programming languages are modeled with stack architecture in mind, usually when a function is called
- good use for browser history as an example

---

## Queues

- Big O
  - | Method  | BigO |
    | ------- | ---- |
    | lookup  | O(n) |
    | enqueue | O(1) |
    | dequeue | O(1) |
    | peek    | O(1) |
    |         |      |
- like an entrance on a ruler coaster
- FIFO - "First In First Out"
- example app
  - waitlist app
  - restaurant app
  - uber
  - printer waiting list
- Why would you not use an array to build a queue?
  - very inefficient, removing the first item will shift all other indexes

---
