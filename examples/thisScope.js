function add(x,y) {
  console.log(this);  // returns the global object
  return x+y;
}

// global in Node, or window object in browser
add(1,2);


// If you use the strict mode (ECMAscript5) this evaluates to 'undefined'
function add2(x,y) {
  "use strict";
  console.log(this);  // returns the global object
  return x+y;
}

add2(2,3); // undefined


// here this refers to the instance of an object 
function Point(x,y) {
  this.x = x;
  this.y = y;
}

var pt = new Point(1,2);
console.log(pt); // {x:1,y:2}


// IF you nest functions inside other methods -> this set to the global object 
Point.prototype = {
  move: function(x,y) {
    this.x += x;
    this.y += y;

    function checkBounds() {
      if (this.x>100) {
        console.log("this won't get executed");
      }
    }

    checkBounds();
  }
};
var pt1 = new Point(0,0);
pt1.move(105,100);

// Reference this by using another variable
Point.prototype = {
  move: function(x,y) {
    var self = this;

    this.x += x;
    this.y += y;

    function checkBounds() {
      if (self.x>100) {
        console.log("this will now be executed");
      }
    }

    checkBounds();
  }
};
var pt2 = new Point(0,0);
pt2.move(105,100);