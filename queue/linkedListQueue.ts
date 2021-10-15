import { LinkedList } from './../linkedlist/LinkedList';
import { Queue } from "./queue";

class LinkedListQueue<E> implements Queue<E> {
  private data: LinkedList<E>;

  constructor() {
    this.data = new LinkedList<E>();
  }

  getSize(): number {
    return this.data.getSize();
  }

  isEmpty(): boolean {
    return this.data.isEmpty();
  }

  // 錶尾(隊尾)新增元素
  enqueue(el: E): void {
    this.data.addLast(el);
  }

  // 錶頭(隊首)刪除元素
  dequeue(): E {
    return this.data.removeFirst();
  }

  getFront(): E {
    return this.data.getFirst();
  }

  stringifyQueue() {
    this.data.stringifyList();
  }
}