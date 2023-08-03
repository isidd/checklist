class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

export class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    /* Insert (steps iteratively)
        Time Complexities  | O(log n) best and average case | but not in every case if there is a linear tree or one sided 
        tree in that case it will be O(n)
        1. Create a new Node
        2. start @ root 
            - Check if there is a root, if not the new Node becomes root
            - if there is a root check if val of new node is greater than or less than the value of the root
            - if greater 
                > check to see if there is a Node to the right 
                    # if there is move to the node and repeat the steps
                    # if not, add that Node as the right property
            -if it is less
                > Check to see if there is a Node to the left
                    # if there is move to the node and repeat the steps
                    # if not, add that Node as the left property
    */

    insert(val) {
        let newNode = new Node(val);
        if (!this.root) {
            this.root = newNode;
            return this;
        }
        let current = this.root;
        while (true) {
            if (current.value > val) {
                if (!current.left) {
                    current.left = newNode;
                    return this;
                }
                current = current.left;
            }
            if (current.value < val) {
                if (!current.right) {
                    current.right = newNode;
                    return this;
                }
                current = current.right;
            }
        }
    }

    /* Find (steps iteratively)
        Time Complexities  | O(log n) best and average case
        1. start @ root 
            - Check if there is a root, if not then we are done searching return null 
            - if there is a root check if val of new node is the val we are looking for
            - if we found it, we are done return the value
            - if not check to see if the value is greater than or less than the value of the root 
            - if greater
                > check if there is a node to the right
                    # if there is move the node and repeat the steps
                    # if not, we are done searching return null
            -if lesser
                > Check to see if there is a Node to the left
                    # if there is move the node and repeat the steps
                    # if not, we are done searching return null
    */

    find(val) {
        let current = this.root;
        var found = false;
        while (current && !found) {
            if (current.value > val) {
                current = current.left;
            } else if (current.value < val) {
                current = current.right;
            } else {
                found = true;
            }
        }
        if (!found) return 'no items found';
        return current;
    }
}

var tree = new BinarySearchTree();

tree.insert(10);
tree.insert(9);
tree.insert(7);
tree.insert(15);
tree.insert(21);
tree.insert(18);
tree.insert(4);

console.log(tree.find(4));
console.log(tree.find(18));
console.log(tree.find(180));
