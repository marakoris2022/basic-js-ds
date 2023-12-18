const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/

class BinarySearchTree {
  constructor() {}

  root() {
    this.data = null;
    this.left = null;
    this.right = null;
  }

  add(data) {
    const newNode = new Node(data);

    if (!data && data < 0) {
      return;
    }

    if (!this.root) {
      this.root = newNode;
      this.root() = newNode;
      return;
    }

    let currentNode = this.root;

    while(currentNode){
      if (newNode.data < currentNode.data) {
        if (!currentNode.left) {
          currentNode.left = newNode;
          return;
        }
        currentNode = currentNode.left;
      } else {
        if (!currentNode.right) {
          currentNode.right = newNode;
          return;
        }
        currentNode = currentNode.right;
      }
    }
  } 

  has(data) {
    let currentData = this.root;

    if (currentData.data == data) {
      return true;
    }

    while (currentData) {
      if(currentData.data > data) {
        if (!currentData.left) {
          return false;
        }
        if (currentData.left.data == data) {
          return true;
        }
        currentData = currentData.left;
      } else {
        if (!currentData.right) {
          return false;
        }
        if (currentData.right.data == data) {
          return true;
        }
        currentData = currentData.right;
      }
    }
    return false;
  }

  find(/* data */) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  remove(/* data */) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  min() {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  max() {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }
}

const myTree = new BinarySearchTree();
myTree.add(8);
myTree.add(1);
myTree.add(3);
myTree.add(11);
myTree.add(5);
myTree.add(9);
myTree.add(15);
myTree.add(13);

console.log(myTree.root().data);

console.log(myTree.has(11));

// console.log(myTree);



module.exports = {
  BinarySearchTree
};