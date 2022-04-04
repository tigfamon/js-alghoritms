class BinaryHeap {
  constructor() {
    this.data = [];
  }

  insert(node) {
    this.data.push(node);
    this.bubbleUp(this.data.length - 1);
  }

  bubbleUp(index) {
    const node = this.data[index];
    const parentIndex = Math.floor((index - 1) / 2);
    const parent = this.data[parentIndex];

    if (parentIndex < 0) {
      return;
    }

    if (node > parent) {
      this.data[index] = parent;
      this.data[parentIndex] = node;
      this.bubbleUp(parentIndex);
    }
  }

  sinkDown(index) {
    const node = this.data[index];

    const leftNodeIndex = index * 2 + 1;
    const rightNodeIndex = index * 2 + 2;

    const left = leftNodeIndex < this.data.length ? this.data[leftNodeIndex] : -1;
    const right = rightNodeIndex < this.data.length ? this.data[rightNodeIndex] : -1;

    if (node < left && left >= right) {
      this.data[index] = left;
      this.data[leftNodeIndex] = node;
      this.sinkDown(leftNodeIndex);
      return;
    }

    if (node < right && right >= left) {
      this.data[index] = right;
      this.data[rightNodeIndex] = node;
      this.sinkDown(rightNodeIndex);
    }
  }

  extract() {
    const first = this.data[0];
    const last = this.data.pop();

    if (this.data.length) {
      this.data[0] = last;
      this.sinkDown(0);
    }

    return first;
  }
}

module.exports = BinaryHeap;
