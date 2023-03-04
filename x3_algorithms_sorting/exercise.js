'use strict';

const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function mergeSort(array) {
  // return array directly if it only has 1 element
  // base case: if the array has - or 1 elements, it is already sorted
  if (array.length === 1) {
    return array;
  }

  // Split array into right and left
  const length = array.length;
  const middleIndex = Math.floor(length / 2); // find middleIndex
  const leftHalf = array.slice(0, middleIndex); // the left half
  const rightHalf = array.slice(middleIndex); // the right half
  console.log('left', leftHalf);
  console.log('right', rightHalf);

  // using recursion
  // merging both, but before merging both, they are recusively mergedSort for
  // each half
  // the recursion always evaluates the lefthalf first because it will stack
  // everytime it is called.
  return merge(mergeSort(leftHalf), mergeSort(rightHalf));
}

function merge(left, right) {
  const result = [];
  let leftIndex = 0;
  let rightIndex = 0;
  console.log('**here_at_merged_function**');
  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      result.push(left[leftIndex]);
      leftIndex++; // the exit mechanism, everytime it gets here, it will add the index
    } else {
      result.push(right[rightIndex]);
      rightIndex++;
    }
  }

  console.log('result', result);
  console.log('left-remaining', left.slice(leftIndex));
  console.log('right-remaining', right.slice(rightIndex));

  console.log(
    'merged',
    result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex))
  );

  // if there's a remaining element in left array, concat it to the result
  // and also concat the remaining elements in the right array if there is any
  return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}

// const answer = mergeSort(numbers);
// console.log(answer);

// visual representation: https://www.youtube.com/watch?v=XaqR3G_NVoo
const numbersToSort = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];
function myMergeSort(arr) {
  // return a basecase;
  if (arr.length === 1) {
    return arr;
  }
  // split arr into two;
  const middleIndex = Math.floor(arr.length / 2); // middle index
  const leftHalf = arr.slice(0, middleIndex); // left half
  const rightHalf = arr.slice(middleIndex); // right half
  // recursive function
  return myMerge(myMergeSort(leftHalf), myMergeSort(rightHalf));
}

function myMerge(leftArr, rightArr) {
  const result = [];
  let leftIndex = 0;
  let rightIndex = 0;

  while (leftIndex < leftArr.length && rightIndex < rightArr.length) {
    if (leftArr[leftIndex] < rightArr[rightIndex]) {
      result.push(leftArr[leftIndex]);
      leftIndex++;
    } else {
      result.push(rightArr[rightIndex]);
      rightIndex++;
    }
  }

  const remainingAtLeft = leftArr.slice(leftIndex);
  const remainingAtRight = rightArr.slice(rightIndex);
  const merged = result.concat(remainingAtLeft).concat(remainingAtRight);
  return merged;
}

const myAnswer = myMergeSort(numbersToSort);
console.log('my_answer', myAnswer);

// QUICK SORT
function quickSort(array, left, right) {
  const length = array.length;
  let pivot;
  let partitionIndex;

  // Check if there are at least two elements in the range to be sorted
  if (left < right) {
    // Choose the pivot elements as the element at index "right"
    pivot = right;
    // Partition the rray into two subarrays
    partitionIndex = partition(array, pivot, left, right);

    // Sort the left and right subarrays recursively
    quickSort(array, left, partitionIndex - 1); // left
    quickSort(array, partitionIndex + 1, right); // right
  }
  return array;
}

function partition(array, pivot, left, right) {
  // Choose the pivot value as the elements at the pivot index
  let pivotValue = array[pivot];
  let partitionIndex = left;

  // Loop through the range of the array from "left" to "right - 1"
  for (let i = left; i < right; i++) {
    if (array[i] < pivotValue) {
      // Swap the current element with the element at the partition index
      swap(array, 1, partitionIndex);
      // Move the partition index one element to the right
      partitionIndex++;
    }
  }

  // Swap the pivot element witht the element at the partition index
  swap(array, right, partitionIndex);
  // Return the partition index
  return partitionIndex;
}

// utility function for swaping or switching the places of 2 index elements of the array
function swap(array, firstIndex, secondIndex) {
  let temp = array[firstIndex];
  array[firstIndex] = array[secondIndex];
  array[secondIndex] = temp;
}

//Select first and last index as 2nd and 3rd parameters
quickSort(numbers, 0, numbers.length - 1);
console.log(numbers);
