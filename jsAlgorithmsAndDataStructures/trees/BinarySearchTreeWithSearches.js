
class Node {
  constructor(value) {
    this.value = value;
    this.children = [];
  }
}

class BinarySearchTreeWithSearches {
  constructor() {
    this.root = null;
  }
  find(value) {
    let isNodeFound = false;
    let currentNode = this.root;

    if(currentNode === null) {
      isNodeFound = true;
    }

    while(!isNodeFound) {
      if(currentNode.value === value) {
        isNodeFound = true;
      } else if (currentNode.left && value < currentNode.value) {
        currentNode = currentNode.left;
      } else if (currentNode.right && value > currentNode.value) {
        currentNode = currentNode.right;
      } else if (currentNode.left === null && currentNode.right === null) {
        currentNode = null;
        isNodeFound = true;
      }
    }

    return currentNode ? true : false;
  }

  insert(value) {
    const newNode = new Node(value);
    let isNewNodeInserted = false;
    let currentNode = this.root;

    if(currentNode === null) {
      this.root = newNode;
      isNewNodeInserted = true;
    }

    while(!isNewNodeInserted) {

      if (!currentNode.left && newNode.value < currentNode.value) {
        currentNode.left = newNode;
        isNewNodeInserted = true;
      } else if (currentNode.left && newNode.value < currentNode.value) {
        currentNode = currentNode.left;
      } else if(!currentNode.right && newNode.value > currentNode.value) {
        currentNode.right = newNode;
        isNewNodeInserted = true;
      } else if (currentNode.right && newNode.value > currentNode.value) {
        currentNode = currentNode.right;
      }
    }

    return this;
  }

  breadthFirstSearch() {
    const data = [];
    const queue = [this.root];
    let currentNode;

    while(queue.length > 0) {
      currentNode = queue.shift();
      data.push(currentNode);
      if(currentNode.left) {
        queue.push(currentNode.left);
      }
      if(currentNode.right) {
        queue.push(currentNode.right);
      }
    }

    return data;
  }

  depthFirstSearchByType(type = "pre") {
    const validTypes = ["pre", "in", "post"];
    if(!validTypes.includes(type.toLowerCase())) {
      console.warn("Default type set to 'pre' due to invalid type entered.");
      type = "pre";
    }
    const data = [];

    function traverse(node) {
      type.toLowerCase() === validTypes[0] ? data.push(node.value) : null;
      if(node.left) {
        traverse(node.left);
      }
      type.toLowerCase() === validTypes[1] ? data.push(node.value) : null;
      if(node.right) {
        traverse(node.right);
      }
      type.toLowerCase() === validTypes[2] ? data.push(node.value) : null;
    }
    traverse(this.root);

    return data;
  }

}
const myTree = new Tree();
myTree.insert(10);
myTree.insert(5);
myTree.insert(15);
myTree.insert(7);
myTree.insert(13);
