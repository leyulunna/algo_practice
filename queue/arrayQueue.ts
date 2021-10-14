import { ArrayList } from "../array/arrayList";
import { Queue } from "./queue";

class ArrayQueue<E> implements Queue<E> {
  private data: ArrayList<E>;

  constructor(capacity: number) {
    this.data = new ArrayList<E>(capacity);
  }

  getSize(): number {
    return this.data.getSize();
  }

  isEmpty(): boolean {
    return this.data.isEmpty();
  }

  // 隊尾新增元素
  enqueue(el: E): void {
    return this.data.addLast(el);
  }

  // 隊首刪除元素
  dequeue(): E {
    return this.data.removeFirst();
  }

  getFront(): E {
    return this.data.getFirst();
  }

  public stringifyQueue() {
    console.log(this.data);
  }
  
}