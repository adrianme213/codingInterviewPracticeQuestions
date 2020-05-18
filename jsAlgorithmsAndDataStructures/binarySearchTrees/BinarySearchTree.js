class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
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

}

const myTree = new BinarySearchTree();
myTree.insert(10);
myTree.insert(5);
myTree.insert(15);
myTree.insert(7);
myTree.insert(13);

console.log('10 found -- ', myTree.find(10));
console.log('5 found -- ', myTree.find(5));
console.log('9 not found -- ', myTree.find(9));
console.log('13 found -- ', myTree.find(13));
