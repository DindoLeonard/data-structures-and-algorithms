class Node {
  constructor(value) {
    this.left = null;
    this.right = null;
    this.value = value;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }
  insert(value) {
    //Code here
    const newNode = new Node(value);

    if (!this.root) {
      this.root = newNode;
      return this;
    }

    let currentNode = this.root;
    while (true) {
      if (newNode.value < currentNode.value) {
        // go left
        // check if left node is empty
        if (!currentNode.left) {
          currentNode.left = newNode;
          break;
        }
        currentNode = currentNode.left;
      } else if (newNode.value > currentNode.value) {
        // go right
        // check if right node is empty
        if (!currentNode.right) {
          currentNode.right = newNode;
          break;
        }
        currentNode = currentNode.right;
      }
    }

    return this;
  }
  lookup(value) {
    if (!this.root) {
      return null;
    }

    let currentNode = this.root;
    while (value !== currentNode.value) {
      if (value < currentNode.value) {
        // go left
        // check if left is empty
        if (!currentNode.left) {
          break;
        } else {
          currentNode = currentNode.left;
        }
      } else if (value > currentNode.value) {
        // go right
        // check if right is empty
        if (!currentNode.right) {
          break;
        } else {
          currentNode = currentNode.right;
        }
      }
    }
    if (currentNode.value !== value) {
      return null;
    }
    return currentNode;
  }
}
// remove

const tree = new BinarySearchTree();
tree.insert(9);
tree.insert(4);
tree.insert(6);
tree.insert(20);
tree.insert(170);
tree.insert(15);
tree.insert(1);
console.log(JSON.stringify(traverse(tree.root)));
console.log(tree.lookup(20));

//     9
//  4     20
//1  6  15  170

function traverse(node) {
  const tree = { value: node.value };
  tree.left = node.left === null ? null : traverse(node.left);
  tree.right = node.right === null ? null : traverse(node.right);
  return tree;
}
