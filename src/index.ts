import { LinkedList } from "./linkedList";

const linkedList = new LinkedList<number>();
linkedList.append(10);
linkedList.append(20);
linkedList.prepend(5);
linkedList.insertAt(15, 2);

linkedList.print();
