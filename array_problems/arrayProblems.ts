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
    if(arr[i] >= arr[i-1]){
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
  let filteredArray = arr.filter((ele, index, self) => (
    self.indexOf(ele) === index
  ))

  console.log(filteredArray)
}
// brute force;
function removeDublicate2(arr: number[]) {
  let arraySet = new Set(arr);
  let i = 0;
  arraySet.forEach((value) => {
    arr[i] = value;
    i++;
  })

  console.log({arr, i})
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

  for(let j = 1; j < arr.length; j++) {
    if(arr[i] !== arr[j]){
      arr[i+1] = arr[j];
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

function leftRotateByOne (arr: number[]) {
  let firstEle = arr[0];

  for(let i = 0; i <= arr.length - 2; i++) {
    arr[i] = arr[i+1];
  }
  arr[arr.length - 1] = firstEle;

  console.log(arr)
}

leftRotateByOne([1, 2, 3, 4, 5])