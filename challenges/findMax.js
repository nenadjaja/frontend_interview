// find maximum value of an array
function find_max(arr) {
  var current_max = arr[0];
  arr.forEach(function(elem) {
    if (elem > current_max) {
      current_max = elem;
    }
  });
  return current_max;
}

console.log(find_max([4,3,77,8]));

// find maximum value and second maximum value of an array
function max_value(arr) {
  var current_max = arr[0];
  var next_max =arr[0];
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