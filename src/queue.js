// const { NotImplementedError } = require('../extensions/index.js');

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
    this.storage = [];
  }

  getUnderlyingList() {
    // Return null for an empty list
    if (this.storage.length === 0) {
      return null; 
    }

    // Convert the array to a linked list
    let head = new ListNode(this.storage[0]);
    let current = head;
    
    for (let i = 1; i < this.storage.length; i++) {
      current.next = new ListNode(this.storage[i]);
      current = current.next;
    }

    return head;
  }

  enqueue(value) {
    this.storage.push(value)
  }

  dequeue() {
    // let removed = this.storage[this.head]
    // delete this.storage[this.head]
    // this.head++
    // return removed
    return this.storage.shift()
  }
}

module.exports = {
  Queue
};
