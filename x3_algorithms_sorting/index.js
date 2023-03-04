// Bubble Sort
// Insertion Sort
// Selection Sort
//
// Merge Sort
// Quick Sort

// BUBBLE SORT
// bubble up the highest number
//
const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function bubbleSort(array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      if (array[j] > array[j + 1]) {
        let temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
      }
    }
  }
}

// bubbleSort(numbers);
// console.log(numbers);

// SELECTION Sort

function selectionSort(array) {
  for (let i = 0; i < array.length; i++) {
    // set current index as minimum
    let min = i;
    let temp = array[i];
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < array[min]) {
        // Update minimum if current is lower than what we hade previously
        min = j;
      }
    }
    array[i] = array[min];
    array[min] = temp;
  }
  return array;
}

// selectionSort(numbers);
// console.log(numbers);

// INSERTION SORT

function insertionSort(array) {
  // loop through the entire array, starting from the second element
  for (let i = 0; i < array.length; i++) {
    // save the current element as temp
    let temp = array[i];
    // initialize the j to the previous index
    let j = i - 1;
    // move elements greater than temp to the right;
    while (j >= 0 && array[j] > temp) {
      array[j + 1] = array[j];
      j--;
    }
    // insert temp in the correct position
    array[j + 1] = temp;
  }
  // return the sorted array
  return array;
}

// insertionSort(numbers);
// console.log(numbers);

function insertionSortAndrei(array) {
  const length = array.length;
  for (let i = 0; i < length; i++) {
    if (array[i] < array[0]) {
      //move number to the first position
      array.unshift(array.splice(i, 1)[0]);
    } else {
      // only sort number smaller than number on the left of it. This is the part of insertion sort that makes it fast if the array is almost sorted.
      if (array[i] < array[i - 1]) {
        //find where number should go
        for (var j = 1; j < i; j++) {
          if (array[i] >= array[j - 1] && array[i] < array[j]) {
            //move number to the right spot
            array.splice(j, 0, array.splice(i, 1)[0]);
          }
        }
      }
    }
  }
}

// insertionSortAndrei(numbers);
// console.log(numbers);

// MERGE SORT

function mergeSort(array) {
  if (array.length === 1) {
    return array;
  }
  // Split Array in into right and left
  const length = array.length;
  const middle = Math.floor(length / 2);
  const left = array.slice(0, middle);
  const right = array.slice(middle);
  console.log('left:', left);
  console.log('right:', right);

  return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
  const result = [];
  let leftIndex = 0;
  let rightIndex = 0;
  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      result.push(left[leftIndex]);
      leftIndex++;
    } else {
      result.push(right[rightIndex]);
      rightIndex++;
    }
  }
  // console.log(left, right)
  return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}

// const answer = mergeSort(numbers);
// console.log(answer);

function mergeSort2(arr) {
  // base case: if the array has 0 or 1 elements, it is already sorted
  if (arr.length <= 1) {
    return arr;
  }

  // divide the array into two halves
  let middleIndex = Math.floor(arr.length / 2);
  let leftHalf = arr.slice(0, middleIndex);
  let rightHalf = arr.slice(middleIndex);

  // recursively sort the left and right halves
  let leftSorted = mergeSort2(leftHalf);
  let rightSorted = mergeSort2(rightHalf);

  // merge the sorted halves
  let merged = [];
  let i = 0;
  let j = 0;
  while (i < leftSorted.length && j < rightSorted.length) {
    if (leftSorted[i] < rightSorted[j]) {
      // if the left element is smaller, add it to the merged array and move to the next left element
      merged.push(leftSorted[i]);
      i++;
    } else {
      // if the right element is smaller, add it to the merged array and move to the next right element
      merged.push(rightSorted[j]);
      j++;
    }
  }

  // add any remaining elements from the left or right array to the merged array
  merged = merged.concat(leftSorted.slice(i)).concat(rightSorted.slice(j));

  // return the merged array
  return merged;
}

console.log(mergeSort2(numbers));
