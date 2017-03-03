// implement a "staircase" function, that outputs the following:
//     #
//    ##
//   ###
//  ####
// #####

function staircase(n) {
  var counter = 1;
  while (counter <= n) {
    var space = '';
    var hashtag = '';
    for (var i=0; i<n-counter; i++) {
      space += ' ';
    }
    for (var j=0; j<counter; j++) {
      hashtag += '#';
    }
    console.log(space + hashtag);
    counter += 1;
  };
}

staircase(5);
staircase(10);
