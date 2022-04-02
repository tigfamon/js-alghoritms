const mergeSort = require('./merge_sort');

const arr = [6,5,3,1,8,7,2,4];

describe('merge_sort', () => {
  test('example', () => {
    expect(mergeSort(arr)).toStrictEqual([1, 2, 3, 4, 5, 6, 7, 8]);
  })
});
