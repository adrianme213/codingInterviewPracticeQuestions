class Node {
  constructor(val, priority = 5) {
    this.val = val;
    this.priority = priority;
  }
}

class PriorityQueue {
  constructor() {
    this.values = [];
  }

  enqueue(val, priority) {
    const newNode = new Node(val, priority);
    this.values.push(newNode);
    let currentIndex = this.values.length-1;
    let parentIndex = Math.floor((currentIndex-1)/2);
    while (currentIndex > 0 && this.values[currentIndex].priority < this.values[parentIndex].priority) {
      [this.values[currentIndex], this.values[parentIndex]] = [this.values[parentIndex], this.values[currentIndex]];
      currentIndex = parentIndex;
      parentIndex = Math.floor((currentIndex-1)/2);
    }
  }

  dequeue() {
    if(this.values.length === 0) return null;
    if(this.values.length === 1) return this.values.pop();
    const extractedMin = this.values.splice(0, 1, this.values.pop())[0];
    let willSwapOccur = true;
    let parentIdx = 0;

    while(willSwapOccur) {
      const parent = this.values[parentIdx];
      const leftChildIdx = 2 * parentIdx + 1;
      const rightChildIdx = 2 * parentIdx + 2;
      const leftChild = this.values[leftChildIdx];
      const rightChild = this.values[rightChildIdx];

      if((leftChild !== undefined && leftChild.priority < parent.priority) || (rightChild !== undefined && rightChild.priority < parent.priority)) {
         if (rightChild !== undefined && rightChild.priority < leftChild.priority) {
          this.values[parentIdx] = rightChild;
          this.values[rightChildIdx] = parent;
          parentIdx = rightChildIdx;
        } else {
          this.values[parentIdx] = leftChild;
          this.values[leftChildIdx] = parent;
          parentIdx = leftChildIdx;
        }
      } else {
        willSwapOccur = false;
      }
    }

    return extractedMin;
  }
}

var erList = new PriorityQueue();
erList.enqueue("common cold", 5);
erList.enqueue("gunshot wound", 1);
erList.enqueue("high fever", 4);
erList.enqueue("broken arm", 2);
console.log(erList.values);
erList.dequeue();
console.log(erList.values);
