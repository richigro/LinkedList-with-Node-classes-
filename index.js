// 1 --> 10 --> 5 --> 3

class Node{
  constructor(value, next = null, previous = null){
    this.value = value;
    this.next = next;
    this.previous= previous;
  }
}

// const myNode = new Node(8, 'nextNode' });
// console.log(myNode);

class LinkedList{
  constructor(value){
    this.head = new Node(value);
    this.tail = this.head;
    this.length = 1;
  }

  append(value){
    const newNode = new Node(value)
    // if()
    newNode.previous = this.tail;
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    // return this;
  }

  prepend(value){
    // next points to current head
    const newNode = new Node(value, this.head);
    // head of list gets reassigned to be newNode
    this.head = newNode;
    // new element added to list, increment length
    this.length++;
    // return this;
  }

  traverseToIndex(index) {
    let counter = 0;
    let currentNode = this.head;
    while(counter <= index){
      currentNode = currentNode.next;
      counter++;
    }
    return currentNode;
  }

  insert(index, value){
    if(index >= this.length){
      this.append(value);
      return this.printList();
    }else if(index === 0){
      this.prepend(value);
      return this.printList(value);
    }

    const newNode = new Node(value);
    const leadingNode = this.traverseToIndex(index - 1);
    const holdingPointer = leadingNode.next;
    leadingNode.next = newNode;
    newNode.next = holdingPointer;
    this.length++;
    return this.printList();
  }
  printList() {
    const array = [];
    let currentNode = this.head;
    while(currentNode !== null){
      array.push(currentNode.value);
      currentNode = currentNode.next;
    }
    return array;
  }

  remove(index) {
    const leadingNode = this.traverseToIndex(index -1);
    const nodeToBeDeleted = leadingNode.next;
    leadingNode.next = nodeToBeDeleted.next;
    this.length--;
    return this;
  }
}

// 1 --> 10 --> 5 --> 3

// const myLinkedList = new LinkedList(10);
// myLinkedList.append(5);
// myLinkedList.append(16);
// myLinkedList.prepend(1);
// myLinkedList.insert(2, 99);
// myLinkedList.insert(20, 88);
// myLinkedList.remove(2);
// myLinkedList.remove(2);
// myLinkedList.printList();

//doubly linked list

// null <--> 3 <--> 7 <--> 6 <--> 24 <-->null
const myDoublyLinkedList = new LinkedList(3);
myDoublyLinkedList.append(7);
myDoublyLinkedList.append(6);
myDoublyLinkedList.printList();
// console.log(myDoublyLinkedList);

