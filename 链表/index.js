class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class ListNode {
  constructor() {
    this.head = null;
    this.tail = null;
    this.count = 0;
  }

  get length() {
    return this.count;
  }

  add(value) {
    const node = new Node(value);
    let current = this.head;

    if(!current) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
    this.count++;
  }

  delete(value) {
    let current = this.head,
        previous = null;
    while(current) {
      if(current.value === value) {
        if(!previous) {
          this.head = current.next;
        } else {
          previous.next = current.next;
        }
        this.count--;
        return true;
      }
      previous = current;
      current = current.next;
    }
    return false;
  }

  contain(value) {
    let current = this.head;
    while(current) {
      if(current.value === value) {
        return true;
      } else {
        current = current.next;
      }
    }
    return false;
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

  findIndexValue(index) {
    if(index>=this.count) {
      return null;
    }
    let current = this.head;
    for(let i=0; i<index; i++) {
      current = current.next;
    }
    return current.value;
  }
}

const listNode = new ListNode();
listNode.add(1);
listNode.add(3);
listNode.add(5);
listNode.add(7);
listNode.add(9);
listNode.add(10);
listNode.add(11);
console.log(listNode.toArray());
console.log(listNode.length);
listNode.delete(10);
console.log(listNode.toArray());
console.log(listNode.contain(9));
console.log(listNode.contain(19));
console.log(listNode.length);
console.log(listNode.findIndexValue(5));