"use strict";

// Directed Acyclic Graphs

// Edge List
// where you can draw a graph with these description using node and edges
// 0 is connected to 1
// 2 is connected to 3
// 2 is connected to 1
// 1 is connected to 3
const graph = [
  [0, 1],
  [2, 3],
  [2, 1],
  [1, 3],
];

// Adjacent List
// The index of the array is the value of the actual Graph
// 0 is connected to 2
// 1 is conncted to 2 and 3
// 2 is conncted to 0, 1 and 3
// 3 is connected to 1 and 2
const graph2 = [[2], [2, 3], [0, 1, 3], [1, 2]];

// Adjacent Matrix
// going to have 0s and 1s whether the node x has connction to node y
// 0 means no and 1 means yes
const graph3 = [
  // below using the index of 0 in graph 3, it will show the relation of the matrix array down below to it
  [0, 0, 1, 0], // index 0 is connected to 0, not connected to 1, connected to 2, not connected to 3,
  [0, 0, 1, 1], // index 1 is not connected to 0, not connected to 1, connected to 2, connected to 3,
  [0, 1, 0, 1], // index 2 is not connected to 0, connected to 1, not connected to 0, connceted to 1,
  [0, 1, 2, 0], // index 3 is not connected to 0, connected to 1, connected to 2, not connected to 3,
];
