//return the total number of smiling faces in the array
//Valid smiley face examples: :) :D ;-D :~)

function countSmileys(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (
      arr[i] === ":)" ||
      arr[i] === ":-)" ||
      arr[i] === ":~)" ||
      arr[i] === ";)" ||
      arr[i] === ";-)" ||
      arr[i] === ";~)"
    ) {
      newArr.push(arr[i]);
    } else if (
      arr[i] === ":D" ||
      arr[i] === ";-D" ||
      arr[i] === ";~D" ||
      arr[i] === ":-D" ||
      arr[i] === ";D" ||
      arr[i] === ":~D"
    ) {
      newArr.push(arr[i]);
    }
  }

  return newArr.length;
}

console.log(countSmileys([";~)", ":)", ":-)", ":--)"]));
