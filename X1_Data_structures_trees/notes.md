# Trees

###

- DOM is like a tree data structure
- has root, parent, child, leaf(end-node), sibling
- Linked list is actuall a tree, but only has a single path and is linear
- node can only point to the child and nodes doesn't have to reference parents
- introduces new notation, O(log N)
- If you are feel overwhelmed, think of tree data structure like a family tree, or a corporate ladder.
  - The data is heirarchical. You'll have someone (a root node) at the top, that delegates to some other node (parent nodes).
  - which may have someone reporting to them (child nodes). Or you have a huge family, with parent nodes, children nodes, all leading back up to an ancestral root node

## Binary Tree

- each node can either have 1 or 0, two nodes, and each tile can only have 1 parent
- each node

```ts
// example of binary tree
class BinaryTreeNode() {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}
```

- Perfect binary
  - each node always have zero or two children
  - bottom layer of the tree or leaf is always filled
  - the number of nodes double as you go down the tree
- Full binary tree
  - each node has either zero or two children, but never one child

## O(log n)

- To calculate the number of nodes they have of a perfectly balanced binary tree of each height
  - formula: `2^{height}`, height starts at 0
    - where level is the hierarchy height level of the node
  - Level 0: 2^0 = 1;
    - this means that on level 0, you have only 1 node
  - Level 1: 2^1 = 2;
  - Level 2: 2^2 = 4;
  - Level 3: 2^3 = 8;
- To calculate the total number of nodes (node from top always starts with 1)

  - `# of nodes = 2^h - 1` or `# of nodes = 2^<numberofsteps> - 1`

  ```
        O           = 1
      /   \
     0     0        = 2
    /\     /\
   0  0   0  0      = 3

  total_nodes = 2^3 - 1
  total_nodes = 7
  ```

  ```
  log nodes = steps
  log 100 = 2
  10^2 = 100
  ```

- steps or height means the maximum number of decisions of a tree

  ```
        x           is this what u looking for? = 1
      /   \
     0     x        is it this?                 = 2
    /\     /\
   0  0   x  0      is it this?                 = 3

  total_nodes = 2^3 - 1
  total_nodes = 7
  ```

- O(log n) just means like looking through a phonebook

## Binary Search Tree

- really good at searching and comparing things
- better than hash table? because it preserves relationships
- what might be wrong with bst?
  - can become unbalanced and turn into a long linked list
- BST Pros and Cons
  - Pros
    - Better than O(n)
    - Ordered
    - Flexible Size
  - Cons
    - No O(1) operations

## AVL Trees + RED BLACK TREES

- Trees that balances themselves
- AVL TREES
  - [animation](https://www.cs.usfca.edu/~galles/visualization/AVLtree.html)
  - [how it works](https://medium.com/basecs/the-little-avl-tree-that-could-86a3cae410c7)
  - Balances itself if or does a rotation to balance
  - Check visual go for the visual representation
- RED / BLACK TREE
  - [animation](https://www.cs.usfca.edu/~galles/visualization/RedBlack.html)
  - [how it works](https://medium.com/basecs/painting-nodes-black-with-red-black-trees-60eacb2be9a5)
  - Check visual go for the visual represintation
- [BETWEEN THE TWO](https://stackoverflow.com/questions/13852870/red-black-tree-over-avl-tree)

## BINARY HEAP

- Max heap
  - root node is the highest than its child nodes
  - every node on the top level has the greater value than every node on the next level down
- Min heap
  - exact opposite of Max heap where the root node is lower than every node on the next level
- Commonly used for priority queues
- javascript's memory heap is not equal to Heap data structure, name is just coincidental
- Complexity:
  - lookup O(n)
  - insert O(log n)
  - delete O(log n)
- Inserts:
- best: 0(1)
- worst O(log n)
- [animation](https://medium.com/prabidhi-info/how-to-get-dark-night-mode-on-medium-in-your-browser-d9adc3bcf1bf)
- very good at doing comparative operations
- heaps are used in:
  - data storage
  - priority queues
  - sorting algorithm
- left to right insertion
- if the value incomming is higher than the parent node, it will bubble up and switch places with it.

### PROS AND CONS OF BINARY HEAL

- PROS
  - Better than O(n)
  - Priority
  - Flexible Size
  - Fast Insert
- CONS
  - Slow lookup

### Priority Queue (Binary heap)

- difference of queues is that we just assume that it was first in and first out
- type of data where each element has a priority
  - and those who have higher priority are served before elements with lower priority
  - left to right insertion

### Trie

- Specialized tree used in searching most often with text
- in most cases, can outperform binary search tree
- Lets you know if a word, or part of a word, exists in a body of text
- Usually has empty root node
- another name for a trie, is something called prefix tree
- like in google, where in autocompletes or gives autosuggestion when you type something
- Complexity:
  - O(n) or O(length of the word)
