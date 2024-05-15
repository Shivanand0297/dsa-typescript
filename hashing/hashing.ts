/**
 * @summary find the number of times the element present in the givin array
 * @example array1 = [1, 3, 2, 4, 1, 4] you should be able to lookup the element counts it it given that
 * array element is not greater then 5
 */
function findElementCounts(array1: number[], elementToCount: number): number {
  let hashArray: number[] = new Array(5).fill(0);
  array1.forEach((element) => {
    hashArray[element] += 1;
  });

  console.log(hashArray);
  return hashArray[elementToCount];
}

// console.log(findElementCounts([1, 3, 2, 4, 1, 4], 4))

// !but this is not good and have limitations in case when the array elements are negative

/**
 * @summary find the number of times the character present in the given string
 * @example string = "shivanand" you should be able to lookup the character counts in the string;
 */

/**
 * Calculates the count of a specific character in a given string.
 * @param str - The input string.
 * @param char - The character to count.
 * @returns The count of the character in the string.
 */
function findCharacterCount(str: string, char: string): number {
  let hashArray: number[] = new Array(26).fill(0);

  // Iterate through each character in the string
  for (let i = 0; i < str.length; i++) {
    // Increment the count of the character in the hashArray
    hashArray[str.charCodeAt(i) - "a".charCodeAt(0)] += 1;
  }

  console.log(hashArray); // Print the hashArray for debugging purposes

  // Return the count of the specified character
  return hashArray[char.charCodeAt(0) - "a".charCodeAt(0)];
}

// console.log(findCharacterCount("shivanand", "i"))

function numberHash(array: number[], target: number) {
  let numberMap = new Map<number, number>();
  array.forEach((element) => {
    numberMap.set(element, (numberMap.get(element) || 0) + 1);
  });

  console.log(numberMap);

  if (numberMap.has(target)) {
    return numberMap.get(target);
  } else {
    return 0;
  }
}

// console.log(numberHash([1, 2, 2, 5, 6, 2], 2));

function findHighAndLowFreq(array: number[]) {
  let highFreqCount = 0;
  let highFreqKey = 0;
  let lowFreqCount = 0;
  let lowFreqKey = 0;
  let numberMap = new Map<number, number>();
  array.forEach((element) => {
    numberMap.set(element, (numberMap.get(element) || 0) + 1);
  });

  numberMap.forEach((value, key) => {
    if (value > highFreqCount) {
      highFreqCount = value;
      highFreqKey = key;
    } else {
      lowFreqCount = value;
      lowFreqKey = key;
    }
  });

  return { lowFreqKey, highFreqKey }
}

findHighAndLowFreq([1, 2, 1, 3, 2, 4, 1, 3])