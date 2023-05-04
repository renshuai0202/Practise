class Node {
  constructor(value) {
    this.value = value;
    this.pre = null;
    this.next = null;
  }
}

class doubleListNode {
  constructor() {
    this.head = null;
    this.tail = null;
    this.count = 0;
  }

  add(value) {
    const node = new Node(value);
    if(!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      node.pre = this.tail;
      this.tail.next = node;
      this.tail = node;
    }
  }

  addAtIndex(index, value) {
    let current = this.head,
        previous = null;
    const node = new Node(value);

    for(let i=0; i<index; i++) {
      previous = current;
      current = current.next;
    }

    current.pre = node;
    node.next = current;
    node.pre = previous;
    current = node;
  }

  toArray() {
    let result = [],
        current = this.head;

    while(current) {
      result.push(current.value);
      current = current.next;
    }

    return result;
  }
}

const listNode = new doubleListNode();
listNode.add(1);
listNode.add(3);
listNode.add(5);
listNode.add(7);
listNode.add(9);
console.log(listNode.toArray());
listNode.addAtIndex(0, 2);
listNode.addAtIndex(3, 10);
console.log(listNode.toArray());
