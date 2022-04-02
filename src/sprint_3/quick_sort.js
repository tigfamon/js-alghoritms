function quickSort(arr, start = 0, end = arr.length - 1) {
  // If array has one element return array
  if (end <= start) {
    return arr;
  }

  // find pivot index
  const pivotIndex = partition(arr, start, end);
  // sort array to left part
  quickSort(arr, start, pivotIndex - 1);
  // sort array to right part
  quickSort(arr, pivotIndex + 1, end);

  return arr;
}

/**
 * Partition of array - find pivot index.
 */
function partition(arr, start = 0, end = arr.length - 1) {
  // for default pivot is last element
  const pivotValue = arr[end];

  // start pivot index as start
  let pivotIndex = start;

  for (let i = start; i < end; i++) {
    // if pivotValue bigger than current element move this element to pivot index position
    if (arr[i] < pivotValue) {
      swap(arr, pivotIndex, i);
      // increase pivotIndex
      pivotIndex++;
    }
  }

  swap(arr, pivotIndex, end);

  return pivotIndex;
}

function swap(arr, i, j) {
  const tmp = arr[i];
  arr[i] = arr[j];
  arr[j] = tmp;
}

module.exports = quickSort;
