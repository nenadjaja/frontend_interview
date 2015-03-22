function max_value(arr) {
  var current_max = 0;
  var next_max =0;
  for (var i=0;i<arr.length;i++) {
    if (arr[i]>=next_max && arr[i]<current_max) {
      next_max = arr[i];
    }
    if (arr[i]>current_max) {
      next_max = current_max;
      current_max = arr[i];
    }
  }
  return [next_max,current_max];
}

a = [1,0,3,5,4,10,55];
console.log(max_value(a));