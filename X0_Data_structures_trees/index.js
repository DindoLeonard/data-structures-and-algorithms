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

  remove2(value) {
    if (!this.root) {
      return false;
    }

    let currentNode = this.root;
    let parentNode = null;
    while (currentNode) {
      if (value < currentNode.value) {
        // traverse left
        parentNode = currentNode;
        currentNode = currentNode.left;
      } else if (value > currentNode.value) {
        // traverse right
        parentNode = currentNode;
        currentNode = currentNode.right;
      } else if (value === currentNode.value) {
        // matched

        // Option1: No right child
        if (currentNode.right === null) {
          // LEFT
          if (parentNode === null) {
            // means it is the first
            this.root = currentNode;
          } else {
            if (parentNode.value === null) {
              this.root = currentNode.left; // because there is no right node and only available is the left
            } else {
              if (currentNode.value < parentNode.value) {
                // make parent.left the currentNode.left, because currentNode is not gonna be in the binarytree anymore
                parentNode.left = currentNode.left;
              } else if (currentNode.value > parentNode.value) {
                // make parent.right the currentNode.left, because currentNode is not gonna be in the binary tree after
                // and because it has a higher value than the parentNode
                parentNode.right = currentNode.left;
              }
            }
          }
          // If it has a right node, but that rigt node's left is null
        } else if (currentNode.right.left === null) {
          // remember that your currentNode has both right and left
          // the main idea is the make the right one absorb or adopt the left one
          // but we have to make sure that the right one's left is empty or null
          // so...
          // make the current's left child, connect to the currentNode.right's left child because it is empty
          currentNode.right.left = currentNode.left;
          if (parentNode === null) {
            // incase if it doesn't have a parent or a root, make the right be the root of the binary tree
            // parent is only going to be null if the binary tree doesn't have a root yet
            this.root === currentNode.right;
          } else {
            if (currentNode.value < parentNode.value) {
              parentNode.left = currentNode.right;
            } else if (currentNode.value > parentNode.value) {
              parentNode.right = currentNode.right;
            }
          }
          // if the currentNode's right child has a left child
        } else {
          // 1. Find the right child's left most child
          // create a leftMost, and leftMostParent which is the currentNode's right
          // do not stop looping or traversing until the leftMost.left becomes null
          let leftMost = currentNode.right.left;
          let leftMostParent = currentNode.right;
          while (leftMost !== null) {
            leftMostParent = leftMost;
            leftMost = leftMost.left;
          }

          leftMostParent.left = leftMost.right; // if the leftMost has a right child, make it be adopted to the leftMostParent;
          leftMost.right = currentNode.right;
          leftMost.left = currentNode.right;

          if (parentNode === null) {
            this.root = leftMost;
          } else {
            if (currentNode.value < parentNode.value) {
              parentNode.left = leftMost;
            } else if (currentNode.value > parentNode.value) {
              parentNode.right = leftMost;
            }
          }
        }
        return true;
      }
    }
  }

  remove(value) {
    if (!this.root) {
      return false;
    }
    let currentNode = this.root;
    let parentNode = null;
    while (currentNode) {
      if (value < currentNode.value) {
        parentNode = currentNode;
        currentNode = currentNode.left;
      } else if (value > currentNode.value) {
        parentNode = currentNode;
        currentNode = currentNode.right;
      } else if (value === currentNode.value) {
        //We have a match, get to work!

        //Option 1: No right child:
        if (currentNode.right === null) {
          if (parentNode === null) {
            this.root = currentNode;
          } else {
            if (parentNode.value === null) {
              this.root = currentNode.left;
            } else {
              //if parent > current value, make current left child a child of parent
              if (currentNode.value < parentNode.value) {
                // left side
                parentNode.left = currentNode.left;

                //if parent < current value, make left child a right child of parent
              } else if (currentNode.value > parentNode.value) {
                // right side
                parentNode.right = currentNode.left;
              }
            }
          }

          //Option 2: Right child which doesnt have a left child
        } else if (currentNode.right.left === null) {
          currentNode.right.left = currentNode.left;
          if (parentNode === null) {
            this.root = currentNode.right;
          } else {
            //if parent > current, make right child of the left the parent
            if (currentNode.value < parentNode.value) {
              parentNode.left = currentNode.right;

              //if parent < current, make right child a right child of the parent
            } else if (currentNode.value > parentNode.value) {
              parentNode.right = currentNode.right;
            }
          }

          //Option 3: Right child that has a left child
        } else {
          //find the Right child's left most child
          let leftmost = currentNode.right.left;
          let leftmostParent = currentNode.right;
          while (leftmost !== null) {
            leftmostParent = leftmost;
            leftmost = leftmost.left;
          }

          //Parent's left subtree is now leftmost's right subtree
          leftmostParent.left = leftmost.right;
          leftmost.left = currentNode.left;
          leftmost.right = currentNode.right;

          if (parentNode === null) {
            this.root = leftmost;
          } else {
            if (currentNode.value < parentNode.value) {
              parentNode.left = leftmost;
            } else if (currentNode.value > parentNode.value) {
              parentNode.right = leftmost;
            }
          }
        }
        return true;
      }
    }
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
tree.remove2(170);
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
