function arrayDiff(a, b) {
  return a.filter((val) => !b.includes(val));
}

console.log(arrayDiff([1, 2, 2, 2, 3], []));
