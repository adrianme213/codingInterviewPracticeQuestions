// Naive String Search - find substring count in string
var naiveStringSearch = (longStr, sub) => {
  if (sub.length === 0 || longStr.length === 0) return 0

  let result = 0;
  const firstLetterMatchIndices = [];
  for(let ii = 0; ii <= longStr.length-sub.length; ii++) {
    if (longStr[ii] === sub[0]) {
      firstLetterMatchIndices.push(ii);
    }
  }
  console.log(' =========== ', firstLetterMatchIndices)
  for (let idxStart = 0; idxStart < firstLetterMatchIndices.length; idxStart++) {
    let from = firstLetterMatchIndices[idxStart];
    let to = firstLetterMatchIndices[idxStart]+sub.length;
    if (longStr.slice(from,to) === sub) {
      result++
    }
  }
  return result;
}

console.log(' should return 2 ', naiveStringSearch('wowomgzomg', 'omg'))
