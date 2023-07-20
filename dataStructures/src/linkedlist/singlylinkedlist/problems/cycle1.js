import Singlylinkedlist from '..';

class List extends Singlylinkedlist {
    hasCycle() {
        if (!this.head) return false;
        let slow = this.head;
        let fast = this.head;
        while (fast) {
            if (!fast.next) return false;
            fast = fast.next.next;
            slow = slow.next;
            if (fast === slow) return true;
        }
        return false;
    }
}

const sl = new List();
sl.push(4);
sl.push(2);
sl.push(3);
sl.push(4);
sl.push(4);
sl.push(4);
let a = sl.get(3);
let b = sl.get(1);
// a.next = b;
console.log(sl.hasCycle());
