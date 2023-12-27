function factorial(n) {
  if (n < 0 || n > 12) {
    return -1;
  } else if (n === 0) {
    return 1;
  } else {
    let arr = 1;
    for (let i = 1; i <= n; i++) {
      arr = arr * i;
    }
    return arr;
  }
}

console.log(factorial(2));
