let tempArray = [1, 43, 23, 3];

function selectionSort(array: number[]) {
  for (let i = 0; i < array.length - 1; i++) {
    let mini = i;
    for (let j = i; j < array.length; j++) {
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

selectionSort(tempArray);
// O(n^2)
