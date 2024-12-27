// Print x n number of times.

const printNumberOfTimes = <T>(x: T, n: number) => {
  if (n === 0) return;
  console.log(x);
  printNumberOfTimes(x, n - 1);
};

// printNumberOfTimes(4, 3);

// Print number 1 to n

const printNumbers = (i: number, n: number) => {
  if (i > n) return;

  console.log(i);
  printNumbers(i + 1, n);
};

// printNumbers(1, 5);

const printNumberWithouti = (n: number) => {
  if (n === 0) return;
  printNumberWithouti(n - 1);
  console.log(n);
};

// printNumberWithouti(5);

function printSum(i: number, n: number, sum: number) {
  // base condition
  if (i > n) return;

  // console.log(i); //do your job
  sum = sum + i;
  console.log({ sum, i });
  printSum(i + 1, 5, sum);

  // return sum;
}

// printSum(1, 5, 0);

// function that returns me the sum;
const returnsSum = (i: number, n: number): number => {
  if (i > n) return 0;
  return i + returnsSum(i + 1, n);
};

// console.log(returnsSum(1, 3));

class Solution {
  NnumbersSum(N: number): number {
    //your code goes here
    if (N === 0) return 0;
    return N + this.NnumbersSum(N - 1);
  }
}

// console.log(new Solution().NnumbersSum(3))

// [4, 2, 10]
class ArraySum {
  arraySum(nums: number[]): number {
    //your code goes here
    if (nums.length === 0) return 0;
    return nums[nums.length - 1] + this.arraySum(nums.slice(0, -1));
  }

  arraySum2(i: number, nums: number[]): number {
    //your code goes here
    if (i === nums.length - 1) return nums[nums.length - 1];
    return nums[i] + this.arraySum2(i + 1, nums);
  }
}

console.log("sdf",new ArraySum().arraySum2(0, [5, 3, 4]));
