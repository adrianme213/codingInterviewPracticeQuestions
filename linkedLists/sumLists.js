const Node = function(val) {
  this.value = val || null;
  this.next = null;
}

const list1 = new Node(7);
list1.next = new Node(1);
list1.next.next = new Node(6);

const list2 = new Node(5);
list2.next = new Node(9);
list2.next.next = new Node(2);

const sumLists = (l1, l2) => {
  let t1 = l1;
  const arr1 = [];
  let t2 = l2;
  const arr2 = [];

  while (t1 !== null) {
    arr1.push(t1.value);
    t1 = t1.next;
  }
  const n1 = Number(arr1.reverse().join(''));
  while (t2 !== null) {
    arr2.push(t2.value);
    t2 = t2.next;
  }
  const n2 = Number(arr2.reverse().join(''));
  const sum = n1 + n2;
  const result = new Node(Number(sum.toString()[0]));
  let temp = result;
  for (let ii = 1; ii < sum.toString().length; ii++) {
    temp.next = new Node(Number(sum.toString()[ii]));
    temp = temp.next;
  }
  return result;
}

sumLists(list1, list2);
