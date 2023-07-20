import Singlylinkedlist from '..';

class Reverse extends Singlylinkedlist {
    reverse1() {
        let next = null;
        let node = this.head;
        this.head = this.tail;
        this.tail = node;
        while (node) {
            let current = node.next;
            node.next = next;
            next = node;
            node = current;
        }
        return this;
    }
}

let revSL = new Reverse();
revSL.push(1);
revSL.push(2);
revSL.push(3);
revSL.push(4);

console.log('>>>', revSL.reverse1().log());
