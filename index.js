function findNeedle(haystack) {
  let position = haystack.indexOf("needle");

  return position != -1
    ? `found the needle at position ${position}`
    : `Your function didn't return anything'`;
}

console.log(
  findNeedle(["hay", "junk", "hay", "hay", "moreJunk", , "randomJunk"])
);
