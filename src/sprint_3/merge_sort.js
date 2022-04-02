function merge(arr, buffer = [], start, mid, end) {
  for (let i = start; i <= end; i++) {
    buffer[i] = arr[i];
  }

  let l = start;
  let r = mid + 1;
  let i = start;

  while (l < mid + 1 && r < end + 1) {
    if (buffer[l] <= buffer[r]) {
      arr[i] = buffer[l];
      l++
    } else {
      arr[i] = buffer[r];
      r++
    }
    i++;
  }

  while (l < mid + 1) {
      arr[i] = buffer[l];
      l++;
      i++;
  }

  while (r < end + 1) {
      arr[i] = buffer[r];
      r++;
      i++;
  }
}

function mergeSort(arr, start = 0, end = arr.length - 1, buffer) {
  if (end <= start) {
    return arr;
  }

  const mid = Math.floor((start + end) / 2);

  mergeSort(arr, start, mid, buffer);
  mergeSort(arr, mid + 1, end, buffer);
  merge(arr, buffer, start, mid, end);

  return arr;
}

module.exports = mergeSort;
