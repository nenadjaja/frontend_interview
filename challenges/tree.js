// given an array of different foods, create a tree using the parent_id
// and make sure it's sorted. then print it out in the following format:
// breakfast
// -savory
// --sandwich
// ---chicken sandwich
// ---tuna sandwich
// ---veggie sandwich
// -sweet
// --cereal
// ---corn flakes
// ---oatmeal
// --smoothie

// 'use strict';

var foods = [
  {"id": 1, "name": "breakfast", "parent_id": null},
  {"id": 2, "name": "lunch", "parent_id": null},
  {"id": 3, "name": "dinner", "parent_id": null},
  {"id": 4, "name": "cereal", "parent_id": 7},
  {"id": 5, "name": "sandwich", "parent_id": 6},
  {"id": 6, "name": "savory", "parent_id": 1},
  {"id": 7, "name": "sweet", "parent_id": 1},
  {"id": 8, "name": "oatmeal", "parent_id": 4},
  {"id": 9, "name": "corn flakes", "parent_id": 4},
  {"id": 10, "name": "smoothie", "parent_id": 7},
  {"id": 11, "name": "chicken sandwich", "parent_id": 5},
  {"id": 12, "name": "veggie sandwich", "parent_id": 5},
  {"id": 13, "name": "tuna sandwich", "parent_id": 5},
  {"id": 14, "name": "meet", "parent_id": 2},
  {"id": 15, "name": "vegeterian", "parent_id": 2},
  {"id": 16, "name": "fish", "parent_id": 2},
  {"id": 17, "name": "steak", "parent_id": 14},
  {"id": 18, "name": "chicken pasta", "parent_id": 14},
  {"id": 19, "name": "roasted veggies", "parent_id": 15},
  {"id": 20, "name": "salmon", "parent_id": 16},
  {"id": 21, "name": "salad", "parent_id": 3},
  {"id": 22, "name": "soup", "parent_id": 3}
]

var simple = [
  {"id": 1, "name": "parent", "parent_id": null},
  {"id": 2, "name": "child1", "parent_id": 1},
  {"id": 3, "name": "child2", "parent_id": 1},
  {"id": 4, "name": "subchild1", "parent_id": 2},
  {"id": 5, "name": "subchild2", "parent_id": 3},
]

// compare function for sorting
function compare(a,b) {
  if (a.name < b.name) return -1;
  if (a.name > b.name) return 1;
  return 0;
}

// Create a tree structure
function tree(foods) {
  var map = {}; // map ids to indices
  var tree = []; // initialize the tree
  var node; // for each node in the tree

  // create a map object and add children array
  foods.map(function(food, index) {
    map[food.id] = index;
    food.children = [];
  });

  for (var ind=0; ind<foods.length; ind++) {
    node = foods[ind];
    if (node.parent_id !== null) {
      foods[map[node.parent_id]].children.push(node);
      foods[map[node.parent_id]].children.sort(compare);
    } else {
      tree.push(node);
    }
  }
  return tree.sort(compare);
}

// test
var foodsTree = tree(foods);
var simpleTree = tree(simple);

// Traverse the tree and print out
function traverseTree(tree, dash) {
  if (dash === undefined) {
    dash = '';
  }
  if (tree.length) {
    tree.forEach(function(elem) {
      console.log(dash + elem.name);
      traverseTree(elem.children, dash + '-');
    })
  }
}

traverseTree(foodsTree);
console.log("================");
traverseTree(simpleTree);
