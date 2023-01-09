//       A
//      / \   \
//////B     C   D
//    / \       / \
/////E   F     G   H
//      / \    \   
//     I   J    K 

// lines connecting the Nodes ex: A to B are called Edges  Evariable
//time coplexity == O(V + E)   V= stands for vertices or Nodes E=Edges or variables
////space complexity = O(V)

class Node {
    constructor(name) {
    this.name = name;
    this.children = [];
    }
    addChild(name) {
    this.children.push(new Node(name));
    return this;
    }
    // O(v + e) time | O(v) space
    depthFirstSearch(array) {
    array.push(this.name);
    for (const child of this.children) {
    child.depthFirstSearch(array);
    }
    return array;
    }
    }