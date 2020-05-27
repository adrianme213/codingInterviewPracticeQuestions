class Node {
  constructor(value, priority) {
    this.value = value;
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


class WeightedGraph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(val) {
    if(!this.adjacencyList[val]) {
      this.adjacencyList[val] = new Set([]);
    }
  }

  addEdge(v1, v2, weight) {
    this.adjacencyList[v1].add({node: v2, weight: weight});
    this.adjacencyList[v2].add({node: v1, weight: weight});
  }

  dijkstraShortestPath(startVertex, endVertex) {
    const shortestDistanceFromStart = {};
    for(let key in this.adjacencyList) {
      shortestDistanceFromStart[key] = Number.MAX_SAFE_INTEGER;
    }
    shortestDistanceFromStart[startVertex] = 0;

    const previousNode = {};
    const priorityQueue = new PriorityQueue();
    for(let key in shortestDistanceFromStart) {
      previousNode[key] = null;
      priorityQueue.enqueue(key, shortestDistanceFromStart[key]);
    }

    const paths = [];
    while(priorityQueue.values.length > 0) {
      const dequeuedVertexValue = priorityQueue.dequeue().value;

      if(dequeuedVertexValue === endVertex) {
        let currentValue = dequeuedVertexValue;
        while(currentValue !== null) {
          paths.push(currentValue);
          currentValue = previousNode[currentValue];
        }
        break;
      }

      if(dequeuedVertexValue !== null || shortestDistanceFromStart[dequeuedVertexValue]) {
        const adjacencyListAsAnArray = [...this.adjacencyList[dequeuedVertexValue]];
        for(let neighborVertex in adjacencyListAsAnArray) {
          const neighborNode = adjacencyListAsAnArray[neighborVertex];
          const {node: neighborNodeValue, weight: neighborNodeWeight } = neighborNode;
          const possibleShortestPathSum = shortestDistanceFromStart[dequeuedVertexValue] + neighborNodeWeight;

          if(possibleShortestPathSum < shortestDistanceFromStart[neighborNodeValue]) {
            shortestDistanceFromStart[neighborNodeValue] = possibleShortestPathSum;
            previousNode[neighborNodeValue] = dequeuedVertexValue;
            priorityQueue.enqueue(neighborNodeValue, possibleShortestPathSum);
          }
        }
      }
    }

    paths.reverse();
    return {paths: paths, weight: shortestDistanceFromStart[endVertex] };
  }
}

var g = new WeightedGraph();
g.addVertex("A");
g.addVertex("B");
g.addVertex("C");
g.addVertex("D");
g.addVertex("E");
g.addVertex("F");
g.addEdge("A", "B", 4);
g.addEdge("A", "C", 2);
g.addEdge("B", "E", 3);
g.addEdge("C", "D", 2);
g.addEdge("C", "F", 4);
g.addEdge("D", "E", 3);
g.addEdge("D", "F", 1);
g.addEdge("E", "F", 1);

console.log(g.dijkstraShortestPath("A", "E")); // [ 'A', 'C', 'D', 'F', 'E' ], 6
