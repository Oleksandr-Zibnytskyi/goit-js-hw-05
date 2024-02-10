function isEnoughCapacity(products, containerSize) {
  let sum = 0;
  for (const prod of Object.values(products)) {
    sum += prod;
  }
  return sum <= containerSize;
}
