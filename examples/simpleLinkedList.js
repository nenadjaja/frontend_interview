// simple linked list
/*var firstNode = {
  data: 12,
  next: null
};

// attach to first node 
firstNode.next = {
  data: 99,
  next: null
}; */
function LinkedList() {
  this.count = 0,
  this.head = null;
}

LinkedList.prototype = {
  add: function(data) {
    var node = {
      data: data,
      next: null
    };
    var current;

    // if no items in a list yet
    if (this.head === null) {
      this.head = node;
    } else {
      // set the head to be current node
      current = this.head;
      // traverse the list until the last element
      while (current.next) {
        current = current.next; 
      }
      // you found the last element, append the new node with data
      current.next = node;
    }
    // update the count (length of linkedlist)
    this.count++;
  },

  remove: function() {
   
  }
}

// Test it 
var ll = new LinkedList();
ll.add('something');
ll.add('another');
console.log(ll);