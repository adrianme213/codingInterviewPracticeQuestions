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

  get(idx) {
    if (idx < 0 || idx > this.length) return null
    else if (this.length === idx) return this.tail;

    let count = 0;
    let arrowPointer = this.head;

    while (count < this.length) {
      arrowPointer = arrowPointer.next;
      count++
    }

    return arrowPointer;
  }

  insert(idx, val) {
    if (idx < 0 || idx > this.length) return false;
    const prev = this.get(idx-1);
    const nodeToMoveForward = this.get(idx);

    if (this.length === 0) {
      this.unshift(val)
    } else {
      const newNode = new Node(val);
      prev.next = newNode;
      newNode.next = nodeToMoveForward;
      this.length++
    }
    return true;
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

  remove(idx) {
    if (this.length < 0 || idx > this.length) return null
    else if (idx === this.length) return this.pop()
    else if (idx === 0) return this.shift()
    const nodeToRemove = this.get(idx);
    const previousNode = this.get(idx-1);
    previusNode.next = nodeToRemove.next;
    nodeToRemove.next = null;
    this.length--;

    return nodeToRemove;
  }

  reverse() {
    let previousNode = null;
    let currentNode = this.head;
    const finalEnd = this.head;
    while(currentNode !== null) {
      const currentNodeNext = currentNode.next;
      currentNode.next = previousNode;
      previousNode = currentNode;
      currentNode = currentNodeNext;
    }
    this.tail = finalEnd;
    this.head = previousNode;

    return this;
  }

  set(idx, val) {
    const foundNode = this.get(idx);
    if (foundNode === null) return false;
    foundNode.val = val;
    return true;
  }

  shift() {
    if (this.length === 0) return null;

    const nextHead = this.length === 1 ? null : this.head.next;
    this.tail = this.length === 1 ? null : this.tail;

    const nodeToShift = this.head;
    this.head = nextHead;
    this.length--;
    if (nodeToShift !== null) nodeToShift.next = null;

    return nodeToShift
  }

  unshift(val) {
    if (this.length === 0) {
      return this.push(val)
    }

    const newHead = new Node(val);
    newHead.next = this.head;
    this.head = newHead;
    this.length++;

    return newHead;
  }
}
