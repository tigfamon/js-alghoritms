class Queue {
  constructor() {
    this.size = 0;
    this.head = null;
    this.tail = null;
  }

  /**
   * Set element to queue
   * @param value
   * @returns {number} queue size
   */
  enqueue(value) {
    const node = { value, next: null, prev: null };

    if (this.isEmpty()) {
      this.head = node;
    } else {
      let i = 0;
      let currentNode = this.head;

      while (i < this.size) {
        if (!currentNode?.next) {
          currentNode.next = node;
          this.tail = node;
          this.tail.prev = currentNode;
          break;
        }

        currentNode = currentNode.next;
        i++;
      }

    }

    this.size +=1;
    return this.size;
  }

  /**
   * Remove element from queue
   * @returns deleted element
   */
  dequeue() {
    if (this.isEmpty()) {
      throw new Error('QUEUE IS EMPTY');
    }

    const target = this.peek();

    if (this.size === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = this.head?.next;
      this.head.prev = null;
    }

    this.size -= 1;
    return target;
  }

  /**
   * Returns the head element of queue
   * @returns {null}
   */
  peek() {
    return this.head;
  }

  /**
   * Check for queue is empty
   * @returns {boolean}
   */
  isEmpty() {
    return this.size === 0;
  }
}

module.exports = Queue;