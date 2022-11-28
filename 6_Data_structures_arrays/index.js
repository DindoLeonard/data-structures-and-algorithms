const strings = ['a', 'b', 'c', 'd'];
// 4*4 = 16 bytes of storage

// push
strings.push('e'); // O(1)

// pop
strings.pop(); // O(1)

// unshift
// add at the beginning of array
strings.unshift('x'); // O(n)

// splice
// adding at the middle of array
strings.splice(2, 0, 'alien'); // O(n)

console.log(strings);

// C++
/* Static array in C++
// create array of 20
in a[20];
// create array of 5 and insert
int b[5] {1,2,3,4,5}
*/

// IMPLEMENTING AN ARRAY
class MyArray {
  constructor() {
    this.length = 0;
    this.data = {};
  }

  get(index) {
    return this.data[index];
  }

  push(item) {
    this.data[this.length] = item;
    this.length++;
    return this.length;
  }

  pop() {
    const lastItem = this.data[this.length - 1];
    delete this.data[this.length - 1];
    this.length--;
    return lastItem;
  }

  delete(index) {
    const item = this.data[index];
    this.shiftItems(index);
    return item;
  }

  shiftItems(index) {
    for (let i = index; i < this.length - 1; i++) {
      this.data[index] = this.data[i + 1];
    }
    delete this.data[this.length - 1]; //  delete the last item;
    this.length--; // decrement the length
  }
}

const newArray = new MyArray();
newArray.push('hi');
newArray.push('you');
newArray.push('!');

console.log(newArray);
// newArray.pop();
// newArray.pop();
newArray.delete(2);
newArray.push('are');
newArray.push('nice');

console.log(newArray);
