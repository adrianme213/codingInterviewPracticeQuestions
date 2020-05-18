class Item {
  constructor(val) {
    this.val = val
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.head = null;
    this.length = 0;
  }

  push(val) {
    const newNode = new Item(val);
    newNode.next = this.head;
    this.head = newNode;
    this.length++;

    return this;
  }

  pop() {
    if (this.length === 0) return null;
    else if (this.length === 1) {
      const nodeToPop = this.head;
      this.head = null;
      this.length--;
      return nodeToPop;
    }

    const nodeToPop = this.head;
    const nextHead = this.head.next;
    nodeToPop.next = null;
    this.head = nextHead;
    this.length--;

    return nodeToPop;
  }
}

var myStack = new Stack();
myStack.push(3).push(2).push(1);
console.log(myStack.length === 3);
console.log(myStack.head.val === 1);
console.log(myStack.head.next.val === 2);
console.log(myStack.head.next.next.val === 3);
console.log(myStack.head.next.next.next === null);

const poppedOne = myStack.pop();
console.log(poppedOne.val === 1);
console.log(poppedOne.next === null);

console.log(myStack.length === 2);
console.log(myStack.head.val === 2);
console.log(myStack.head.next.val === 3);
console.log(myStack.head.next.next === null);


const poppedTwo = myStack.pop();
console.log(poppedTwo.val === 2);
console.log(poppedTwo.next === null);
console.log(myStack.length === 1);
console.log(myStack.head.val === 3);
console.log(myStack.head.next === null);

const poppedThree = myStack.pop();
console.log(poppedThree.val === 3);
console.log(poppedThree.next === null);
console.log(myStack.length === 0);
console.log(myStack.head === null);
