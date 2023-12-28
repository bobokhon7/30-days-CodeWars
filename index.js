function checkExam(array1, array2) {
  let newValue = 0;

  if (array1.length === array2.length) {
    for (let i = 0; i < array1.length; i++) {
      if (array1[i] === array2[i]) {
        newValue += 4;
      } else if (array2[i] === "") {
        newValue += 0;
      } else {
        newValue -= 1;
      }
    }
  }

  return newValue < 0 ? 0 : newValue;
}

console.log(checkExam(["a", "a", "b", "b"], ["a", "c", "b", ""]));
