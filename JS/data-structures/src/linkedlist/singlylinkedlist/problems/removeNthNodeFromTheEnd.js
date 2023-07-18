import Singlylinkedlist from '..';

class RemoveNthFromTheEnd extends Singlylinkedlist {
    removeNthFromEnd(n) {
        if (n == 0) return this;
        if (n < 0 || n > this.length) return false;
        if (n === this.length) return this.head.next;
        let current = this.head;
        for (var i = 0; i < this.length - n - 1; i++) {
            current = current.next;
        }
        console.log({ current });
        current.next = current.next.next;
        this.length--;
        return this;
    }
}

let sl = new RemoveNthFromTheEnd();
sl.push(1);
sl.push(2);
sl.push(3);
sl.push(4);
sl.push(5);
console.log('removeNthFromEnd', sl.removeNthFromEnd(6));
