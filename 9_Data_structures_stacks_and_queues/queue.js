class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.length = 0;
  }
  peek() {
    return this.first;
  }
  enqueue(value) {
    const newNode = new Node(value);

    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }

    this.length++;
  }
  dequeue() {
    if (!this.first) {
      return null;
    }

    if (this.first === this.last) {
      this.first = null;
      this.last = null;
    } else {
      this.first = this.first.next;
    }

    this.length--;
    return this;
  }
  //isEmpty;
  isEmpty() {
    return !this.first;
  }
}

const myQueue = new Queue();

myQueue.enqueue('Joy');
myQueue.enqueue('Matt');
myQueue.enqueue('Pavel');
myQueue.enqueue('Samir');
console.log(myQueue);
myQueue.dequeue();
myQueue.dequeue();
console.log('after dequeue');
console.log(myQueue);
console.log(myQueue.peek());
console.log(myQueue.isEmpty());
myQueue.dequeue();
myQueue.dequeue();
console.log(myQueue.isEmpty());

//Joy
//Matt
//Pavel
//Samir
