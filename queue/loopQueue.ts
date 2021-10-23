import { Queue } from "./queue";

class LoopQueue<E> implements Queue<E> {
  private data: E[];
  private head: number;
  private tail: number;
  private size: number;

  constructor(capacity: number) {
    this.data = new Array(capacity);
    this.head = this.tail = 0;
    this.size = 0
  }

  getSize(): number {
    return this.size;
  }

  // 查詢當前隊列的容量
  getCapacity(): number {
    return this.data.length - 1;
  }

  resize(newCapacity: number): void {
    const newData = new Array(newCapacity + 1);
    for (let i = 0; i < this.size; i++) {
      newData[i] = this.data[(i + this.head) % this.data.length];
    }
    this.data = newData;
    this.head = 0;
    this.tail = this.size;
  }

  enqueue(el: E): void {
    if ((this.tail + 1) % this.data.length === this.head) {
      this.resize(this.getCapacity() * 2);
    }
    this.data[this.tail] = el;
    this.size++;
    this.tail = (this.tail + 1) % this.data.length;
  }

  dequeue(): E {
    if (this.isEmpty()) {
      throw new Error('dequeue error, no element for dequeue');
    }
    const res = this.data[this.head];
    this.data[this.head] = null;
    this.size--;
    this.head = (this.head + 1) % this.data.length;
    if (this.size === this.getCapacity() / 4) {
      this.resize(this.getCapacity() / 2);
    }
    return res;
  }

  getFront(): E {
    return this.data[this.head];
  }
  
  isEmpty(): boolean {
    return this.head === this.tail;
  }

  stringifyQueue() {
    console.log(this.getCapacity());
    console.log(this.getSize());
    console.log('[')
    for (let i = this.head; i !== this.tail; i = (i + 1) % this.data.length) {
      if ((i + 1) % this.data.length !== this.tail) {
        console.log(this.data[i] + ',');
      } else {
        console.log(this.data[i]);
      }
    }
    console.log(']')
  }
}