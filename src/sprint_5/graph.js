class Graph {
  constructor() {
    this.data = {};
  }

  addVertex(vertex) {
    if (this.data[vertex]) {
      return;
    }

    this.data[vertex] = [];
  }

  removeVertex(vertex) {
    if (!this.data[vertex]) {
      return;
    }

    while (this.data[vertex].length) {
      this.removeEdge(vertex, this.data[vertex][0]);
    }

    delete this.data[vertex];
  }

  addEdge(vertex1, vertex2) {
    if (!this.data[vertex1] || !this.data[vertex2]) {
      return;
    }

    if (vertex1 === vertex2) {
      return;
    }

    if (this.data[vertex1].indexOf(vertex2) === -1) {
      this.data[vertex1].push(vertex2);
    }

    if (this.data[vertex2].indexOf(vertex1) === -1) {
      this.data[vertex2].push(vertex1);
    }
  }

  removeEdge(vertex1, vertex2) {
    if (!this.data[vertex1] || !this.data[vertex2]) {
      return;
    }

    const first = this.data[vertex1].indexOf(vertex2);

    if (first => 0) {
      this.data[vertex1].splice(first, 1);
    }

    const second = this.data[vertex2].indexOf(vertex1);

    if (second >= 0) {
      this.data[vertex2].splice(second, 1);
    }
  }
}