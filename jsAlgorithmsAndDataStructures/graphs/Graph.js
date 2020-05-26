class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(val) {
    if(!this.adjacencyList[val]) {
      this.adjacencyList[val] = new Set([]);
    }
  }

  addEdge(v1, v2) {
    this.adjacencyList[v1].add(v2);
    this.adjacencyList[v2].add(v1);
  }

  removeEdge(v1, v2) {
    this.adjacencyList[v1].delete(v2);
    this.adjacencyList[v2].delete(v1);
  }

  removeVertex(v1) {
    const allEdgesForVertexSet = this.adjacencyList[v1];
    allEdgesForVertexSet.forEach((key, val, set) => {
      this.adjacencyList[key].delete(v1);
    });

    delete this.adjacencyList[v1];
  }

  DFSrecursive(vertex, results=[], visitedVertices={}) {
    if(!vertex) return null;

    results.push(vertex);
    visitedVertices[vertex] = true;
    this.adjacencyList[vertex].forEach((key, val, set) => {
      if(!visitedVertices[key]){
        this.DFSrecursive(val, results, visitedVertices);
      }
    });

    return results;
  }

  DFSiterative(vertex) {
    if(!vertex) return null;

    const results=[];
    const visitedVertices={};
    const stack = [vertex];
    visitedVertices[vertex] = true;

    while(stack.length > 0) {
      const currentVertex = stack.pop();
      results.push(currentVertex);


      this.adjacencyList[currentVertex].forEach((key, val, set) => {
        if(!visitedVertices[val]){
          visitedVertices[val] = true;
          stack.push(val);
        }
      });
    }

    return results;
  }

  BFStraversal(vertex) {
    if(!vertex) return null;

    const results=[];
    const visitedVertices={};
    const queue = [vertex];
    visitedVertices[vertex] = true;

    while(queue.length > 0) {
      const currentVertex = queue.shift();
      results.push(currentVertex);

      this.adjacencyList[currentVertex].forEach((key, val, set) => {
        if(!visitedVertices[val]) {
          visitedVertices[val] = true;
          queue.push(val);
        }
      });
    }

    return results;
  }
}

var g = new Graph();
g.addVertex("A");
g.addVertex("B");
g.addVertex("C");
g.addVertex("D");
g.addVertex("E");
g.addVertex("F");

g.addEdge("A", "B");
g.addEdge("A", "C");
g.addEdge("B", "D");
g.addEdge("C", "E");
g.addEdge("D", "E");
g.addEdge("D", "F");
g.addEdge("E", "F");

g.DFSiterative("A");
