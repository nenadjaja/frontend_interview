// Use call and apply methods to resolve 'this' to its intended scope  
// Syntax: function.apply(context,[args]);
//         function.call(context,args);

function Point(x,y) {
  this.x = x;
  this.y = y;
}

Point.prototype = {
  move: function(x,y) {
    this.x += x;
    this.y += y;

    function checkBounds() {
      if (this.x>100) {
        console.log("this will get executed");
      }
    }
    // here this refers to an instance of Point
    checkBounds.call(this);
    // checkBounds.apply(this);
  }
};

var pt = new Point(1,2);
pt.move(105,100);

Point.prototype = {
  move: function(x,y) {
    this.x += x;
    this.y += y;

    function checkBounds(min,max) {
      if (this.x>min || this.x<max) {
        console.log("this will get executed again");
      }
    }
    // here this refers to an instance of Point
    checkBounds.call(this,0,100);
    checkBounds.apply(this,[0,100]);
    
  }
};

var pt1 = new Point(2,3);
pt1.move(50,60);