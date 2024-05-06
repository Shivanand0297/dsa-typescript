let number = 12345;

const getNumberOfDigit = (number: number) => {
  let totalDigits = 0;
  while (number > 0) {
    // if (number % 10) {
    totalDigits++;
    // } // 5 number = 1234

    number = Math.floor(number / 10);
  }

  return totalDigits;
};

// let result = getNumberOfDigit(number);
// console.log(result);

// number = 12345 -> 54321
const toReversedNumber = (number: number): number => {
  let reversedNumber = 0;

  while (number > 0) {
    let lastDigit = number % 10; // -> 5
    reversedNumber = reversedNumber * 10 + lastDigit;
    number = Math.floor(number / 10);
  }

  return reversedNumber;
};
// O(log10(n))

const totalNumOfDigits = (number: number): number => Math.floor(Math.log10(number) + 1);

const checkPalindrom = (num: number): boolean => {
  let originalNumber = num;
  let reversedNumber = 0;

  while (num > 0) {
    let lastDigit = num % 10;
    reversedNumber = reversedNumber * 10 + lastDigit;
    num = Math.floor(num / 10);
  }
  return reversedNumber === originalNumber;
};

// let result = toReversedNumber(-1234);
// console.log(result);

const isPrime = (num: number) => {
  let factorCount = 0;
  for (let i = 1; i * i <= num; i++) {
    if (num % i === 0) {
      factorCount++;
      if ((num / i) !== i) {
        factorCount++;
      }
    }
  }
  if (factorCount === 2) {
    return true;
  } else {
    return false;
  }
};

const result = isPrime(11);
console.log("isPrime", result);
