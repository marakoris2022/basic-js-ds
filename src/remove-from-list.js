const { NotImplementedError } = require('../extensions/index.js');

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Given a singly linked list of integers l and an integer k,
 * remove all values from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and k = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined using interface
 * class ListNode {
 *   constructor(x) {
 *     this.value = x;
 *     this.next = null;
 *   }
 * }
 */

// class ListNode {
//   constructor(x) {
//     this.value = x;
//     this.next = null;
//   }
// }

// function convertArrayToList(arr) {
//   return arr.reverse().reduce((acc, cur) => {
//     if (acc) {
//       const node = new ListNode(cur);
//       node.next = acc;
//       return node;
//     }

//     return new ListNode(cur);
//   }, null);
// }

// const initial = convertArrayToList([3, 1, 2, 3, 4, 5]);

function removeKFromList(l, k) {
  let currentNode = l;
  while(currentNode != null) {
    if (currentNode.value == k) {
      currentNode = currentNode.next
      l = currentNode;
      continue
    }
    if (currentNode.next != null) {
      if (currentNode.next.value == k) {
        currentNode.next = currentNode.next.next;
        continue
      }
    }
    currentNode = currentNode.next
  }
  return l;
}

// console.log(removeKFromList(initial, 3));


module.exports = {
  removeKFromList
};
