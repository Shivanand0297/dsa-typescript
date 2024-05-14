// Print name n times

/**
 * Prints name `times` number of times, starting from `num`.
 *
 * @param num - The starting number.
 * @param times - The number of times to print the string.
 * @returns void
 */
const printNtimes = (num: number, times: number) => {
  // base condition
  if (num > times) {
    return;
  }

  console.log("shivanand" + num);
  printNtimes(num + 1, times);
};

// const result = printNtimes(1, 5);
// console.log(result);
// TC -> o(n)
// SC -> o(n)

/**
 * Prints numbers from 1 to the specified number.
 *
 * @param count - The current number to print.
 * @param number - The maximum number to print.
 */
function printNumbers(count: number, number: number) {
  if (count > number) {
    return;
  }
  console.log(count);
  printNumbers(count + 1, number);
}

// console.log(printNumbers(1, 7));

function printNumbersByBacktracking(count: number, number: number) {
  if (count < 1) {
    return;
  }
  printNumbersByBacktracking(count - 1, number);
  console.log(count); /// this will not excute until the above function call is finished;
}

// printNumbersByBacktracking(5, 5)

function printReverseNumbersByBacktracking(count: number, number: number) {
  if (count > number) {
    return;
  }
  printReverseNumbersByBacktracking(count + 1, number);
  console.log(count);
}

// printReverseNumbersByBacktracking(1, 5)

// paramaterised way
function sumOfFirstNaturalNum(i: number, sum: number) {
  if (i < 1) {
    console.log("sum: ", sum);
    return;
  }
  sumOfFirstNaturalNum(i - 1, sum + i);
  // sum = sum + i;
  // console.log("sum", sum);
}

// sumOfFirstNaturalNum(6, 0) // 5 + 4 + 3 + 2 + 1

function sumOfFirstNaturalNumber(num: number): number {
  if (num === 0) {
    return 0;
  } else {
    return num + sumOfFirstNaturalNumber(num - 1);
  }
}

// console.log(sumOfFirstNaturalNumber(5))

function factorialOfNumber(num: number): number {
  if (num === 0) {
    return 1;
  } else {
    return num * factorialOfNumber(num - 1);
  }
}

// console.log(factorialOfNumber(4));  //? 4 + f(3) + f(2) + f(1) + f(0)

function swap<T>(array: T[], a: number, b: number) {
  // 1, 2
  let tempElement = array[a]; // 1
  array[a] = array[b]; // 2
  array[b] = tempElement; //1

  // a = a + b; // 1 + 2 = 3
  // b = a - b; // 3 - 2 = 1
  // a = a - b;  // 3 - 1 = 2
}

let array = [1, 2, 3, 4, 5];
function reverseArray<T>(index: number, array: T[]) {
  if (index >= array.length / 2) {
    return;
  }

  swap<T>(array, index, array.length - 1 - index);
  reverseArray(index + 1, array);
}

// reverseArray(0, array);
// console.log("reversed array", array);


function checkPalindrom (str: string, i: number): boolean {
  
  // we can also use Math.floor() to skip the last step
  if(i >= str.length / 2) {
    return true;
  }

  // repeatative task
  if (str[i] !== str[str.length - 1 - i]) {
    return false;
  }

  return checkPalindrom(str, i + 1);
}

// console.log(checkPalindrom("11211", 0))

// 0 1 1 2 3 5 8 ...
function printFibonachi (index: number): number {
  if(index <= 1) {
    return index;
  }

  let lastfibonachi = printFibonachi(index - 1);
  let secondLastfibonachi = printFibonachi(index - 2);
  return secondLastfibonachi + lastfibonachi;
}
console.log(printFibonachi(6))