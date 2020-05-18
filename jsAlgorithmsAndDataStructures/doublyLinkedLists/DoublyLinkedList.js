// Node Setup
class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

// Doubly Linked List
class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  get(idx) {
    if (idx < 1 || idx > this.length) return null;
    const shouldStartAtHead = this.length-idx > Math.floor(this.length/2);
    let nodeToGet = shouldStartAtHead ? this.head : this.tail;
    let counter = shouldStartAtHead ? 1 : this.length;

    if (shouldStartAtHead) {
      while (counter !== idx) {
        nodeToGet = nodeToGet.next;
        counter++;
      }
    } else {
      while (counter !== idx) {
        nodeToGet = nodeToGet.prev;
        counter--;
      }
    }

    return nodeToGet
  }

  insert(idx, val) {
    if (idx < 1 || idx > this.length) return null;
    else if (idx === 1) {
      return this.unshift(val);
    } else if (idx === this.length) {
      return this.push(val)
    }
    const nodeToInsert = new Node(val);
    const prevNode = this.get(idx-1);
    const nodeToMoveForward = this.get(idx);
    prevNode.next = nodeToInsert;
    nodeToInsert.prev = prevNode;
    nodeToInsert.next = nodeToMoveForward
    nodeToMoveForward.prev = nodeToInsert;
    this.length++;

    return nodeToInsert;
  }

  pop() {
    if (this.length === 0) return null;
    else if (this.length === 1) {
      const nodeToRemove = this.head;
      this.head = null;
      this.tail = null;
      this.length--;

      return nodeToRemove;
    }
    const nodeBeforeTail = this.tail.prev;
    const nodeToRemove = this.tail;
    nodeBeforeTail.next = null;
    this.tail = nodeBeforeTail;
    nodeToRemove.prev = null;
    this.length--;

    return nodeToRemove;
  }

  push(val) {
    const newNode = new Node(val);

    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
      this.length++;
      return this;
    }
    const nodeAtTail = this.tail;
    nodeAtTail.next = newNode;
    newNode.prev = nodeAtTail;
    this.tail = newNode;
    this.length++;

    return this;
  }

  remove(idx) {
    if (idx < 1 || idx > this.length) return null;
    else if (idx === 1) {
      return this.shift();
    } else if (idx === this.length) {
      return this.pop();
    }
    const nodeToRemove = this.get(idx);
    const prevNode = nodeToRemove.prev;
    const nodeAfter = nodeToRemove.next;
    prevNode.next = nodeAfter;
    nodeAfter.prev = prevNode;
    nodeToRemove.next = null;
    nodeToRemove.prev = null;
    this.length--;

    return nodeToRemove;
  }

  reverse() {
    const newHead = this.tail;
    const newTail = this.head;
    let arrowPointer = newHead;
    while (arrowPointer !== null) {
      const oldNext = arrowPointer.next;
      const oldPrev = arrowPointer.prev;
      arrowPointer.next = oldPrev;
      arrowPointer.prev = oldNext;
      arrowPointer = arrowPointer.next;
    }
    this.head = newHead;
    this.tail = newTail;

    return this;
  }

  set(idx, val) {
    if (idx < 1 || idx > this.length) return false;
    const nodeToUpdate = this.get(idx);
    nodeToUpdate.val = val;
    return true;
  }

  shift() {
    if (this.length === 0) return null;
    else if (this.length === 1) {
      const nodeToShift = this.head;
      this.head = null;
      this.tail = null;
      this.length--;
      return nodeToShift;
    }
    const nodeToShift = this.head;
    const newHead = this.head.next;
    this.head = newHead;
    newHead.prev = null;
    nodeToShift.next = null;
    this.length--;

    return nodeToShift;
  }

  unshift(val) {
    if (this.length === 0) {
      return this.push(val);
    }
    const newHead = new Node(val);
    const nodeToMoveForward = this.head;
    newHead.next = nodeToMoveForward;
    nodeToMoveForward.prev = newHead;
    this.head = newHead;
    this.length++;

    return this;
  }
}
