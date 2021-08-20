class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  // Length of linked list
  lengthOfLinkedList(linkedList) {
    let current = this.head;
    while (current) {
      this.size += 1;
      current = current.next;
    }
    console.log(this.size);
  }

  // Add data to front of linked list
  insertFirst(val) {
    this.head = new Node(val, this.head);
    // console.log(node);
    // this.size += 1;
  }

  // Print linked list
  printLinkedList() {
    let current = this.head;
    while (current) {
      console.log(current.data);
      current = current.next;
    }
  }

  // Insert at specific index
  insertAtIndex(val, index) {
    // If index is out of range
    if (index > 0 && index > this.size) {
      return;
    }

    // If index is first element
    if (index === 0) {
      this.head = new Node(val);
      //   this.size += 1;
    }

    // At specific index
    const node = new Node(val);
    let current, previous;

    // Creating variable to loop
    let count = 0;
    current = this.head;
    while (count < index) {
      previous = current;
      current = current.next;
      count += 1;
    }
    node.next = current;
    previous.next = node;
    // this.size += 1;
  }

  // Insert at last
  insertLast(val) {
    const node = new Node(val);
    if (!this.head) {
      this.head = node;
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = node;
    }
    // this.size += 1;
  }

  // Delete from last
  delLastNode() {
    let deletingNode = this.head;
    let count = 0;
    // console.lsog(this.size);
    while (count < this.size - 2) {
      deletingNode = deletingNode.next;
      count += 1;
    }
    // console.log(deletingNode);
    deletingNode.next = null;
    // this.size -= 1;
  }

  // Delete from first
  delFirstNode() {
    let deletingNode = this.head;
    this.head = deletingNode.next;
    deletingNode.next = null;
    // this.size -= 1;
  }

  // Delete from specific index
  delNodeFromIndex(index) {
    let current = this.head;
    let previous;
    let count = 0;
    while (count < index) {
      previous = current;
      current = current.next;
      count += 1;
    }
    previous.next = current.next;
    current.next = null;
    // this.size -= 1;
  }

  // Get head node
  getHeadNode() {
    return this.head.data;
  }

  // Get last node
  getLastNode() {
    let current = this.head;
    while (current.next) {
      current = current.next;
    }
    console.log("This is last node " + current.data);
  }

  // Get specific index node
  getSpecificIndexNode(index) {
    let current = this.head;
    let count = 0;
    while (count < index) {
      current = current.next;
      count += 1;
    }
    console.log(`${current.data} is the data at ${index} index`);
  }
}

const ll = new LinkedList();
ll.insertFirst(100);
ll.insertFirst(200);
ll.insertFirst(300);
ll.insertFirst(400);
ll.insertAtIndex(600, 2);
// ll.delFirstNode();
// ll.delLastNode();
// ll.delNodeFromIndex(2);
// ll.printLinkedList();
// console.log("Head node is " + ll.getHeadNode());
// ll.getLastNode();
// ll.getSpecificIndexNode(2);
// console.log(ll.size + " Size of linked list");

// console.log(ll);

var reverseLinkedList = function (linkedList) {
  let current = linkedList;
  while (current.next) {
    let after = current.next;
    let tmp = after.next;
    after.next = current;
    console.log(after.next);
    current = tmp;
    console.log(current);
  }
  console.log(current);
};

// reverseLinkedList(ll.head);

ll.lengthOfLinkedList(ll);
