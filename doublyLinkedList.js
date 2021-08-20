class Node {
    constructor(data, next = null, prev = null) {
        this.data = data;
        this.next = next;
        this.prev = prev;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    // Adding node at first position
    addAtFirst(val) {
        const node = new Node(val);
        if (this.size === 0) {
            this.head = node;
            this.tail = node;
        } else {
            node.next = this.head;
            this.head.prev = node;
            this.head = node;
        }
        this.size+=1;
    }

    // Adding node at last position
    addAtLast(val) {
        let node = new Node(val);
        if (this.size === 0) {
            this.head = node;
            this.tail = node;
        } else {
            node.prev = this.tail;
            this.tail.next = node;
            this.tail = node;
        }
        this.size+=1;
    }


    // Adding node at specific index
    addAtSpecificIndex(val, index) {
        let node = new Node(val);
        let  current = this.head;
        let previous;
        let count = 0;
        while(count < index) {
            current = current.next;
            count+=1;
        }
        previous = current.prev;
        previous.next = node;
        node.prev = current.prev;
        current.prev = node;
        node.next = current;
        this.size+=1;

    }


    // Print Doubly Linked List from left to right
    printlr() {
        let current = this.head;
        while(current) {
            console.log(current.data);
            current = current.next;
        }
    }


    // Print Doubly Linked List from right to left
    printrl() {
        let current = this.tail;
        while(current) {
            console.log(current.data);
            current = current.prev;
        }
    }

    // Getting head element
    getHead() {
        console.log(this.head.data);
    }


    // Getting tail element
    getTail() {
        console.log(this.tail.data);
    }
    
    // Getting element at specific index
    getAtIndex(index) {
        let current = this.head;
        let count = 0;
        while(count < index) {
            current = current.next;
            count+=1;
        }
        console.log(current.data);
    }

    // Delete first node
    delAtFirst() {
        let current = this.head;
        this.head = current.next;
        this.head.prev = null;
        current.next = null;
    }

    // Delete last node
    delAtLast() {
        let current = this.tail;
        this.tail = current.prev;
        this.tail.next = null;
        current.prev = null;
    }

    // Delete at any position
    delAtIndex(index) {
        let current = this.head;
        let count = 0;
        let tmp;
        while(count < index) {
            current = current.next;
            count+=1;
        }
        tmp = current.prev;
        tmp.next = current.next;
        current.next = null;
        this.size-=1;
    }

}
const dll = new DoublyLinkedList();

// let sortingLinkedList = function(list) {
//     let n1 = list.head;
//     let n2 = n1.next;
//     // console.log(p);
//     // console.log(q);
//     while(n2.next) {
//         if(n1.data < n2.data) {
//             n1.next = n2.next;
//             n2.next = n1;
//             n2.prev = n1.prev;
//             n1.prev = n2;
//         }
//         n1 = n2;
//         n2 = n1.next;
//     }
// }


dll.addAtFirst(100);
dll.addAtFirst(200);
dll.addAtFirst(300);
// console.log(dll.head);
dll.addAtSpecificIndex(400, 1);
dll.printlr();
// sortingLinkedList(dll);
// console.log("<br>");
// dll.printlr();
// console.log("Size of dll " + dll.size);
// dll.getHead();
// dll.getTail();
// dll.getAtIndex(2);
// dll.delAtFirst();
// dll.printlr();
// dll.delAtLast();
// dll.delAtIndex(1);
// dll.printlr();
// console.log(dll);