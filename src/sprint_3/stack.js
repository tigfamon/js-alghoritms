class Stack {
  constructor() {
    this.size = 0;
    this.head = null;
    this.tail = null;
  }

  /**
   * Set element to stack
   * @param value
   * @returns {number} stack size
   */
  push(value) {
    const node = { value, next: null, prev: null };

    if (this.isEmpty()) {
      this.head = node;
      this.size += 1;
      return this.size;
    }

    let i = 0;
    let currentNode = this.head;

    while (i < this.size) {
      if (!currentNode?.next) {
        currentNode.next = node;
        this.tail = node;
        this.tail.prev = currentNode;
        this.size += 1;
        return this.size;
      }
      currentNode = currentNode.next;
      i++;
    }
  }

  /**
   * Remove element from stack
   * @returns deleted element
   */
  pop() {
    if (this.isEmpty()) {
      throw new Error('STACK IS EMPTY');
    }

    const target = this.peek();

    if (this.size === 1) {
      this.head = null;
      this.tail = null
    } else if (target === this.head) {
      this.head = null;
    } else if (target === this.tail) {
      this.tail = target.prev;
      this.tail.next = null;
    }

    this.size -= 1;
    return target;
  }

  /**
   * Returns the top element of stack
   * @returns top element
   */
  peek() {
    let i = 0;
    let node = this.head;

    while (i < this.size) {
      if (!node?.next) {
        return node;
      }
      node = node.next;
      i++;
    }
  }

  /**
   * Check for stack is empty
   * @returns {boolean}
   */
  isEmpty() {
    return this.size === 0;
  }
}

module.exports = Stack;
