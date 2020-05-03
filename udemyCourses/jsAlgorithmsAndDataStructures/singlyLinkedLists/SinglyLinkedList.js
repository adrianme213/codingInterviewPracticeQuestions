// Node Setup
class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

// Linked List
class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  pop() {
    if (this.length === 0) return null;
    else if (this.length === 1) {
      const nodeToPop = this.head;
      this.head = null;
      this.tail = null;
      this.length = 0;
      return nodeToPop
    }

    let prev = null;
    let current = this.head;
    while (current.next !== null) {
      prev = current;
      current = current.next;
    }
    const nodeToPop = current;
    prev.next = null;
    this.tail = prev;
    this.length--;

    return nodeToPop;
  }

  push(val) {
    const newNode = new Node(val);

    if (this.tail === null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;

    return this;
  }
}

var list = new LinkedList();
list.push(1);
list.push(2);
var apple = list.push(3);

var shouldBeThree = list.pop();
var shouldBeTwo = list.pop();
var shouldBeOne = list.pop();
var shouldBeNull = list.pop();
