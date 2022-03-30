const Queue = require('./queue');

describe('queue', () => {
  let queue;

  beforeEach(() => {
    queue = new Queue();
  });

  test('enqueue', () => {
    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);
    queue.enqueue(4);

    expect(queue.head.value).toBe(1);
    expect(queue.tail.value).toBe(4);
    expect(queue.size).toBe(4);
    expect(queue.enqueue(5)).toBe(5);
  });

  test('dequeue', () => {
    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);
    queue.enqueue(4);

    expect(queue.dequeue().value).toBe(1);

    queue.dequeue();
    expect(queue.head.value).toBe(3);
    expect(queue.tail.value).toBe(4);
    expect(queue.size).toBe(2);

    queue.dequeue();
    expect(queue.tail.value).toBe(4);
    expect(queue.head.value).toBe(4);
    expect(queue.head.next).toBe(null);

    queue.dequeue();
    expect(queue.head).toBe(null);
    expect(queue.tail).toBe(null);
    expect(queue.size).toBe(0);

    expect(() => queue.dequeue()).toThrowError('QUEUE IS EMPTY');
  });
});
