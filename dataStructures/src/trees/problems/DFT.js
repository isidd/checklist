/* 
    Depth First Traverse
                                        10
                                6               15
                            3       8        13     20
        there are 3 ways we can do Depth traverse
            > pre-order [10,6,3,8,15,13,20]
            > post-order
            > in-order
*/

import { BinarySearchTree } from '..';

class DepthFirstTree extends BinarySearchTree {
    /*  preOrder
        Steps recursively
         - Create a variable to store the values of node visited
         - Store the root of BST in a variable called current
         - write a helper function which accepts a node 
            > push the value of the node to the variable that stores the value
            > if the node has the left property, call the helper function with the left property on node
            > if the node has the right property, call the helper function with the right property on node
        
    */
    preOrder() {
        var data = [];
        var current = this.root;
        function traverse(node) {
            data.push(node.value);
            if (node.left) traverse(node.left);
            if (node.right) traverse(node.right);
        }
        traverse(current);
        return data;
    }

    /*  postOrder
        Steps recursively
         - Create a variable to store the values of node visited
         - Store the root of BST in a variable called current
         - write a helper function which accepts a node 
            > if the node has the left property, call the helper function with the left property on node
            > if the node has the right property, call the helper function with the right property on node
            > push the value of the node to the variable that stores the value
            > invoke the helper function with the current variable
        - return the data
    */
    postOrder() {
        var data = [];
        function traverse(node) {
            if (node.left) traverse(node.left);
            if (node.right) traverse(node.right);
            data.push(node.value);
        }
        traverse(this.root);
    }

    inOrder() {
        let data = [];
        function traverse(node) {
            if (node.left) traverse(node.left);
            data.push(node.value);
            if (node.right) traverse(node.right);
        }
        traverse(this.root);
        return data;
    }
}

let traverseDFTPreOrder = new DepthFirstTree();
traverseDFTPreOrder.insert(10);
traverseDFTPreOrder.insert(6);
traverseDFTPreOrder.insert(3);
traverseDFTPreOrder.insert(8);
traverseDFTPreOrder.insert(15);
traverseDFTPreOrder.insert(13);
traverseDFTPreOrder.insert(20);
console.log(traverseDFTPreOrder.preOrder());
console.log(traverseDFTPreOrder.postOrder());
console.log(traverseDFTPreOrder.inOrder());
