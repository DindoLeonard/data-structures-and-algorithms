// will change depending on where the reference is pointed to
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
        prev: null,
      },
    },
  },
};

class Node {
  value;
  next;
  prev;
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class LinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null,
      prev: null,
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
    newNode.prev = this.tail;
    this.tail.next = newNode;
    this.tail = newNode;
    this.length += 1;
    return this;
  }

  prepend(value) {
    const newNode = new Node(value);
    newNode.next = this.head;
    this.head.prev = newNode;
    this.head = newNode;
    this.length += 1;
    return this;
  }

  insert(index, value) {
    if (index >= this.length) {
      return this.append(value);
    }

    const newNode = new Node(value);
    /*
    1. traverse
    2. get reference
    3. insert
    */
    const PREVIOUS_INDEX = index - 1;
    let leader = this.traverseToIndex(PREVIOUS_INDEX); // getting the data of previous value including its pointer
    let follower = leader.next;

    leader.next = newNode;
    newNode.prev = leader;
    newNode.next = follower;
    follower.prev = newNode;
    this.length += 1;

    return this.printList();
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

  delete(index) {
    if (index >= this.length) {
      const LAST_ELEMENT_INDEX = this.length - 1;
      let beforeTail = this.traverseToIndex(LAST_ELEMENT_INDEX - 1);
      beforeTail.next = null;
      return this.printList();
    }

    const LEADER_INDEX = index - 1;
    const leader = this.traverseToIndex(LEADER_INDEX);
    const unwantedNode = leader.next;
    leader.next = unwantedNode.next;
    this.length = this.length - 1;
    return this.printList();
  }

  // [1,2,3,4]
  // currently only reversing singly linked list
  reverse() {
    if (!this.head.next) {
      return this;
    }

    this.tail = this.head; // the head become tails

    // storing reference
    let first = this.head; // first
    let second = first.next; // second

    // [1,2,3,4,5]
    while (second) {
      let temp = second.next; // third
      second.next = first;
      first = second;
      second = temp;
    }

    this.head.next = null; // since head becomes tail, you need to null the next to terminate or end the linked list
    this.head = first;
    return this;
  }

  reverse2() {
    this.tail = this.head; // setting tail if there's a tail

    let head = this.head;
    let prev = null;

    while (head !== null) {
      let tempNextNode = head.next;
      head.next = prev;
      prev = head;
      head = tempNextNode;
    }

    this.head = prev;

    return prev;
  }

  reverse3() {
    let head = this.head;

    let prev = null;

    while (head !== null) {
      let nextNode = head.next;
      head.next = prev;
      prev = head;
      head = nextNode;
    }
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
  // reverse() {
  //   const arr = [];
  //   let currentNode = this.head;
  //   while (currentNode !== null) {
  //     arr.push(currentNode.value);
  //     currentNode = currentNode.next;
  //   }
  //   let newLinkedList;
  //   for (let i = this.length - 1; i >= 0; i--) {
  //     if (i === this.length - 1) {
  //       newLinkedList = new LinkedList(arr[i]);
  //     } else {
  //       newLinkedList.append(arr[i]);
  //     }
  //   }
  //   this.head = newLinkedList.head;
  //   this.tail = newLinkedList.tail;
  //   return this.printList();
  // }
}

const myLinkedList = new LinkedList(1);
myLinkedList.append(2);
myLinkedList.append(3);
myLinkedList.append(4);
myLinkedList.append(5);
// myLinkedList.printList();
// myLinkedList.insert(1, 99);
// myLinkedList.prepend(1);
myLinkedList.printList();
console.log('reversed');
myLinkedList.reverse2();
myLinkedList.printList();
console.log(myLinkedList);
// myLinkedList.reverse2();
// console.log('after-reverse-2');
// myLinkedList.printList();
// console.log(myLinkedList);
// myLinkedList.prepend(1);
// myLinkedList.insert(2, 99);
// myLinkedList.insert(20, 100);
// myLinkedList.insert(4, 88);
// myLinkedList.printList();
// myLinkedList.delete(100);
// myLinkedList.delete(2);
// myLinkedList.delete(2);
// myLinkedList.printList();

// console.log(myLinkedList);
