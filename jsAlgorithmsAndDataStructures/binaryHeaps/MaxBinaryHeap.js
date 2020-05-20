/*
Parent at node index n, its children are at index
Child at node index n, its parent is at Math.floor((n-1)/2)
*/

class MaxBinaryHeap {
  constructor() {
    this.values = [];
  }

  insert(val) {
    this.values.push(val);
    let currentIndex = this.values.length-1;
    let parentIndex = Math.floor((currentIndex-1)/2);
    while (currentIndex > 0 && this.values[currentIndex] > this.values[parentIndex]) {
      [this.values[currentIndex], this.values[parentIndex]] = [this.values[parentIndex], this.values[currentIndex]];
      currentIndex = parentIndex;
      parentIndex = Math.floor((currentIndex-1)/2);
    }
  }

  extractMax() {
    if(this.values.length === 0) return null;
    if(this.values.length === 1) return this.values.pop();
    const extractedMax = this.values.splice(0, 1, this.values.pop())[0];
    let willSwapOccur = true;
    let parentIdx = 0;

    while(willSwapOccur) {
      const parent = this.values[parentIdx];
      const leftChildIdx = 2 * parentIdx + 1;
      const rightChildIdx = 2 * parentIdx + 2;
      const leftChild = this.values[leftChildIdx];
      const rightChild = this.values[rightChildIdx];
      if(leftChild > parent || rightChild > parent) {
         if (rightChild !== undefined && rightChild > leftChild) {
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

    return extractedMax;
  }
}

const myHeap = new MaxBinaryHeap();
myHeap.insert(41);
myHeap.insert(39);
myHeap.insert(33);
myHeap.insert(18);
myHeap.insert(27);
myHeap.insert(12);
console.log(' before - ', myHeap.values);
myHeap.insert(55);
console.log(' after - ', myHeap.values);
var apple = myHeap.extractMax();
console.log(' after after - ', myHeap.values);
