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

g.DFSrecursive("A");
