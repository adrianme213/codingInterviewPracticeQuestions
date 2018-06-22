const insertFromEnd = (linked, n) => {
  let size = 0;
  let temp = linked;
  while (temp !== null) {
    size++;
    temp = temp.next;
  }
  if (n > size) {
    return null
  }
  temp = linked;
  for (let ii = 0; ii < size - n; ii++) {
    temp = temp.next;
  }
  return temp.value
}

const Node = function(val) {
  this.value = val || null;
  this.next = null;
}

const list1 = new Node('A');
const nodeB = list1.next = new Node('B');
const nodeC = nodeB.next = new Node('C');
const nodeD = nodeC.next = new Node('D');
const nodeE = nodeD.next = new Node('E');


console.log('TEST 1: ', insertFromEnd(list1, 2) === 'D')
console.log('TEST 2: ', insertFromEnd(list1, 1) === 'E')
console.log('TEST 3: ', insertFromEnd(list1, 6) === null)
console.log('TEST 4: ', insertFromEnd(list1, 5) === 'A')


// Time: Run time is O(2n) at most, but simplifies O(n)
// Space: Constant space O(1)
