let user = {
  age: 54,
  name: 'Kyrie',
  magic: true,
  scream: function () {
    console.log('aaahhhh!');
  },
};

user.age; // 0(1)
user.spell = 'abra kadabra'; // 0(1)
user.scream(); // 0(1);

// when collision
// O(n/k)

/*
@link https://en.wikipedia.org/wiki/Hash_table
ways to deal collision
- linked list
- separate chaining
*/

// fast lookups on hash tables
// ocassionally you'll encounter O(n)

/*

In javascript, object, map and set
difference between map and object is that in Map, you can store any data type as the key, in object you can only save key as string

object has no order, inserted in memory randomly in the memory space

Set - only stores the keys and no values
*/

class HashTable {
  constructor(size) {
    this.data = new Array(size);
  }

  // 0(1) because it is super fast
  _hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * i) % this.data.length;
    }
    return hash;
  }

  // O(1)
  set(key, value) {
    let address = this._hash(key);

    if (!this.data[address]) {
      this.data[address] = [];
    }

    this.data[address].push([key, value]);
  }

  get(key) {
    let address = this._hash(key);
    const currentBucket = this.data[address];

    if (currentBucket.length) {
      // 0(n)
      for (let i = 0; i < currentBucket.length; i++) {
        if (currentBucket[i][0] === key) {
          return currentBucket[i][1];
        }
      }
    }

    return undefined;
  }
}

const myHashTable = new HashTable(50);
myHashTable.set('grapes', 10000);
console.log(myHashTable.get('grapes'));
myHashTable.set('apples', 54);

console.log(myHashTable.data);
