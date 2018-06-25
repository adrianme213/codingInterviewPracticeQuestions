const deleteMiddleNodeWithList = (list, node) => {
  let temp = list;
  let prev = null;
  while (temp !== null) {
    if (temp === node && prev !== null && temp.next !== null) {
      prev.next = temp.next;
      return list;
    }
    prev = temp;
    temp = temp.next;
  }
  return list;
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
const nonFoundNode = new Node('Z')

const list1Solution = new Node('A');
const soluB = list1Solution.next = new Node('B');
const soluD = soluB.next = new Node('D');
const soluE = soluD.next = new Node('E');

const checkSolution = (list1, list2) => {
  let temp1 = list1;
  let temp2 = list2;
  while (temp1 !== null && temp2 !== null) {
    if (temp1.value !== temp2.value) {
      return false;
    }
    temp1 = temp1.next;
    temp2 = temp2.next;
  }
  if (temp1 === temp2) { return true }
  return false;
}

// Test 1
checkSolution(deleteMiddleNodeWithList(list1, nodeC), list1Solution);
// Test 2
checkSolution(deleteMiddleNodeWithList(list1, nonFoundNode), list1);

//-------------------------------------------
const deleteMiddleNode = (node) => {
  if (node === null || node.next === null) {
    return false;
  }
  const nextNode = node.next;
  node.value = nextNode.value;
  node.next = nextNode.next;
  return true;
}
const Node = function(val) {
  this.value = val || null;
  this.next = null;
}
const checkSolution = (list1, list2) => {
  let temp1 = list1;
  let temp2 = list2;
  while (temp1 !== null && temp2 !== null) {
    if (temp1.value !== temp2.value) {
      return false;
    }
    temp1 = temp1.next;
    temp2 = temp2.next;
  }
  if (temp1 === temp2) { return true }
  return false;
}

const list2 = new Node('A');
const node2B = list2.next = new Node('B');
const node2C = node2B.next = new Node('C');
const node2D = node2C.next = new Node('D');
const node2E = node2D.next = new Node('E');

const list2Solution = new Node('A');
const solu2B = list2Solution.next = new Node('B');
const solu2D = solu2B.next = new Node('D');
const solu2E = solu2D.next = new Node('E');

// Test 1
deleteMiddleNode(node2C)
checkSolution(list2, list2Solution);
