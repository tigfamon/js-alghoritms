const Stack = require('./stack');

describe('stack', () => {
  let stack;

  beforeEach(() => {
    stack = new Stack();
  });

  test('push', () => {
    stack.push(1);
    stack.push(2);
    stack.push(3);
    stack.push(4);
    expect(stack.head.value).toBe(1);
    expect(stack.tail.value).toBe(4);
    expect(stack.size).toBe(4);
    expect(stack.push(5)).toBe(5);
  });

  test('peek', () => {
    stack.push(1);
    stack.push(2);
    stack.push(3);
    stack.push(4);
    expect(stack.peek().value).toBe(4);
  });

  test('pop', () => {
    stack.push(1);
    stack.push(2);
    stack.push(3);
    stack.push(4);

    expect(stack.pop().value).toBe(4);

    stack.pop();
    expect(stack.tail.value).toBe(2);
    expect(stack.tail.next).toBe(null);
    expect(stack.size).toBe(2);

    stack.pop();
    expect(stack.tail.value).toBe(1);
    expect(stack.head.value).toBe(1);
    expect(stack.head.next).toBe(null);

    stack.pop();
    expect(stack.head).toBe(null);
    expect(stack.tail).toBe(null);
    expect(stack.size).toBe(0);

   expect(() => stack.pop()).toThrowError('STACK IS EMPTY');
  });
});