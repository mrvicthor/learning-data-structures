export class Node<T> {
  value: T;
  next: Node<T> | null;

  constructor(value: T) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList<T> {
  private head: Node<T> | null;
  private tail: Node<T> | null;
  private size: number;

  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  //   Add a new node to the end of the list
  append(value: T): void {
    const newNode = new Node(value);
    // if the list is empty
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      // Add to the end and update tail
      if (this.tail) {
        this.tail.next = newNode;
        this.tail = newNode;
      }
    }
    this.size++;
  }

  //   Add a new node to the beginning of the list
  prepend(value: T): void {
    const newNode = new Node(value);

    // If the list is empty
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      // Add to the beginning and update head
      newNode.next = this.head;
      this.head = newNode;
    }
    this.size++;
  }
}
