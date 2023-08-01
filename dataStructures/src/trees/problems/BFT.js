/* 
    Breadth First Traverse
        - In this we will traverse every sibling node first
    Steps : 
        - create a queue/array and the variable to store a visited node
        - place the root in the queue
        - loop as long as there is anything in the queue
            > de-queue a node from the queue and push the value of the node into the variable that stores the node
            > if there is left property on the node de-queued, add it to the queue
            > if there is left property on the node de-queued, add it to the queue
            > return the variable that stores the values

                                        10
                                6               15
                            3       8        13     20
                queued  : []
                visited : []
            step 1 : 
                    queued -> 10 if there is something in the queue add it to visited
                    visited-> 10
                queued []
                visited[10]
            step 2 :
                we are going to check if there is left we will add that to the queued 
                and then check if there is right is yes then we will add that also
                queued[5,15]
                visited[10]
                -> [10,5,15] 
            */

import { BinarySearchTree } from '..';

class BreadthFirstSearch extends BinarySearchTree {
    bft() {
        var node = this.root,
            data = [],
            queue = [];
        queue.push(node);
        while (queue.length) {
            node = queue.shift();
            data.push(node.value);
            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }
        return data;
    }
}

let traverseBRF = new BreadthFirstSearch();
traverseBRF.insert(10);
traverseBRF.insert(6);
traverseBRF.insert(3);
traverseBRF.insert(8);
traverseBRF.insert(15);
traverseBRF.insert(13);
traverseBRF.insert(20);
console.log(traverseBRF.bft());
