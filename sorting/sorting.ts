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
    console.log(array)
  }

  console.log("sorted array: ", array);
}

// selectionSort(tempArray);
// O(n^2)

// select the max element and swap with the next element
function mergeSort (array: number[]) {
  for(let i = array.length - 1; i >= 1; i--) {
    let didSwap = 0;
    for(let j = 0; j <= i - 1; j++) {
      if(array[j] > array[j+1]){
        let temp = array[j];
        array[j] = array[j+1]
        array[j+1] = temp;
        didSwap = 1;
      }
    }
    if(didSwap === 0) {
      break;
    }
  }

  console.log("mergeSort array", array)
}

mergeSort(tempArray)
// time complexity
// best: O(n)
// worst, average: O(n^2)


function insertionSort (array: number[]) {
  for(let i = 0; i <= array.length - 1; i++) {
    let j = i;
    while(j > 0 && array[j-1] > array[j]){
      let temp = array[j-1];
      array[j-1] = array[j];
      array[j] = temp;
      j--;
    }
  }

  console.log("insertion sort:", array)
}

insertionSort(tempArray);
// time complexity
// best: O(n)
// worst, average: O(n^2)

