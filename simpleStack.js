// Implement a simple stack with JS
var Stack = function() {
  this.a = [];
}

// always refer to an object inside of the prototype with THIS keyword
Stack.prototype = {
  push: function(data) {
    this.a.push(data); 
  },
  pop: function() {
    return this.a.pop();
  },
  size: function() {
    return this.a.length;
  },
  isEmpty: function() {
    return this.a.length == 0;
  }

}

st = new Stack;
console.log(st.a);
st.push('To');
st.push('Be');
st.push('Or');
st.push('Not');
console.log(st.a);
console.log(st.pop());
console.log(st.pop());
console.log(st.size());
console.log(st.isEmpty());
st.pop();
st.pop();
console.log(st.isEmpty());