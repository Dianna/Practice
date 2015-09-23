/* 
Create an algorithm that will perform a breadth first search 
through a graph
*/

var Graph = function(){
  this.vertices = [];
};

var Node = function(value){
  this.value = value;
  this.edges = [];
};

Graph.prototype.addNode = function(value){
  var node = new Node(value);
  this.vertices.push(node);
  return node;
};

Node.prototype.addEdge = function(node){
  this.edges.push(node);
  node.edges.push(this);
};

var Queue = function(){
  this.storage = [];
  this.push = function(item){
    this.storage.push(item);
  }
  this.pop = function(){
    return this.storage.shift();
  }
}

Graph.prototype.bFSearch = function(filter){
  var queue = new Queue();
  var item;
  queue.push({node: this.vertices[0], depth: 0});
  var results = [];

  while (item = queue.pop()){
    var node = item.node;
    var depth = item.depth;
    if (!node.visited){
      node.visited = 1;
      if (filter(node.value, depth)){
        results.push(node.value);
      }
      if (node.edges.length){
        depth++;
        node.edges.forEach(function(neighbor){
          queue.push({node: neighbor, depth: depth});
        });
      }
    }
  }
  this.vertices.forEach(function(vertex){
    vertex.visited = 0;
  });
  return results;
};

// example graph
var graph = new Graph(),
node1 = graph.addNode(1),
node2 = graph.addNode(2),
node3 = graph.addNode(3),
node4 = graph.addNode(4),
node5 = graph.addNode(5),
node6 = graph.addNode(6);
node1.addEdge(node3);
node3.addEdge(node5);
node2.addEdge(node4);
node4.addEdge(node6);
node6.addEdge(node5);

// example search
graph.bFSearch(function(node, depth){ 
  console.log(depth); 
  if (depth < 2){ 
    return node;
  }
});

