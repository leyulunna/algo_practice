import { Stack } from './stack';
import { LinkedList } from '../linkedlist/LinkedList';

class LinkedListStack<E> implements Stack<E> {
    private linkedList: LinkedList<E>;

    constructor() {
        this.linkedList = new LinkedList();
    }

    getSize(): number {
        return this.linkedList.getSize();
    }

    isEmpty(): boolean {
        return this.linkedList.isEmpty();
    }

    push(el: E): void {
        this.linkedList.addFirst(el);
    }

    pop(): void {
        this.linkedList.removeFirst();
    }

    peek(): E {
        return this.linkedList.getFirst();
    }

    stringifyStack() {
        this.linkedList.stringifyList();
    }
    
}

const stack = new LinkedListStack<number>();

stack.push(10);
stack.stringifyStack();
stack.push(20);
stack.stringifyStack();
stack.push(30);
stack.stringifyStack();
stack.pop();
stack.stringifyStack();
stack.pop();
stack.stringifyStack();
stack.pop();
stack.stringifyStack();