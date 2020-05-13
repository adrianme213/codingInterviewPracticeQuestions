function Node (value = null) {
  this.value = value;
  this.next = null;
}

const removeDups = (linked = null) => {
  const storage = {};
  let prev = null;
  let temp = linked;

  while (temp !== null) {
    const val = temp.value;
    if (storage[val] === true && prev) {
      prev.next = temp.next
      temp = prev.next
    } else {
      storage[val] = true
      prev = temp;
      temp = temp.next
    }
  }

  return linked;
}

const linked1 = new Node(1);
linked1.next = new Node(2);
linked1.next.next = new Node(1);
linked1.next.next.next = new Node(2);
linked1.next.next.next.next = new Node(3);

const linked2 = new Node('A');
linked2.next = new Node('B');;
linked2.next.next = new Node('C');
linked2.next.next.next = new Node('A');

const linked3 = new Node(1);
linked3.next = new Node(1);
linked3.next.next = new Node(1);
linked3.next.next.next = new Node(2);
linked3.next.next.next.next = new Node(3);
