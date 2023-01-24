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

## What is a pointer

- a reference to another place in memory
