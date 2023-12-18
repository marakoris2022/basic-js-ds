const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/

class BinarySearchTree {
  constructor() {
    this.treeRoot = null
  }

  root() {
    return this.treeRoot;
  }

  add(data) {
    const newNode = new Node(data);

    if (!data && data < 0) {
      return;
    }

    if (!this.treeRoot) {
      this.treeRoot = newNode;
      return;
    }

    let currentNode = this.treeRoot;

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
    let currentData = this.treeRoot;

    if (currentData == null) {
      return false
    }

    if (currentData == data) {
      return true
    }

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
  
  find(data) {
    let currentData = this.treeRoot;

    if (currentData == null) {
      return null;
    }

    if (currentData.data == data) {
      return currentData;
    }

    while (currentData) {
      if(currentData.data > data) {
        if (!currentData.left) {
          return null;
        }
        if (currentData.left.data == data) {
          return currentData.left;
        }
        currentData = currentData.left;
      } else {
        if (!currentData.right) {
          return null;
        }
        if (currentData.right.data == data) {
          return currentData.right;
        }
        currentData = currentData.right;
      }
    }
    return null;
  }

  min() {
    let currentData = this.treeRoot;
    while (currentData != null) {
      if (currentData.left == null) {
        return currentData.data
      } else {
        currentData = currentData.left
      }
    }
    return null;
  }

  max() {
    let currentData = this.treeRoot;
    while (currentData != null) {
      if (currentData.right == null) {
        return currentData.data
      } else {
        currentData = currentData.right
      }
    }
    return null;
  }

  remove(data) {

    if (this.treeRoot == null) {
      return;
    }

    function nodeHist (data, root) {
      let currentData = root;
  
      if (currentData.data == data) {
        return [currentData, null];
      }
  
      while (currentData) {
        if(currentData.data > data) {
          if (!currentData.left) {
            return null;
          }
          if (currentData.left.data == data) {
            return [currentData.left, currentData];
          }
          currentData = currentData.left;
        } else {
          if (!currentData.right) {
            return null;
          }
          if (currentData.right.data == data) {
            return [currentData.right, currentData];
          }
          currentData = currentData.right;
        }
      }
      return null;
    };

    // if (data == this.treeRoot.data) {
    //   console.log('del: root');
    //   this.treeRoot = null;
    //   return;
    // }

    let [findNode, parentNode] = nodeHist(data, this.treeRoot);

    if(findNode != null) {
      if (findNode.left == null && findNode.right == null) {
        // case 1
        if (parentNode.left == findNode) {
          findNode = null;
          parentNode.left = null;
        } else {
          findNode = null;
          parentNode.right = null;
        }
        return;
      }
      if(findNode.left != null && findNode.right != null) {
        //case 3
        let leftTreeMax;
        let startNode = findNode.left;
        while (startNode) {
          if (startNode.right != null) {
            startNode = startNode.right;
          } else {
            leftTreeMax = startNode.data;
            startNode = null;
          }
        }
        this.remove(leftTreeMax);
        findNode.data = leftTreeMax;
        return;
      } else {
        // case 2 -- left
        if (findNode.left != null) {
          if (parentNode.left == findNode) {
            parentNode.left = findNode.left;
            findNode = null;
          } else {
            parentNode.right = findNode.left;
            findNode = null;
          }
          return;
          // case 2 -- right
        } else if (findNode.right != null) {
          if (parentNode.left == findNode) {
            parentNode.left = findNode.right;
            findNode = null;
          } else {
            parentNode.right = findNode.right;
            findNode = null;
          }
          return;
        }
      }
    } else {
      console.log('cant find item');
      return;
    }
  }

}

// const myTree = new BinarySearchTree();


module.exports = {
  BinarySearchTree
};