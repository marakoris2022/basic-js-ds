const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {
  constructor() {
    this.elements = 0;
    this.head = null;
    this.tail = null;
  }

  getUnderlyingList() {
    // Обратный список
    function reverseList(item) {
      let currNode = item.tail;
      let prevNode = null;
      let nextNode = null;

      while (currNode) {
        nextNode = currNode.next;
        currNode.next = prevNode;
        prevNode = currNode;
        currNode = nextNode;
      }
      item.tail = item.head;
      item.head = prevNode;
      return item.tail;
    }
    return reverseList(this);
  }

  enqueue(value) {
    const newNode = new ListNode(value);
    if (this.elements == 0) {
      this.head = newNode;
      this.tail = newNode;
      newNode.next = null;
      this.elements += 1;
      return;
    }
    if (this.elements == 1) {
      this.tail = newNode;
      newNode.next = this.head;
      this.elements += 1;
      return;
    }
    if (this.elements > 1) {
      const oldTail = this.tail;
      this.tail = newNode;
      newNode.next = oldTail;
      this.elements += 1;
      return;
    }
  }

  dequeue() {
    if (this.elements == 0) {
      return;
    }
    if (this.elements == 1) {
      const tempValue = this.head.value;
      this.head = null;
      this.tail = null;
      this.elements -= 1;
      return tempValue;
    }
    if (this.elements > 1) {
      let headParent;
      let currentNode = this.tail;
      while (currentNode != this.head) {
        if (currentNode.next == this.head) {
          headParent = currentNode;
          break;
        } else {
          currentNode = currentNode.next;
        }
      }
      const tempValue = this.head.value;
      this.head = headParent;
      this.head.next = null;
      this.elements -= 1;
      return tempValue;
    }

  }
}

// const myQueue = new Queue();
// myQueue.enqueue(1);
// myQueue.enqueue(2);
// myQueue.enqueue(3);
// myQueue.enqueue(1);
// myQueue.enqueue(2);
// console.log(myQueue);
// myQueue.getUnderlyingList();

module.exports = {
  Queue
};
