class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }
  peek() {
    console.log(this.top);
    return this.top;
  }
  push(value) {
    const newNode = new Node(value);
    if (this.length === 0) {
      this.top = newNode;
      this.bottom = newNode;
    } else {
      let holdingPointer = this.top; // hold the previous top
      this.top = newNode; // this.top become the newNode we created
      this.top.next = holdingPointer; // the new this.top's next should point to the previous top
    }

    this.length++;
    return this;
  }
  pop() {
    if (!this.top) {
      return null;
    }

    console.log(this.length);

    this.top = this.top.next;
    this.length--;

    if (this.length === 0) {
      this.bottom = null;
    }

    return this;
  }
  //isEmpty
}

const myStack = new Stack();

myStack.push('google');
myStack.push('Udemy');
myStack.push('Discord');
console.log(myStack);
myStack.peek();
myStack.pop();
myStack.pop();
myStack.pop();
console.log('after pop');
myStack.peek();
console.log(myStack);

//Discord
//Udemy
//google
