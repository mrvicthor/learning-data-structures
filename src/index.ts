import { LinkedList } from "./linkedList";

const linkedList = new LinkedList<number>();
linkedList.append(10);
linkedList.append(20);
linkedList.prepend(5);
linkedList.append(6);
linkedList.append(10);
linkedList.append(4);
linkedList.append(10);
linkedList.insertAt(15, 2);

linkedList.print();

linkedList.append(5);
linkedList.append(2);
linkedList.append(13);
linkedList.append(3);
linkedList.append(8);

linkedList.print();
linkedList.partition(5);
linkedList.print();
