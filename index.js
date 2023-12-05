function correct(string) {
  let newArr = string.split("");
  for (let i = 0; i < newArr.length; i++) {
    if (newArr[i] === "0") {
      newArr[i] = "O";
    } else if (newArr[i] === "5") {
      newArr[i] = "S";
    } else if (newArr[i] === "1") {
      newArr[i] = "I";
      //   break;
    }
  }
  return newArr.join("");
}

console.log(correct("51NGAP0RE"));
