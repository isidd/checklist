export class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

export default class Singlylinkedlist {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    /* push 

1. fn acc val 
2. create new node with val. 
3. if no head set the head and tail to the newly created node 
4. set the next prop on the tail to newly created node and updated the tail 
*/
    push(val) {
        let node = new Node(val);
        if (!this.head) {
            this.head = node;
            this.tail = node;
            this.length = ++this.length;
            return this;
        }
        this.tail.next = node;
        this.tail = node;
        this.length = ++this.length;
        return this;
    }

    /* pop
1. if no nodes in the list return undefined 
2. loop through list for tail 
3. set the next prop of the second last node to null  
*/
    pop() {
        if (!this.head) return undefined;
        let current = this.head;
        let newTail = current;
        while (current.next) {
            newTail = current;
            current = current.next;
        }
        this.tail = newTail;
        this.tail.next = null;
        --this.length;
        if (this.length == 0) {
            this.head = null;
            this.tail = null;
        }
        return this;
    }

    /* shift
1. if no nodes in the list return undefined 
2. store the current head property 
3. set the head prop the current next 
4. decrement the length by 1
5. returned the value of the node removed
*/
    shift() {
        if (!this.head) return undefined;
        let current = this.head;
        this.head = current.next;
        --this.length;
        if (this.length == 0) {
            this.head = null;
            this.tail = null;
        }
        return this;
    }

    /* unshift
1. accept a value 
2. create new node with passed value 
3. if no head set the head and tail as new node 
4. otherwise set the newly created node next prop to be the head
5. set the head property on the new list of the newly created node
6. increment length by one
7. return list
*/

    unshift(val) {
        let node = new Node(val);
        if (!this.length) {
            this.head = node;
            this.tail = this.head;
            ++this.length;
            return this;
        }
        node.next = this.head;
        this.head = node;
        ++this.length;
        return this;
    }

    /* get
1. fn should accept an index
2. if the index is less than zero or greater than equal to the length return null
3. loop through the list until you reach the index and return node  
*/

    get(index) {
        if (index < 0 || index >= this.length) return null;
        let pointer = 0;
        let current = this.head;
        while (pointer != index) {
            current = current.next;
            pointer++;
        }
        return current;
    }

    /* set
1. fun should accept a value and index
2. use get fn to find specific node
3. if node not found return false 
4. if found set the value of that node to be the value passed
 */

    set(index, value) {
        let node = this.get(index);
        if (!node) return false;
        node.value = value;
        return true;
    }

    /* insert
1. if the index is less than 0 or greater than length return false;
2. if the index is same as the length push the new node to the end of the list
3. if the index is zero unshift the new node to the start of the list
4. otherwise get the node using get with index-1 > set the next prop to the new node > set the next prop of the new node to the prev next
5. increment the length
6. return true  
*/

    insert(index, value) {
        if (index < 0 || index > this.length) return false;
        if (index == this.length) {
            this.push(value);
            return true;
        }
        if (index == 0) {
            this.unshift(value);
            return true;
        }
        let node = new Node(value);
        let leftNode = this.get(index - 1);
        let rightNode = leftNode.next;
        leftNode.next = node;
        node.next = rightNode;
        ++this.length;
        return true;
    }

    /* remove 
1. if the index is less than zero or greater than length return false
2. if the index is equal to length pop the node
3. if the index is equal to zero the shift the node
4. otherwise get the node using get with index-1 > set the next property of the node to the next to next property
5. decrement the length
6. return true 
*/

    remove(index) {
        if (index < 0 || index > this.length) return false;
        if (index == 0) {
            this.shift();
            return true;
        }
        if (index == this.length - 1) {
            this.pop();
            return true;
        }
        let leftNode = this.get(index - 1);
        leftNode.next = leftNode.next.next;
        --this.length;
        return true;
    }

    /* reverse 
1. swap the head and tail
2. create a variable called next and prev
3. create a value called node and initialize it to the head property 
4. loop through the list 
5. set next to the next property to whatever node is 
6. set the next property on the node to be whatever prev i 
7. set the prev to be the vale of the node variable 
8. set the node variable to be the be the next variable
*/

    reverse() {
        let node = this.head;
        let current;
        let next = null;
        this.head = this.tail;
        this.tail = node;
        for (var i = 0; i < this.length; i++) {
            current = node.next;
            node.next = next;
            next = node;
            node = current;
        }
        return this;
    }

    log() {
        let arr = [];
        for (let i = 0; i < this.length; i++) {
            arr.push(this.get(i).value);
        }
        return arr;
    }
}

let singly_list = new Singlylinkedlist();
singly_list.push(1);
singly_list.push(2);
singly_list.push(3);
singly_list.push(4);

// let node = this.head;
//    let next,prev=null
//    this.head = this.tail;
//    this.tail = node
//    for(let i=0;i<this.length;i++){
//         next = node.next;
//         node.next = prev;
//         prev = node;
//         node = next;
//    }
//    return this;
