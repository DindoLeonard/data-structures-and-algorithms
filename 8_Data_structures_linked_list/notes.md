# Linked list

## What is a linked list

- a list that is linked
- is a null terminated
  - means it ends with a null
- has nodes
  - each node has a value and a pointer
  - the first node is called "head"
  - the last node is called "tail" then ends with a null
  - some refers the nodes after the head "tail" meanwhile some refers tail to the last node
- compared to array which is stored in a sequential memory (meaning next to each other), linked list is stored using static memory and doesn't have to be stored next to each other to achieve order
- linked list is much more loose compared to array
- bigO of linked list

  - prepend O(1)
  - append O(1)
  - lookup O(n)
  - insert O(n)
  - delete O(n)

---

## psuedo code example

```js
const basket = ['apples', 'grapes', 'pears']
// apples pointing to next node which is orange, then to the next node which is pear
linked list: apples --> grapes --> pears

// where number is the memory address
apples
8947 --> grapes
          8742 --> pears
                    372 --> null
```

---

## What is a pointer

- a reference to another place in memory

---

## Types of linked list

- singly
  - each node only has 1 pionter, the next reference to point out the next node
  - requires lesser memory
  - cannot be traversed from the back of the list
- doubly
  - each node has 2 pointers, next reference to point out the next node, and previous reference to point out the previous node
  - requires more memory
  - can be traversed from front or back
  - O(n / 2) if you know which half you're gonna start traversing

---

### Reversing singly linked list

- [link_here](https://www.youtube.com/watch?v=NhapasNIKuQ)

---

## PROS & CONS

- Pros
  1. Fast Insertion
  2. Fast Deletion
  3. Ordered
  4. Flexible Size
- Cons
  1. Slow Lookup
  2. More Memory
