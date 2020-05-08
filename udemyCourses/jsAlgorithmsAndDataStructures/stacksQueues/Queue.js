class Item {
  constructor(val) {
    this.val = val
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  enqueue(val) {
    const newNode = new Item(val);
    if (this.length === 0) {
      this.tail = newNode;
      this.head = newNode;
      this.length++;
      return this;
    }
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;

    return this;
  }

  dequeue() {
    if (this.length === 0) return null;
    else if (this.length === 1) {
      const nodeToDequeue = this.head;
      this.tail = null;
      this.head = null;
      this.length--;
      return nodeToDequeue;
    }

    const nodeToDequeue = this.head;
    const nextHead = this.head.next;
    nodeToDequeue.next = null;
    this.head = nextHead;
    this.length--;

    return nodeToDequeue;
  }
}

var myQueue = new Queue();
myQueue.enqueue(1).enqueue(2).enqueue(3);
console.log(myQueue.length === 3);
console.log(myQueue.head.val === 1);
console.log(myQueue.head.next.val === 2);
console.log(myQueue.head.next.next.val === 3);
console.log(myQueue.head.next.next.next === null);

const poppedOne = myQueue.dequeue();
console.log(poppedOne.val === 1);
console.log(poppedOne.next === null);

console.log(myQueue.length === 2);
console.log(myQueue.head.val === 2);
console.log(myQueue.head.next.val === 3);
console.log(myQueue.head.next.next === null);


const poppedTwo = myQueue.dequeue();
console.log(poppedTwo.val === 2);
console.log(poppedTwo.next === null);
console.log(myQueue.length === 1);
console.log(myQueue.head.val === 3);
console.log(myQueue.head.next === null);

const poppedThree = myQueue.dequeue();
console.log(poppedThree.val === 3);
console.log(poppedThree.next === null);
console.log(myQueue.length === 0);
console.log(myQueue.head === null);
