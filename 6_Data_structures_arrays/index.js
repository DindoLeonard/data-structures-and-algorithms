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
