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
}

// var g = new Graph();
// g.addVertex("LA");
// g.addVertex("SF");
// g.addVertex("NYC");
// g.addEdge("LA", "SF");
// g.addEdge("SF", "NYC");
//
// g.adjacencyList;
