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

// REVERSE A STRING
function reverse(str) {
  const newStringArr = [];
  for (let i = str.length - 1; i >= 0; i--) {
    newStringArr[str.length - 1 - i] = str[i];
  }
  return newStringArr.join('');
}
function reverse2(str) {
  return str.split('').reverse().join('');
}
const reverse3 = (str) => [...str].reverse().join('');

console.log(reverse('Hi my name is Dindo'));
console.log(reverse2('Hi my name is Dindo'));
console.log(reverse3('Hi my name is Dindo'));

// MERGE SORTED ARRAYS
function mergeSortedArrays(arr1, arr2) {
  const newArr = []; // O(1)
  for (let i = 0; i < arr1.length; i++) {
    // O(1)
    newArr[newArr.length] = arr1[i]; // O(n)
  }

  for (let i = 0; i < arr2.length; i++) {
    // O(1)
    newArr[newArr.length] = arr2[i]; // O(n)
  }

  return newArr;
}

console.log(mergeSortedArrays([0, 3, 4, 31], [4, 6, 30])); // O(a + b)

// 0

function mergeSortedArrays2(array1, array2) {
  const mergedArray = [];
  let array1Item = array1[0];
  let array2Item = array2[0];
  let i = 1;
  let j = 1;

  // Check input
  // check if input has empty arrays

  while (array1Item || array2Item) {
    if (!array2Item || array1Item < array2Item) {
      mergedArray.push(array1Item);
      array1Item = array1[i];
      i++;
    } else {
      mergedArray.push(array2Item);
      array2Item = array2[j];
      j++;
    }
  }

  return mergedArray;
}

console.log(
  mergeSortedArrays2([0, 3, 4, 100, 200, 500], [4, 6, 30, 40, 50, 60])
);

// TWO SUMS
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  const numsMapped = {};
  let targetNum;

  for (let i = 0; i < nums.length; i++) {
    numsMapped[nums[i]] = i;
  }

  for (let i = 0; i < nums.length; i++) {
    targetNum = target - nums[i];

    if (numsMapped[targetNum] && i !== numsMapped[targetNum]) {
      return [i, numsMapped[targetNum]];
    }
  }
};

console.log(twoSum([1, 3, 4, 2], 6));

// MAXIMUM SUBARRAY
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  let maxNum = nums[0];
  let sum = 0;

  for (let i = 0; i < nums.length; i++) {
    if (sum < 0) {
      sum = 0;
    }

    sum += nums[i];

    if (sum > maxNum) {
      maxNum = sum;
    }
  }

  return maxNum;
};

console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 * @description Given an integer array nums, rotate the array to the right by k steps, where k is non-negative.
 * @link https://leetcode.com/problems/rotate-array/description/
 * @example
 * nums = [1,2,3,4,5,6,7];
 * k = 3;
 * // output:
 * nums = [5,6,7,1,2,3,4]
 *
 */
var rotate = function (nums, k) {
  // in case if k is more than the array
  // so it will circle back the index
  k = k % nums.length;

  // 1. reverse all array first
  // 2. split the array into 2 blocks
  //  -the elements before k, and the elements from k to the end
  // 3. reverse those two blocks and merge

  // reverse the array
  reverseFn(nums, 0, nums.length - 1);
  // reverse the first block
  reverseFn(nums, 0, k - 1);
  // reverse the second block
  reverseFn(nums, k, nums.length - 1);
};

function reverseFn(nums, start, end) {
  while (start < end) {
    let temp = nums[start];
    nums[start] = nums[end];
    nums[end] = temp;
    start++;
    end--;
  }
}
