import { count } from "console";

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

  insertAt(index: number, value: T): void {
    if (index < 0 || index > this.size) return;
    if (index === 0) {
      this.prepend(value);
    }
    if (index === this.size) {
      this.append(value);
    }

    const newNode = new Node(value);
    let current: Node<T> | null = this.head;
    let previous: Node<T> | null = null;
    let position = 0;

    while (position < index && current) {
      previous = current;
      current = current.next;
      position++;
    }

    if (previous) {
      newNode.next = current;
      previous.next = newNode;
      this.size++;
    }
  }

  removeAt(index: number): void {
    if (index < 0 || index > this.size || !this.head) return;

    if (index === 0) {
      this.head = this.head?.next;

      if (this.size === 1) {
        this.tail = null;
      }
      this.size--;
    }

    let current: Node<T> | null = this.head;
    let previous: Node<T> | null = null;
    let position = 0;

    while (position < index && current) {
      previous = current;
      current = current.next;

      position++;
    }

    if (previous && current) {
      previous.next = current.next;

      if (index === this.size - 1) {
        this.tail = previous;
      }
      this.size--;
    }
  }

  remove(value: T): void {
    if (!this.head) return;

    if (value === this.head.value) {
      this.head = this.head.next;

      if (this.size === 1) {
        this.tail = null;
      }
      this.size--;
    }

    let current: Node<T> | null = this.head;
    let previous: Node<T> | null = null;
    let position = 0;

    while (current && current.value !== value) {
      previous = current;
      current = current.next;

      position++;
    }

    if (!current) return;

    if (previous) {
      previous.next = current.next;

      if (current === this.tail) {
        this.tail = previous;
      }
      this.size--;
    }
  }

  removeDuplicates(): void {
    if (!this.head) return;
    let current: Node<T> | null = this.head;
    let previous: Node<T> | null = null;
    const hasSeen = new Set<unknown>();

    while (current) {
      if (hasSeen.has(current.value)) {
        if (previous) {
          previous.next = current.next;

          if (current === this.tail) {
            this.tail = previous;
          }
        }
        current = current.next;
        this.size--;
      } else {
        hasSeen.add(current.value);
        previous = current;
        current = current.next;
      }
    }
  }

  removeNodes(head: Node<T>): Node<T> | null {
    if (!head || head.next === null) return head;
    let nextNode = this.removeNodes(head.next);
    if (nextNode) {
      if (nextNode?.value > head.value) {
        return nextNode;
      }
    }
    head.next = nextNode;
    return head;
  }

  returnKthToLast(k: number): T | null {
    if (k <= 0 || k > this.size || !this.head) return null;
    let current: Node<T> | null = this.head;
    let targetPosition = this.size - k;
    let position = 0;
    while (position < targetPosition && current) {
      current = current.next;
      position++;
    }

    return current ? current.value : null;
  }

  partition(value: T): void {
    if (!this.head) return;
    let beforeDummy = new Node<T>(null as any);
    let afterDummy = new Node<T>(null as any);

    let before: Node<T> | null = beforeDummy;
    let after: Node<T> | null = afterDummy;

    let current: Node<T> | null = this.head;
    while (current) {
      const nextNode: Node<T> | null = current.next;

      current.next = null;

      if (current.value > value) {
        after.next = current;
        after = current;
      } else {
        before.next = current;
        before = current;
      }

      current = nextNode;
    }
    before.next = afterDummy.next;
    this.head = beforeDummy.next;
  }

  print(): void {
    let current = this.head;
    const values: T[] = [];
    while (current) {
      values.push(current.value);
      current = current.next;
    }
    console.log(values.join("->"));
  }
}
