'use strict';

// LEETCODE - https://leetcode.com/problems/implement-queue-using-stacks/description/

// Implementing Queue using Stacks

// solution reference: https://www.youtube.com/watch?v=d0h0E8CuibU

class MyQueue {
  constructor() {
    this.pushStack = [];
    this.popStack = [];
  }

  push(value) {
    console.log('push');
    if (!this.popStack.length) {
      while (this.pushStack.length) {
        this.popStack.push(this.pushStack.pop());
      }
    }

    this.pushStack.push(value);
  }

  pop() {
    console.log('pop');
    if (!this.popStack.length) {
      while (this.pushStack.length) {
        this.popStack.push(this.pushStack.pop());
      }
    }

    return this.popStack.pop();
  }

  peek() {
    console.log('peek');
    if (!this.popStack.length) {
      while (this.pushStack.length) {
        this.popStack.push(this.pushStack.pop());
      }
    }
    return this.popStack[this.popStack.length - 1];
  }

  empty() {
    console.log('empty');
    return !this.pushStack.length && !this.popStack.length;
  }
}

const myQueue = new MyQueue();

console.log(myQueue.push(1));
console.log(myQueue.push(2));
console.log(myQueue.push(4));
console.log(myQueue.push(5));

console.log(myQueue);
console.log(myQueue.pop());
console.log(myQueue);
console.log(myQueue.push(3));
console.log(myQueue);
console.log(myQueue.pop());
console.log(myQueue.empty());
console.log(myQueue.pop());
console.log(myQueue.empty());
