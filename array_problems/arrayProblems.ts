//? Problem Statement: Given an array, we have to find the largest element in the array.

let exampleArray = [3, 4, 2, 44, 5, 2, -5];

function findLargestElement(array: number[]): number {
  let largestEle = array[0];

  for (let i = 0; i < array.length; i++) {
    if (array[i] > largestEle) {
      largestEle = array[i];
    }
  }

  return largestEle;
}

// let result = findLargestElement(exampleArray);
// console.log("largest element", result);

// ? Problem Statement: Given an array, find the second smallest and second largest element in the array.
// Print ‘-1’ in the event that either of them doesn’t exist.

function findSecondSmallAndLargest(array: number[]) {
  let secondLarge;
  let secondSmall;
  if (array.length === 0 || array.length === 1) {
    return -1;
  }
  let sortedArray = array.sort((a, b) => a - b);
  if (sortedArray.length) {
    for (let i = sortedArray.length - 2; i >= 0; i--) {
      if (sortedArray[i] !== sortedArray[sortedArray.length - 1]) {
        secondLarge = sortedArray[i];
        break;
      }
    }
    for (let i = 0; i <= sortedArray.length - 1; i++) {
      if (sortedArray[i] !== sortedArray[0]) {
        secondSmall = sortedArray[i];
        break;
      }
    }

    return {
      secondLarge,
      secondSmall,
    };
  } else {
    return -1;
  }
}

// let result = findSecondSmallAndLargest([2, 3, 5, 1, 2, 5, 3, 6]);
// console.log(result);

function findSecondSmallAndLargest_2(array: number[]) {
  if (!array.length || array.length === 1) {
    return -1;
  }

  let largeEle = array[0];
  let secondLargeEle = -Infinity;
  let smallEle = array[0];
  let secondSmallEle = Infinity;

  // for largest element and smallest element;
  for (let i = 0; i < array.length; i++) {
    if (array[i] > largeEle) {
      largeEle = array[i];
    } else if (array[i] < smallEle) {
      smallEle = array[i];
    }
  }

  // for second largest element
  for (let i = 0; i < array.length; i++) {
    if (array[i] > secondLargeEle && array[i] !== largeEle) {
      secondLargeEle = array[i];
    }

    if (array[i] < secondSmallEle && array[i] !== smallEle) {
      secondSmallEle = array[i];
    }
  }

  console.log({ secondLargeEle, secondSmallEle });
}

// findSecondSmallAndLargest_2([1, 2, 4, 7, 7, 5])

//? Optimal solution for finding the second largest;

function findSecondLargest(array: number[]): number {
  let largest = array[0];
  let secondLargest = -Infinity;

  for (let i = 0; i < array.length; i++) {
    if (array[i] > largest) {
      secondLargest = largest;
      largest = array[i];
    } else if (array[i] < largest && array[i] > secondLargest) {
      secondLargest = array[i];
    }
  }
  console.log(secondLargest);
  if (secondLargest === -Infinity) {
    return -1;
  }
  return secondLargest;
}

// findSecondLargest([1, 2, 4, 7, 7, 5])

function isSorted(arr: number[]): boolean {
  for (let i = 1; i <= arr.length - 1; i++) {
    if (arr[i] >= arr[i - 1]) {
      continue;
    } else {
      return false;
    }
  }
  return true;
}

// const result = isSorted([1, 2, 3, 4, 7, 7, 2])
// console.log("isSorted", result)

// ========================================================//
// ? Remove dublicate in place from sorted array;
// ? arr = [2, 3, 4, 5, 2, 3, 1]
function removeDublicate(arr: number[]) {
  let filteredArray = arr.filter((ele, index, self) => self.indexOf(ele) === index);

  console.log(filteredArray);
}
// brute force;
function removeDublicate2(arr: number[]) {
  let arraySet = new Set(arr);
  let i = 0;
  arraySet.forEach((value) => {
    arr[i] = value;
    i++;
  });

  console.log({ arr, i });
}

// Note: Optimal solution TC: O(n) SC: O(1)
function removeDublicate3(arr: number[]) {
  let i = 0;
  // while(i < arr.length && j < arr.length){
  //   if(arr[i] !== arr[j]){
  //     arr[i+1] = arr[j];
  //     i++;
  //   }
  //   j++;
  // }

  for (let j = 1; j < arr.length; j++) {
    if (arr[i] !== arr[j]) {
      arr[i + 1] = arr[j];
      i++;
    }
  }

  // console.log({arr, unique: i+1})
  return i + 1;
}

// removeDublicate3([1, 2, 2, 3, 3])

// ===================================================================//

// ? Left Rotate the Array by One

// brute force;

function leftRotateByOne(arr: number[]) {
  let firstEle = arr[0];

  for (let i = 0; i <= arr.length - 2; i++) {
    arr[i] = arr[i + 1];
  }
  arr[arr.length - 1] = firstEle;

  console.log(arr);
}

// leftRotateByOne([1, 2, 3, 4, 5])

function leftRotateByK(arr: number[], k: number) {
  let tempArr: number[] = [];
  k = k % arr.length; //rotating amount can be greater then the lenght of array.
  for (let i = 0; i < k; i++) {
    tempArr.push(arr[i]); // storing the element before pivot index;
  }

  for (let j = k; j < arr.length; j++) {
    arr[j - k] = arr[j];
  }

  for (let m = arr.length - k; m < arr.length; m++) {
    arr[m] = tempArr[m - (arr.length - k)];
  }

  return arr;
}

// console.log(leftRotateByK([10, 20, 30, 40, 50], 6));

// ? Given an integer array nums, rotate the array to the right by k steps, where k is non-negative.

function rotateByKSteps(arr: number[], k: number) {
  let tempArr = [...arr];
  k = k % arr.length;

  while (k > 0) {
    for (let i = 0; i <= arr.length - 2; i++) {
      arr[i + 1] = tempArr[i];
      if (i === arr.length - 2) {
        arr[0] = tempArr[tempArr.length - 1];
      }
    }
    tempArr = [...arr];
    k--;
  }
}

// rotateByKSteps([1, 2, 3, 4, 5, 6, 7], 3); //O(k*n)

function rotateByKSteps_2(arr: number[], k: number) {
  let tempArr: number[] = [];
  let originalArr = [...arr];
  k = k % arr.length; //rotating amount can be greater then the lenght of array.
  for (let i = arr.length - k; i < arr.length; i++) {
    tempArr.push(arr[i]); // storing the second half of element to rotate;
  }

  for (let j = 0; j < arr.length - k; j++) {
    arr[j + k] = originalArr[j];
  }

  for (let m = 0; m < k; m++) {
    arr[m] = tempArr[m];
  }

  return arr;
}

//TC:O(n+k)
//SC:O(2)
// console.log(rotateByKSteps_2([1, 2, 3, 4, 5, 6, 7], 2));

// !==============================================================//

// ? Move the zero to the end
function moveZeroToEnd(arr: number[]) {
  let zeroArr: number[] = [];
  let nonZeroArr = arr.filter((num) => {
    if (num === 0) {
      zeroArr.push(num);
    }
    return num !== 0;
  });

  return [...nonZeroArr, ...zeroArr];
}

// TC: O(n)
// SC: O(n)
// console.log(moveZeroToEnd([1, 4, 0, 8, 7, 0, 5, 0, 2]));

/**
 * Moves the first encountered zero in an array to the end of the array.
 * If no zero is found, the function returns false.
 *
 * @param {number[]} arr - The array of numbers to be modified.
 * @returns {number[] | boolean} - The modified array with the first zero moved to the end, or false if no zero is found.
 */
function moveZeroToEnd_2(nums: number[]) {
  let firstZeroIndex: number = -1;

  // Find the index of the first zero in the array
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) {
      firstZeroIndex = i;
      break;
    }
  }

  // Return false if no zero is found
  if (firstZeroIndex === -1) {
    return false;
  }

  // Move the first zero to the end of the array
  for (let j = firstZeroIndex + 1; j < nums.length; j++) {
    if (nums[j] !== 0) {
      // Swap the elements at index j and firstZeroIndex
      let temp = nums[firstZeroIndex];
      nums[firstZeroIndex] = nums[j];
      nums[j] = temp;
      firstZeroIndex++;
    }
  }

  return nums;
}

// TC: O(n)
// SC: O(1)
// console.log(moveZeroToEnd_2([0, 8, 3, 2]));

// !=================================================================//

/**
 * ?Problem Statement: Given two sorted arrays, arr1, and arr2 of size n and m. Find the union of two sorted arrays.
 * @description The union of two arrays can be defined as the common and distinct elements in the two arrays.NOTE: Elements in the union should be in ascending order.
 * @example 
 * Example 1:
  Input:n = 5,m = 5.
  arr1 = [1,2,3,4,5]  
  arr2 = [2,3,4,4,5]

  Output: [1,2,3,4,5]
 */

// ? Brute force approach
function unionOfTwoArray(arr1: number[], arr2: number[]): number[] {
  let arrayUnionSet = new Set<number>([...arr1, ...arr2]);
  const newArray = Array.from(arrayUnionSet).sort((a, b) => a - b);
  return newArray;
}

// unionOfTwoArray([1, 2, 3, 4, 5, 6, 7, 11, 12], [2, 3, 4, 4, 5, 8, 9]);

/**
 * Computes the union of two sorted arrays, ensuring each element is unique in the result.
 * @param arr1 The first sorted array of numbers.
 * @param arr2 The second sorted array of numbers.
 * @returns A sorted array containing the union of the two input arrays.
 */
// ? Optimal Solution
function unionOfTwoArray_2(arr1: number[], arr2: number[]): number[] {
  let i = 0;
  let j = 0;
  let unionArray: number[] = [];

  // Process elements from both arrays until one is exhausted
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] <= arr2[j]) {
      // Add arr1[i] to unionArray if it's not already present at the end of the array
      if (unionArray.length === 0 || unionArray[unionArray.length - 1] !== arr1[i]) {
        unionArray.push(arr1[i]);
      }
      i++;
    } else {
      // Add arr2[j] to unionArray if it's not already present at the end of the array
      if (unionArray.length === 0 || unionArray[unionArray.length - 1] !== arr2[j]) {
        unionArray.push(arr2[j]);
      }
      j++;
    }
  }

  // Add remaining elements from arr2
  while (j < arr2.length) {
    if (unionArray.length === 0 || unionArray[unionArray.length - 1] !== arr2[j]) {
      unionArray.push(arr2[j]);
    }
    j++;
  }

  // Add remaining elements from arr1
  while (i < arr1.length) {
    if (unionArray.length === 0 || unionArray[unionArray.length - 1] !== arr1[i]) {
      unionArray.push(arr1[i]);
    }
    i++;
  }

  console.log({ unionArray });
  return unionArray;
}

// unionOfTwoArray_2([1, 2, 3, 4, 5, 6], [3, 4, 6]);

// !====================================================================================//

/**
 * ?Problem Statement: Given two *sorted* arrays, arr1, and arr2 of size n and m. Find the intersection of two sorted arrays.
 * @description The intersection of two arrays can be defined as the common elements and can have dublicates in the two arrays.NOTE: Elements in the intersection should be in ascending order.
 * @example 
 * Example 1:
  Input:n = 5,m = 5.
  arr1 = [1, 2, 3, 4, 5, 6, 6]  
  arr2 = [2, 3, 4, 4, 5, 6, 6]

  Output: [2, 3, 4, 5, 6, 6]
 */

function intersectionOfTwoArrays(arr1: number[], arr2: number[]): number[] {
  let intersectionArr: number[] = [];
  let visitedArray: number[] = new Array(arr2.length).fill(0);
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      // if arr2[j] > arr1[i] there is no point checking furthor;
      if (arr2[j] > arr1[i]) {
        break;
      }

      if (arr1[i] === arr2[j] && visitedArray[j] === 0) {
        intersectionArr.push(arr1[i]);
        visitedArray[j] = 1;
        break;
      }
    }
  }

  console.log({ intersectionArr });
  return intersectionArr;
}

// TC: O(m*n)
// SC: O(n) | O(m)
// intersectionOfTwoArrays([1, 2, 3, 4, 4], [2, 3, 4])

// ? Optimal (arrays must be sorted)
function intersectionOfTwoArrays_2(arr1: number[], arr2: number[]): number[] {
  let i = 0;
  let j = 0;
  let intersectionArray: number[] = [];

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      i++;
    } else if (arr2[j] < arr1[i]) {
      j++;
    } else {
      intersectionArray.push(arr1[i]);
      i++;
      j++;
    }
  }

  return intersectionArray;
}

console.log(intersectionOfTwoArrays_2([1, 2, 2, 3, 3, 4, 5, 6], [2, 3, 3, 5, 6, 6, 7]));
