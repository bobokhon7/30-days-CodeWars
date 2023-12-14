function rentalCarCost(d) {
  if (d >= 3 && d <= 6) {
    return d * 40 - 20;
  } else if (d >= 7) {
    return d * 40 - 50;
  } else {
    return d * 40;
  }
}

console.log(rentalCarCost(7));
