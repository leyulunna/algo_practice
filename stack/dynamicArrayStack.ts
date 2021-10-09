import { Stack } from './stack';
import { ArrayList } from '../array/arrayList';

class DynamicArrayStack<E> implements Stack<E> {
    private data: ArrayList<E>;
    
    constructor(capacity: number) {
        this.data = new ArrayList(capacity);
    }

    getSize(): number {
        return this.data.getSize();
    }

    isEmpty(): boolean {
        return this.data.isEmpty();
    }

    push(el: E): void {
       this.data.addLast(el);
    }

    pop(): void {
        this.data.removeLast();
    }

    peek(): E {
        return this.data.getLast();
    }

    stringifyStack() {
        console.log(this.data);
    }

}