// given the input array, find the first duplicate
function findDuplicate(list) {
  var hash = {};
  for (var ind=0; ind<list.length; ind++) {
    if (hash[list[ind]]) {
      return list[ind];
    }
    hash[list[ind]] = 'test';
  };
}

console.log(findDuplicate([5,3,2,1,4,1]));

// find multiple duplicates
function findDuplicates(list) {
  var hash = {};
  var result = [];
  for (var i=0; i<list.length; i++) {
    if (hash[list[i]]) {
      result.push(list[i]);
    }
    hash[list[i]] = "boo";
  }
  return result;
}

console.log(findDuplicates([5,3,2,1,4,1,2]));
console.log(findDuplicates([5,3,2,1,4,1,2,3]));
