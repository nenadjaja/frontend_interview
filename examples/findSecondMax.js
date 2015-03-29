function findTwoMax(arr) {
  if (arr.length === 0)
    return -1;
  if (arr.length === 1)
    return [arr[0],-1];
  firstMax = arr[0];
  secondMax = arr[0];
  for (var i=1;i<arr.length;i++) {
    if (arr[i] > firstMax) {
      secondMax = firstMax;
      firstMax = arr[i];
    } else if (arr[i] > secondMax && arr[i] != firstMax) {
      secondMax = arr[i];
    }
  }
  return [firstMax,secondMax];
}

a1 = [0,4,7,99,2,0];
a2 = [1];
a3 = [];

console.log(findTwoMax(a1));
console.log(findTwoMax(a2));
console.log(findTwoMax(a3));