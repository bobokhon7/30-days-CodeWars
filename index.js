function flattenAndSort(array) {
  let newArr = array.flat().sort((a, b) => a - b);

  return newArr;
}

console.log(flattenAndSort([[3, 2, 1], [4, 6, 5], [], [9, 7, 8]]));
