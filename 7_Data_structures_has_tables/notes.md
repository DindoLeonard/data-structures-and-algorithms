# Has tables

- objects in javascript
- every language has built-in hash-tables
- key-value pair
- hash function

---

## Has function

- generates a value of fixed length for each input that it gets
  - example: md5 Hash Generator
- idempotent
  - function given an input, always outputs the same output
  - use it to have a really fast data access
- hash function converts string to md5 which then converts it into the memoryspace address based on that hashed string

## Collision

- with hashed tables you can't avoid collision
- when collision; O(n/k)
- fast lookups on hash tables
  - ocassionally you'll encounter O(n)
