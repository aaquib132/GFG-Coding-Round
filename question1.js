function countInRange(items, queries) {
  items.sort((a, b) => a - b);

  const lowerBound = (arr, x) => {
    let l = 0, r = arr.length;
    while (l < r) {
      let mid = (l + r) >> 1;
      if (arr[mid] >= x) r = mid;
      else l = mid + 1;
    }
    return l;
  };

  const upperBound = (arr, y) => {
    let l = 0, r = arr.length;
    while (l < r) {
      let mid = (l + r) >> 1;
      if (arr[mid] > y) r = mid;
      else l = mid + 1;
    }
    return l;
  };

  for (let [X, Y] of queries) {
    const left = lowerBound(items, X);
    const right = upperBound(items, Y);
    console.log(right - left);
  }
}
