let tempArray = [1, 43, 23, 3];

// select the minimum element and swap with the first element
function selectionSort(array: number[]) {
  for (let i = 0; i <= array.length - 2; i++) {
    let mini = i;
    for (let j = i; j <= array.length - 1; j++) {
      if (array[j] < array[mini]) {
        mini = j;
      }
    }
    // swaping mini and i element
    let temp = array[mini];
    array[mini] = array[i];
    array[i] = temp;
    console.log(array);
  }

  console.log("sorted array: ", array);
}

// selectionSort(tempArray);
// O(n^2)

// select the max element and swap with the next element
function bubbleSort(array: number[]) {
  for (let i = array.length - 1; i >= 1; i--) {
    let didSwap = 0;
    for (let j = 0; j <= i - 1; j++) {
      if (array[j] > array[j + 1]) {
        let temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
        didSwap = 1;
      }
    }
    if (didSwap === 0) {
      break;
    }
  }

  console.log("bubbleSort array", array);
}

// bubbleSort(tempArray)
// time complexity
// best: O(n)
// worst, average: O(n^2)

// take elment one by one and ask is it in the correct postion
// takes an element and place it in its correct position
// just go to the left and swap till it is possible to swap (nums[left] > nums[right])
function insertionSort(array: number[]) {
  for (let i = 0; i <= array.length - 1; i++) {
    let j = i;
    while (j > 0 && array[j - 1] > array[j]) {
      let temp = array[j - 1];
      array[j - 1] = array[j];
      array[j] = temp;
      j--;
    }
  }

  console.log("insertion sort:", array);
}

// insertionSort(tempArray);
// time complexity
// best: O(n)
// worst, average: O(n^2)

let arrayToSort = [12, 43, 56, 4, 7, 9, 12, -3];

//! divide and merge
function mergeSort(array: number[], low: number, high: number) {
  if (low >= high) return; // or low === high

  let mid = Math.floor((low + high) / 2);

  mergeSort(array, low, mid);
  mergeSort(array, mid + 1, high);

  function merge(low: number, mid: number, high: number) {
    let left = low;
    let right = mid + 1;
    let temp: number[] = [];

    while (left <= mid && right <= high) {
      if (array[left] <= array[right]) {
        temp.push(array[left]);
        left++;
      } else {
        temp.push(array[right]);
        right++;
      }
    }

    while (left <= mid) {
      temp.push(array[left]);
      left++;
    }

    while (right <= high) {
      temp.push(array[right]);
      right++;
    }

    // putting the sorted elements from the temp array into the original array
    for (let i = low; i <= high; i++) {
      array[i] = temp[i - low];
    }
  }
  // merge
  merge(low, mid, high);
}

// TC: best, average, worst -> O(n log(n))
// SC: O(n)
mergeSort(arrayToSort, 0, arrayToSort.length - 1);
// console.log("sorted array: ", arrayToSort)

//? ===========================================================//

/**
 * Returns the partition index of an array using the QuickSort algorithm.
 * 
 * @param array - The array to partition.
 * @param low - The starting index of the partition.
 * @param high - The ending index of the partition.
 * @returns The partition index.
 */
function getPartitionIndex(array: number[], low: number, high: number): number {
  let i = low;
  let j = high;
  let pivotElement = array[low];

  while (i < j) {

    // find first element greater then the pivot
    while (array[i] <= pivotElement && i <= high - 1) {
      i++;
    }

    // find first element lesser then the pivot
    while (array[j] > pivotElement && j >= low + 1) {
      j--;
    }

    if (i < j) {
      // swaping i and j;
      let temp = array[j];
      array[j] = array[i];
      array[i] = temp;
    }
  }

  // swap the pivot and j
  let temp = array[low];
  array[low] = array[j];
  array[j] = temp;
  return j;
}

/**
 * Sorts an array of numbers using the Quick Sort algorithm.
 * 
 * @param {number[]} array - The array to be sorted.
 * @param {number} low - The starting index of the subarray to be sorted.
 * @param {number} high - The ending index of the subarray to be sorted.
 * 
 * @description:
 * 1. Pick a pivot element (any element for simplicity we take first element) and place it in its correct order in the sorted array
 * 2. Smaller on the left and larger on the right
 * 3. repeat step 1 and 2
 * ! Devide and Conqueror algorithm
 */
function quickSort(array: number[], low: number, high: number) {
  if (low < high) {
    let pIndex = getPartitionIndex(array, low, high);
    quickSort(array, low, pIndex - 1);
    quickSort(array, pIndex + 1, high);
  }
}

quickSort(arrayToSort, 0, arrayToSort.length - 1);

// TC: O(nlogn)
// SC: O(1)
console.log("sorted array: ", arrayToSort)

// ?====================================================================//
