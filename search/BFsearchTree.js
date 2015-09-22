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


var Queue = function(){
  var storage = [];
  this.push = function(item){
    storage.push(item);
  }
  this.pop = function(){
    return storage.shift();
  }
};

Tree.prototype.bFSelect = function(filter){
  var queue = new Queue();
  var results = [], item;
  queue.push({tree: this, depth: 0});

  while (item = queue.pop()){
    var tree = item.tree;
    var depth = item.depth;
    if (filter(tree.value, depth)){
      results.push(tree.value);
    }
    for (var i=0; i<tree.children.length; i++){
      var child = {tree: tree.children[i], depth: depth+1}
      queue.push(child);
    }
  }
  return results;
}

var root = new Tree(1),
branch1 = root.addChild(2),
branch2 = root.addChild(3),
leaf1 = branch1.addChild(4),
leaf2 = branch2.addChild(5),
leaf3 = branch2.addChild(6);


