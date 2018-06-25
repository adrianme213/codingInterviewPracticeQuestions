// Space: O(1), Time: O(n + m)
const getTailAndSize = (list = null) => {
  if (list === null) { return null }
  let temp = list;
  let size = 0;
  let last;
  while (temp !== null) {
    size++;
    last = temp;
    temp = temp.next;
  }
  return {size, last};
}

const linkedListIntersection = (L1, L2) => {
  const result1 = getTailAndSize(L1);
  const result2 = getTailAndSize(L2);

  if (result1.last !== result2.last) {
    return null
  }

  let longer = result1.size > result2.size ? L1 : L2;
  let shorter = result1.size > result2.size ? L2 : L1;
  const difference = result1.size > result2.size ? result1.size-result2.size : result2.size-result1.size;

  for (let ii = 0; ii < difference; ii++) {
    longer = longer.next;
  }

  while (longer !== shorter) {
    longer = longer.next;
    shorter = shorter.next;
  }

  return longer;
}
