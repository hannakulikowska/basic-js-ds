// const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
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
function removeKFromList(l, k) {
  let x = new ListNode();

  x.next = l;

  let current = x;

  while (current.next !== null) {
    if (current.next.value === k) {
      // Skip the node with value k
      current.next = current.next.next;
    } else {
      // Move to the next node
      current = current.next;
    }
  }

  return x.next;
}

module.exports = {
  removeKFromList
};


// // class for node

// class linkedListNode {
//   constructor(value, next = null) {
//     this.value = value;
//     this.next = next;
//   }

//   toString() {
//     return `${this.value}`;
//   }
// }

// // class for list

// class linkedList {
//   constructor() {
//     this.head = null;
//     this.tail = null;
//   }

//   append(value) {
//     const newNode = new linkedListNode(value);

//     if (!this.head || !this.tail) {
//       this.head = newNode;
//       this.tail = newNode;

//       return this;
//     }

//     this.tail.next = newNode;

//     this.tail = newNode;
//   }
// }

// const list = new linkedList();

// list
//   .append('a')
//   .append('b')
//   .append('c');

// console.log(JSON.stringify(list));
