function solve(s) {
  let lowerLetter = [];
  let uppetLetter = [];

  let val = s.split("");

  for (let i = 0; i < val.length; i++) {
    if (val[i] === val[i].toUpperCase()) {
      uppetLetter.push(val[i]);
    } else {
      lowerLetter.push(val[i]);
    }
  }

  if (uppetLetter.length > lowerLetter.length) {
    return s.toUpperCase();
  } else {
    return s.toLowerCase();
  }
}

console.log(solve("cOde"));
