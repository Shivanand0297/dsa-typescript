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

// TC: O(n + m)
// SC: O(1) | O(n + m) in the worst case to store the result the return
// console.log(intersectionOfTwoArrays_2([1, 2, 2, 3, 3, 4, 5, 6], [2, 3, 3, 5, 6, 6, 7]));

// !================================================================================//

/**
 * ?Problem Statement: Given an integer N and an array of size N-1 containing N-1 numbers between 1 to N.
 * ?Find the number(between 1 to N), that is not present in the given array.
 */

// Brute force;

function getMissingNumber_1(arr: number[], n: number) {
  for (let i = 1; i <= n; i++) {
    let flag = 0;
    for (let j = 0; j < arr.length; j++) {
      if (i === arr[j]) {
        flag = 1;
        break;
      }
    }

    if (!flag) {
      return i;
    }
  }
}

// TC: O(n^2)
// SC: O(1)
// console.log("missing number", getMissingNumber_1([1, 2, 4], 4));

function getMissingNumber_2(arr: number[], n: number) {
  let hashArray = new Array(n + 1).fill(0);
  for (let i = 0; i < arr.length; i++) {
    hashArray[arr[i]] = 1;
  }

  for (let j = 1; j < hashArray.length; j++) {
    if (hashArray[j] === 0) {
      return j;
    }
  }
}

// TC: O(2n)
// SC: O(n+1)
// console.log("missing number: ", getMissingNumber_2([1, 2, 4], 4))

// Optimal;
function getMissingNumber_3(arr: number[], n: number) {
  // find the sum of n natural number;
  if (n < 0) return;
  if (arr.length >= n) return;

  let sum = (n * (n + 1)) / 2;
  let sumOfGivenArray = arr.reduce((prev, curr) => prev + curr);
  return sum - sumOfGivenArray;
}

// TC: O(n)
// SC: O(1)
// console.log(getMissingNumber_3([1, 3], 3))

// !=========================================================================//

/**
 * ?Problem Statement: Given an array that contains only 1 and 0 return the count of maximum consecutive ones in the array.
 *
 */

/**
 * Calculates and prints the maximum number of consecutive 1's in an array.
 * @param arr The array of numbers to be analyzed.
 */
function maxConsecutiveOne(arr: number[]) {
  let count = 0; // Current count of consecutive 1's
  let maxCountArray: number[] = []; // Array to store counts of consecutive 1's

  // Loop through the array to count consecutive 1's
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 1) {
      count++; // Increment count if current element is 1
    } else {
      maxCountArray.push(count); // Store current count and reset
      count = 0;
    }
  }

  // Check for the last sequence of 1's
  if (count > 0) {
    maxCountArray.push(count);
  }

  if (maxCountArray.length) {
    // Sort the counts in descending order to find the maximum count
    maxCountArray.sort((a, b) => b - a);
    console.log("count: ", maxCountArray[0]); // Print the maximum count of consecutive 1's
  } else {
    console.log("count: ", count);
  }
}

// maxConsecutiveOne([0, 0, 0, 0, 0, 1]);

function maxConsecutiveOne_2(arr: number[]) {
  let count = 0; // Current count of consecutive 1's
  let max = 0;

  // Loop through the array to count consecutive 1's
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 1) {
      count++; // Increment count if current element is 1
      max = Math.max(max, count);
    } else {
      count = 0;
    }
  }

  console.log("count", max);
}

// TC: O(n)
// maxConsecutiveOne_2([1, 1, 0, 1, 1, 1])

// !=========================================================================//

/**
 * ?Problem Statement: Given a non-empty array of integers arr, every element appears twice except for one. Find that single one.
 *
 */

function numberAppearOnce_1(nums: number[]) {
  for (let i = 0; i < nums.length; i++) {
    let count = 0;
    for (let j = 0; j < nums.length; j++) {
      if (nums[i] === nums[j]) {
        count++;
      }
    }
    if (count < 2) {
      return nums[i];
    }
  }
}

// TC: O(n^2)
// SC: O(1)
// console.log("number appears once", numberAppearOnce_1([4,1,2,1,2]))

function numberAppearOnce_2(nums: number[]) {
  // find the maximum of the given array
  let max = nums[0];

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > max) {
      max = nums[i];
    }
  }

  let hashArray = new Array(max + 1).fill(0);

  for (let j = 0; j < nums.length; j++) {
    hashArray[nums[j]]++;
  }

  for (let k = 0; k < nums.length; k++) {
    if (hashArray[nums[k]] === 1) {
      return nums[k];
    }
  }
}

// TC: O(n)
// SC: O(max ele +1)
// console.log(numberAppearOnce_2([1, 1, 2]));

function numberAppearOnce_3(nums: number[]) {
  let numberMap = new Map<number, number>();
  nums.forEach((element) => {
    numberMap.set(element, (numberMap.get(element) || 0) + 1);
  });

  for (let [key, value] of numberMap) {
    if (value === 1) {
      return key;
    }
  }
}

// TC: O(n + m) n -> array.length m -> (n/2) + 1
// SC: O(m)
// console.log(numberAppearOnce_3([1, 1, 2]));

function numberAppearOnce_4(nums: number[]) {
  let xor = 0;
  for (let i = 0; i < nums.length; i++) {
    xor = xor ^ nums[i]; // (m ^ m) = 0; (m ^ 0) = m
  }

  return xor;
}

// TC: O(n)
// SC: O(1)
// console.log(numberAppearOnce_4([4, 1, 2, 1, 2]));

// !=========================================================================//

/**
 * ? Longest Subarray with given Sum K(Positives)
 * @example
 * Example 1:
 * Input Format: N = 3, k = 5, array[] = {2,3,5}
 * Result: 2
 * Explanation: The longest subarray with sum 5 is {2, 3}. And its length is 2.
 * Example 2:
 * Input Format: N = 5, k = 10, array[] = {2,3,5,1,9}
 * Result: 3
 * Explanation: The longest subarray with sum 10 is {2, 3, 5}. And its length is 3.
 */

// brute
function longestSubArrayWithSumK_1(arr: number[], k: number) {
  let maxLength = 0;
  for (let i = 0; i < arr.length; i++) {
    let sum = 0;
    for (let j = i; j < arr.length; j++) {
      sum += arr[j];

      if (sum === k) {
        maxLength = Math.max(maxLength, j - i + 1);
      }
    }
  }
  console.log("maxLength", maxLength);
}

// TC: O(n^2)
// SC: O(1)
// longestSubArrayWithSumK_1([2, 3, 5, 1, 9], 10);

// ! also works array with zero and negative numbers;
function longestSubArrayWithSumK_2(arr: number[], k: number) {
  let sum = 0;
  let maxLength = 0;
  let preSumMap = new Map<number, number>();

  // loop and find the sum of subarray;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];

    // if sum = k then update the maxLength
    if (sum === k) {
      maxLength = Math.max(maxLength, i + 1);
    }

    let remSum = sum - k;

    // calculate the length and update maxLength
    if (preSumMap.has(remSum)) {
      let previousIndex = preSumMap.get(remSum);
      if (previousIndex !== undefined) {
        // Ensure the value is not undefined
        let len = i - previousIndex;
        maxLength = Math.max(maxLength, len);
      }
    }

    // only add the sum in the array if it is not present
    // because if array has 0's in it then sum in the preSumMap will get updated;
    // and we would end up with the minimum subarray with the sum k but we want longest subarray with sum k;
    if (!preSumMap.has(sum)) {
      preSumMap.set(sum, i);
    }
  }

  return maxLength;
}

// TC: O(n)
// SC: O(n)
// console.log(longestSubArrayWithSumK_2([1, 2, 0, -2, -1, 6, 1], 3));

// ! for array with 0's and positive numbers
function longestSubArrayWithSumK_3(arr: number[], k: number) {
  let left = 0,
    right = 0;
  let sum = arr[0];
  let maxLength = 0;

  while (right < arr.length) {
    right++;
    if (right < arr.length) {
      sum += arr[right];
    }

    if (sum === k) {
      maxLength = Math.max(maxLength, right - left + 1);
    }

    // if sum > k, reduce the subarray from left
    // until sum becomes less or equal to k
    while (left <= right && sum > k) {
      sum -= arr[left];
      left++;
    }
  }

  return maxLength;
}

// TC: O(2n)
// SC: O(1)
// Reason: The outer while loop i.e. the right pointer can move up to index n-1(the last index).
// Now, the inner while loop i.e. the left pointer can move up to the right pointer at most.
// So, every time the inner loop does not run for n times rather it can run for n times in total.
// So, the time complexity will be O(2*N) instead of O(N2).
// console.log(longestSubArrayWithSumK_3([1, 2, 3, 0, 0, 0, 0, 6, 3], 6));

// !=========================================================================//

/**
 * ? Problem Statement: Given an array of integers arr[] and an integer target.
 * ? 1st variant: Return YES if there exist two numbers such that their sum is equal to the target. Otherwise, return NO.
 * ? 2nd variant: Return indices of the two numbers such that their sum is equal to the target. Otherwise, we will return {-1, -1}.
 * ! Note: You are not allowed to use the same element twice. Example: If the target is equal to 6 and num[1] = 3, then nums[1] + nums[1] = target is not a solution.
 */

function twoSum_1(nums: number[], k: number) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === k) {
        // return true;
        return [i, j];
      } else {
        // return false;
        return [-1, -1];
      }
    }
  }
}

//? TC: O(n^2)
//? SC: O(1)
// console.log(twoSum_1([2, 6, 5, 8, 11], 15));

function twoSum_2(nums: number[], k: number) {
  let arrayHash = new Map<number, number>();

  for (let i = 0; i < nums.length; i++) {
    if (!arrayHash.has(k - nums[i])) {
      arrayHash.set(nums[i], i);
    } else {
      // return true;
      return [arrayHash.get(k - nums[i]), i];
    }
  }

  // return false
  return [-1, -1];
}

//? TC: O(n)
//? SC: O(n)
// console.log(twoSum_2([2, 8, 5, 6, 11], 15));

// ? greedy approach
function twoSum_3(nums: number[], k: number) {
  let left = 0;
  let right = nums.length - 1;
  let originalNums = [...nums];
  let sortedNums = nums.sort((a, b) => a - b);

  while (left < right) {
    let sum = sortedNums[left] + sortedNums[right];
    if (sum === k) {
      // return true;
      return [originalNums.indexOf(sortedNums[left]), originalNums.indexOf(sortedNums[right])];
    } else if (sum < k) {
      left++;
    } else {
      right--;
    }
  }
}

//? TC: O(n + nlogn)
//? SC: O(n)
// console.log(twoSum_3([2, 6, 5, 8, 11], 14));

// !=====================================================================//

/**
 * ? Sort an array of 0s, 1s and 2s
 * ? Problem Statement: Given an array consisting of only 0s, 1s, and 2s.
 * ? Write a program to in-place sort the array without using inbuilt sort functions.
 * ? (Expected: Single pass-O(N) and constant space)
 */

// 1. Merge sort -> TC: (nlogn) SC: O(n) but we need TC: O(n) and SC: (1)
// 2. better solution

function sortZeroOneAndTwo(nums: number[]) {
  let zeroCounts = 0,
    oneCounts = 0,
    twoCounts = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) {
      zeroCounts++;
    } else if (nums[i] === 1) {
      oneCounts++;
    } else {
      twoCounts++;
    }
  }

  for (let i = 0; i < zeroCounts; i++) {
    nums[i] = 0;
  }

  for (let i = zeroCounts; i < zeroCounts + oneCounts; i++) {
    nums[i] = 1;
  }

  for (let i = zeroCounts + oneCounts; i < zeroCounts + oneCounts + twoCounts; i++) {
    nums[i] = 2;
  }

  console.log(nums);
}

// TC: O(2n)
// SC: O(1)
// sortZeroOneAndTwo([1, 1, 0, 2, 0, 1]);

/**
 * Here, as the entire array is unsorted, we have placed the mid pointer in the first index
 * and the high pointer in the last index. The low is also pointing to the first index as we have no other index before 0.
 * Here, we are mostly interested in placing the ‘mid’ pointer and the ‘high’ pointer as they represent the unsorted part in the hypothetical array.
 */

// !Dutch falg algorithm
function sortZeroOneAndTwo_2(nums: number[]) {
  let low = 0,
    mid = 0,
    high = nums.length - 1;

  function swap(i: number, j: number) {
    let temp = nums[i];
    nums[i] = nums[j];
    nums[j] = temp;
  }

  while (mid <= high) {
    if (nums[mid] === 0) {
      swap(low, mid);
      low++;
      mid++;
    } else if (nums[mid] === 1) {
      mid++;
    } else {
      swap(mid, high);
      high--;
    }
  }

  console.log(nums);
}

// TC: O(n)
// SC: O(1)
// sortZeroOneAndTwo_2([1, 2, 0, 1, 2, 0]); //! Can also work for any number k, l, m

//! =========================================================================================//

/**
 * ! Problem Statement:
 * ? Given an array of N integers, write a program to return an element that occurs more than N/2 times in the given array.
 * ? You may consider that such an element always exists in the array.
 */

function findMajorityElement_1(nums: number[]) {
  let arrayHash = new Array(nums.length + 1).fill(0);
  let maxElement = 0;

  for (let i = 0; i < nums.length; i++) {
    arrayHash[nums[i]]++;
  }

  console.log(arrayHash);
  for (let j = 0; j < arrayHash.length; j++) {
    if (arrayHash[j] > maxElement) {
      maxElement = arrayHash[j];
    }
  }

  return arrayHash.indexOf(maxElement);
}

// TC: O(3n)
// SC: O(n)
// console.log(findMajorityElement_1([4,4,2,4,3,4,4,3,2,4]));

function findMajorityElement_2(nums: number[]) {
  let arrayMap = new Map<number, number>();
  for (let i = 0; i < nums.length; i++) {
    arrayMap.set(nums[i], (arrayMap.get(nums[i]) || 0) + 1);
  }

  for (const [key, value] of arrayMap) {
    if (value > nums.length / 2) {
      return key;
    }
  }
}

// TC: O(2n)
// SC: O(n)
// console.log(findMajorityElement_2([4, 4, 2, 4, 3, 4, 4, 3, 2, 4]));

//! Moore’s Voting Algorithm
function findMajorityElement_3(nums: number[]) {
  let majorityElement = nums[0];
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    if (count === 0) {
      majorityElement = nums[i];
    }

    if (nums[i] === majorityElement) {
      count++;
    } else {
      count--;
    }
  }

  let scount = 0;

  // verifing if the majority element is appearing more then n/2
  // ! if the problem tells that there always exists a majority element then this check is not required;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === majorityElement) {
      scount++;
    }
  }

  if (scount > nums.length / 2) {
    return majorityElement;
  }

  return -1;
}

// TS: O(2n) or O(n)
// SC: o(1)
// console.log(findMajorityElement_3([2, 2, 1, 3, 1, 1, 3, 1, 1]));

// !==================================================================================//

/**
 * ? Problem Statement:
 * ? Given an integer array arr, find the contiguous subarray (containing at least one number) which
 * ? has the largest sum and returns its sum and prints the subarray.
 */

// brute force

function maxSubArraySum_1(nums: number[]) {
  let maxSum = -Infinity;

  for (let i = 0; i < nums.length; i++) {
    let sum = 0;
    for (let j = i; j < nums.length; j++) {
      sum += nums[j];

      if (sum > maxSum) {
        maxSum = Math.max(maxSum, sum);
      }
    }
  }

  return maxSum;
}

console.log(maxSubArraySum_1([-2, -3, 4, -1, -2, 1, 5, -3]));

// my solution
function maxSubArraySum(nums: number[]) {
  let maxEle = 0;
  let maxEleIndex = 0;
  let sumMap = new Map<number, number>();
  // find maximum element in the array

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > maxEle) {
      maxEle = nums[i];
      maxEleIndex = i;
    }
  }

  if (maxEle === 0) {
    return nums;
  }

  // going right to find sub array
  for (let i = maxEleIndex; i < nums.length; i++) {
    let sum = 0;
    for (let j = maxEleIndex; j < nums.length; j++) {
      sum += nums[j];
      sumMap.set(j, sum);
    }
  }

  // going left to find sub array
  for (let i = maxEleIndex; i >= 0; i--) {
    let sum = 0;
    for (let j = maxEleIndex; j >= 0; j--) {
      sum += nums[j];
      sumMap.set(j, sum);
    }
  }

  console.log({ sumMap });

  let maxSum = 0;
  let maxSumKey = 0;
  for (let [key, value] of sumMap) {
    if (value > maxSum) {
      maxSum = value;
      maxSumKey = key;
    }
  }

  if (maxSumKey > maxEleIndex) {
    return [maxEleIndex, maxSumKey];
  } else {
    return [maxSumKey, maxEleIndex];
  }
}

// console.log(maxSubArraySum([-2, 1, -3, 4, -1, 2, 1, -5, 4]));

// ! Kadans algorithm
function maxSubArraySum_3(nums: number[]) {
  let maxSum = -Infinity;
  let sum = 0;

  let startIndex = -1;
  let endIndex = -1;
  let start = -1

  for (let i = 0; i < nums.length; i++) {

    if(sum === 0) {
      start = i
    }

    sum += nums[i];

    if (sum > maxSum) {
      maxSum = sum;
      startIndex = start;
      endIndex = i;
    }

    if (sum < 0) {
      sum = 0;
    }
  }

  // empty subarray case [-1, -3] -> [-1] -> [] = 0
  if(maxSum < 0) {
    maxSum = 0
  }

  console.log([startIndex, endIndex])
  return maxSum;
}

maxSubArraySum_3([-2, 1, -3, 4, -1, 2, 1, -5, 4])