// const obj1 = { a: true };
// const obj2 = obj1;
// const obj3 = obj2;

// console.log(obj1);
// console.log(obj2);
// console.log(obj3);

// 10 --> 5 --> 16 -->
// linkedList
const linkedList = {
  head: {
    value: 10,
    next: {
      value: 5,
      next: {
        value: 16,
        next: null,
      },
    },
  },
};

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null,
    };
    this.tail = this.head;
    this.length = 1;
  }

  printList() {
    const arr = [];
    let currentNode = this.head;
    while (currentNode !== null) {
      arr.push(currentNode.value);
      currentNode = currentNode.next;
    }

    console.log(arr);
    return arr;
  }

  append(value) {
    const newNode = new Node(value);
    this.tail.next = newNode;
    this.tail = newNode;
    this.length += 1;
  }

  prepend(value) {
    const newNode = new Node(value);
    newNode.next = this.head;

    this.head = newNode;
    this.length += 1;
  }

  insert(index, value) {
    const newNode = new Node(value);
    /*
    1. traverse
    2. get reference
    3. insert
    */
    const PREVIOUS_INDEX = index - 1;
    let leader = this.traverseToIndex(PREVIOUS_INDEX); // getting the data of previous value including its pointer
    let holdingPointer = leader.next;

    leader.next = newNode;
    newNode.next = holdingPointer;
    this.length += 1;

    return newNode;
  }

  traverseToIndex(index) {
    let counter = 0;
    let currentNode = this.head;

    while (counter !== index) {
      currentNode = currentNode.next;
      counter++;
    }

    return currentNode;
  }

  // MY WAY
  // append2(value) {
  //   this.tail.next = value;
  //   this[value] = {
  //     value: value,
  //     next: null,
  //   };
  //   this.tail = this[value];
  //   this.length += 1;
  // }
  // prepend2(value) {
  //   this[this.head.value] = {
  //     value: this.head.value,
  //     next: this.head.next,
  //   };
  //   this.head = {
  //     value: value,
  //     next: this.head.value,
  //   };
  // }
}

const myLinkedList = new LinkedList(10);
myLinkedList.append(5);
myLinkedList.append(16);
myLinkedList.append(9);
myLinkedList.prepend(1);
myLinkedList.insert(2, 99);
myLinkedList.insert(4, 88);

myLinkedList.printList();

// console.log(myLinkedList);
