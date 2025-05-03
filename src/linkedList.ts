export class Node<T> {
  value: T;
  next: Node<T> | null;

  constructor(value: T) {
    this.value = value;
    this.next = null;
  }
}

export class LinkedList<T> {
  private head: Node<T> | null;
  private tail: Node<T> | null;
  private size: number;

  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  append(value: T): void {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      if (this.tail) {
        this.tail.next = newNode;
        this.tail = newNode;
      }
    }
    this.size++;
  }

  prepend(value: T): void {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.size++;
  }

  insertAt(value: T, index: number): boolean {
    if (index < 0 || index > this.size) {
      return false;
    }
    if (index === 0) {
      this.prepend(value);
      return true;
    }
    if (index === this.size) {
      this.append(value);
      return true;
    }

    const newNode = new Node(value);
    let current = this.head;
    let previous: Node<T> | null = null;
    let position = 0;
    while (position < index) {
      previous = current;
      current = current?.next || null;
      position++;
    }

    if (previous) {
      newNode.next = current;
      previous.next = newNode;
      this.size++;
      return true;
    }

    return false;
  }

  print(): void {
    let current = this.head;
    const values: T[] = [];

    while (current) {
      values.push(current.value);
      current = current.next;
    }
    console.log(values.join(" -> "));
  }
}
