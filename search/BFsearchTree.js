// Create an algorithm to do a breadth first search of a tree.
// I've created a simple tree DS to perform the search on

var Tree = function(value){
  this.value = value
  this.children = [];
};

Tree.prototype.addChild = function(value){
  var child = new Tree(value);
  this.children.push(child);
  return child;
};

var root = new Tree(1),
branch1 = root.addChild(2),
branch2 = root.addChild(3),
leaf1 = branch1.addChild(4),
leaf2 = branch2.addChild(5),
leaf3 = branch2.addChild(6);


