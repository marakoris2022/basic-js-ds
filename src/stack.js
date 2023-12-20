const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement the Stack with a given interface via array.
 *
 * @example
 * const stack = new Stack();
 *
 * stack.push(1); // adds the element to the stack
 * stack.peek(); // returns the peek, but doesn't delete it, returns 1
 * stack.pop(); // returns the top element from stack and deletes it, returns 1
 * stack.pop(); // undefined
 *
 */
class Node {
  constructor(element) {
    this.element = element;
    this.next = null;
    this.prev = null;
  }
}

class Stack {
  constructor() {
    this.elements = 0;
    this.head = null;
    this.tail = null;
  }

  push(element) {
    let newNode = new Node(element);
    if(this.elements == 0) {
      this.head = newNode;
      this.tail = newNode;     
      this.elements += 1;
      return;
    }
    if (this.elements == 1) {
      this.head = newNode;
      this.head.prev = this.tail
      this.head.next = null
      this.tail.next = this.head
      this.tail.prev = null
      this.elements += 1;
      return;
    }
    if (this.elements > 1) {
      let oldHead = this.head;
      this.head = newNode;
      this.head.prev = oldHead;
      this.head.next = null;
      oldHead.next = this.head;
      this.elements += 1;
      return;
    }
  }

  pop() {
    if (this.elements == 0) {
      return undefined;
    }
    if (this.elements == 1) {
      let oldElement = this.head.element;
      this.head = null;
      this.tail = null;
      this.elements -= 1;
      return oldElement;
    }
    if (this.elements > 1) {
      let oldHead = this.head;
      this.head = this.head.prev;
      if (this.elements == 2) {
        this.head.next = null
        this.head.prev = null;
        this.tail.next = null;
        this.tail.prev = null
      }
      this.elements -= 1;
      return oldHead.element;
    }
  }

  peek() {
    return this.head.element;
  }
}

const myStack = new Stack();

myStack.push(1);
myStack.push(2);
myStack.push(3);
console.log(myStack.peek());

console.log(myStack);


module.exports = {
  Stack
};
