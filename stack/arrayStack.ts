import { Stack } from './stack';

export class ArrayStack<E> implements Stack<E> {
    private data: E[];
    private size: number;

    constructor(capacity: number) {
        this.data = new Array(capacity);
        this.size = 0;
    }

    getSize(): number {
        return this.size;
    }

    isEmpty(): boolean {
        return this.size === 0;
    }

    push(el: E): void {
        if(this.size === this.data.length) {
            throw new Error('Push failed, Stack is full');
        }
        this.data[this.size] = el;
        this.size++;
    }

    pop(): E {
        if(this.isEmpty()) {
            throw new Error('Pop failed, Stack is empty');
        }
        // 先記住要刪除的元素
        const ret: E = this.data[this.size - 1];
        // size 減 1 元素即刪除
        this.size--;
        return ret;
    }

    peek(): E {
        if(this.isEmpty()) {
            throw new Error('Pop failed, Stack is empty');
        }
        return this.data[this.size - 1];
    }

}