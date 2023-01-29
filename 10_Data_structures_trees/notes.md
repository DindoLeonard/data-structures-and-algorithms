# Trees

###

- DOM is like a tree data structure
- has root, parent, child, leaf(end-node), sibling
- Linked list is actuall a tree, but only has a single path and is linear
- node can only point to the child and nodes doesn't have to reference parents
- introduces new notation, O(log N)

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
        O           is this what u looking for? = 1
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
