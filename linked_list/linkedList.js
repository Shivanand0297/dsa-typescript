// 10 -> 5 -> 9

// const myLinkedList = {
//   head: {
//     value: 10,
//     next: {
//       value: 5,
//       next: {
//         value: 9,
//         next: null
//       }
//     }
//   }
// }

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null; //! for doubly linked list
  }
}

class DoublyLinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null,
      prev: null
    };
    this.tail = this.head;
    this.length = 1;
  }

  append(value) {
    // const newNode = {
    //   value: value,
    //   next: null,
    //   prev: null
    // }
    const newNode = new Node(value);
    newNode.prev = this.tail; //! for doubly linked list;
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    return this;
  }

  prepend(value) {
    // const newNode = {
    //   value, 
    //   next: null
    // }
    const newNode = new Node(value);
    newNode.next = this.head;
    this.head.prev = newNode; //! for doubly linked list
    this.head = newNode;
    this.length++;
  }

  traverseToIndex(index) {
    // check the params
    let counter = 0;
    let currentNode = this.head;
    while(counter < index){
      currentNode = currentNode.next;
      counter++;
    }
    return currentNode;
  }

  insert (index, value) {
    if (index === 0) {
      this.prepend(value);
      return this.printList();
    }

    if(index >= this.length){
      return this.append(value);
    }

    const newNode = new Node(value);
    const prevNode = this.traverseToIndex(index - 1);
    const afterNode = prevNode.next;
    prevNode.next = newNode;
    newNode.prev = prevNode;  //? DoublyLinkedList
    newNode.next = afterNode;
    afterNode.prev = newNode; //? DoublyLinkedList
    this.length++;
  }

  remove (index) {

    // if(index <=0) {
    //   const tempHead = this.head;
    //   this.head = this.head.next;
    //   this.head.prev = null;
    //   tempHead.next = null

    // }

    if(index >= this.length){
      throw new Error("Index of the element to remove cannot be greater then the length")
    }

    const prevNode = this.traverseToIndex(index - 1);
    const targetNode = prevNode.next;
    prevNode.next = targetNode.next;
    targetNode.prev = prevNode; //? DoublyLinkedList
    this.length--;
  }

  printList () {
    const listArray = [];
    let currentNode = this.head;
    while(currentNode !== null) {
      listArray.push(currentNode.value);
      currentNode = currentNode.next;
    }
    return listArray;
  }

  reverse(){
    // for singly linked list
    if(!this.head.next){
      return this.head;
    }

    let first = this.head;
    this.tail = this.head;
    let second = first.next;

    while(second){
      let temp = second.next;
      second.next = first;
      first = second;
      second = temp;
    }

    this.head.next = null;
    this.head = first;
  }
}

let myLinkedList = new DoublyLinkedList(10)
myLinkedList.append(5)
myLinkedList.append(16)
myLinkedList.reverse()
// myLinkedList.prepend(1)

// myLinkedList.insert(3, 99)

console.log(myLinkedList.printList())

// myLinkedList.remove(0)
// 9 -> 10 -> 5
console.log(myLinkedList)
console.log(myLinkedList.printList())