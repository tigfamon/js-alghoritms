const quickSort = require('./quick_sort');

const arr = [6,5,3,1,8,7,2,4];;

describe('quick_sort', () => {
  test('example', () => {
    expect(quickSort(arr)).toStrictEqual([1, 2, 3, 4, 5, 6, 7, 8]);
  })
});
