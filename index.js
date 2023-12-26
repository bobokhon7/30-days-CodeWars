function minValue(values) {
  let remVal = Array.from(new Set(values));
  let sortValues = remVal.sort((a, b) => a - b).join("");

  return Number(sortValues);
}

//change to array
//remove the same num and sort

console.log(minValue([6, 7, 8, 7, 6, 6]));
