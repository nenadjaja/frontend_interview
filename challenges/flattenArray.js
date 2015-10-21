var arrayToFlatten = [
  'item',
  {
    someKey: 'someValue',
    arrayKey: [ 'h', 'e', 'l', 'l', 'o' ]
  },
  undefined,
  null,
  1234,
  [ 5, 6, 7, 8 ],
  [
    [ 'q' ],
    [ 'w' ],
    [ 'e' ],
    [ 'r' ],
    [ 't' ],
    [ 'y' ]
  ]
];

var result = [];

var flattenArray = function(arr) {
  var len = arr.length;
  for (var ind=0; ind<len; ind++) {
    if (typeof arr[ind] !== "object" || arr[ind] === null) {
      result.push(arr[ind]);
    } else if (arr[ind]) {
      var elem_len = arr[ind].length;
      // array
      if (elem_len) {
        for (var j=0; j<elem_len; j++) {
          if (typeof arr[ind][j] !== "object") {
            result.push(arr[ind][j]);
          } else {
            flattenArray(arr[ind][j]);
          }
        }
      // object
      } else {
        for (var k in arr[ind]) {
          if (typeof arr[ind][k] !== "object") {
            result.push(arr[ind][k]);
          } else {
            flattenArray(arr[ind][k]);
          }
        }
      }
    } else {
        result.push('null');
    }
  }
  return result;
};

var result = flattenArray(arrayToFlatten);
console.log(result);

// result should equal:
// ['item', 'someValue', 'h', 'e', 'l', 'l', 'o', undefined, null, 1234, 5, 6, 7, 8, 'q', 'w', 'e', 'r', 't', 'y' ]

// function consoleLog () {
//     var args = Array.prototype.slice.call(arguments, 0);
//     document.getElementById('output').innerHTML += args.join(" ") + "<br>";   
// }

// consoleLog(result);
