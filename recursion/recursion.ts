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
  if(count < 1) {
    return;
  }
  printNumbersByBacktracking(count - 1, number);
  console.log(count); /// this will not excute until the above function call is finished;
}

// printNumbersByBacktracking(5, 5)

function printReverseNumbersByBacktracking(count: number, number: number){
  if(count > number) {
    return;
  }
  printReverseNumbersByBacktracking(count + 1, number);
  console.log(count)
}

printReverseNumbersByBacktracking(1, 5)