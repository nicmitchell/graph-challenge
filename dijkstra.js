/**
 * Basic priority queue implementation. If a better priority queue is wanted/needed,
 * this code works with the implementation in google's closure library (https://code.google.com/p/closure-library/).
 * Use goog.require('goog.structs.PriorityQueue'); and new goog.structs.PriorityQueue()
 */
function PriorityQueue () {
  this._nodes = [];

  this.enqueue = function (priority, key) {
    this._nodes.push({priority: priority, key: key});
    this.sort();
  }
  this.dequeue = function () {
    return this._nodes.shift().key;
  }
  this.sort = function () {
    this._nodes.sort(function (a, b) {
      return a.priority - b.priority;
    });
  }
  this.isEmpty = function () {
    return !this._nodes.length;
  }
}

/**
 * Pathfinding starts here
 */
function Graph(){
  var INFINITY = 1/0;
  this.vertices = {};

  this.addVertex = function(name, edges){
    for (var k in edges){
      edges[k] = 100 - edges[k];
    }
    this.vertices[name] = edges;
  }

  this.shortestPath = function (start, finish) {
    var nodes = new PriorityQueue(),
        distances = {},
        previous = {},
        path = [],
        smallest, vertex, neighbor, alt;

    for(vertex in this.vertices) {
      if(vertex === start) {
        distances[vertex] = 0;
        nodes.enqueue(0, vertex);
      }
      else {
        distances[vertex] = INFINITY;
        nodes.enqueue(INFINITY, vertex);
      }

      previous[vertex] = null;
    }

    // PriorityQueue._nodes has been sorted by 
    while(!nodes.isEmpty()) {
      smallest = nodes.dequeue();

      if(smallest === finish) {
        // path;

        while(previous[smallest]) {
          path.push(smallest);
          smallest = previous[smallest];
        }

        break;
      }

      if(!smallest || distances[smallest] === INFINITY){
        continue;
      }

      for(neighbor in this.vertices[smallest]) {
        alt = distances[smallest] + this.vertices[smallest][neighbor];

        // distances get added to nodes
        if(alt < distances[neighbor]) {
          distances[neighbor] = alt;
          previous[neighbor] = smallest;

          nodes.enqueue(alt, neighbor);
        }
      }
    }
    return path;
  }
}

var g = new Graph();

g.addVertex('0', {1: 4, 7: 8});
g.addVertex('1', {2: 8, 7: 11});
g.addVertex('2', {3: 7, 8: 2});
g.addVertex('3', {4: 9, 5: 14});
g.addVertex('4', {});
g.addVertex('5', {4: 10, 2: 4});
g.addVertex('6', {5: 2, 8: 6});
g.addVertex('7', {6: 1});
g.addVertex('8', {7: 7});

// Log test, with the addition of reversing the path and prepending the first node so it's more readable
console.log(g.shortestPath('0', '4').concat(['0']).reverse());