class MyNode<E> {
    e: E;
    pre: MyNode<E>;
    next: MyNode<E>;

    constructor(e: E, pre?: MyNode<E>, next?: MyNode<E>) {
        this.e = e;
        this.pre = pre;
        this.next = next;
    }

    public string(): string {
        return this.e.toString();
    }
}

class DoubleLinkedList<E> {
    first: MyNode<E>;
    last: MyNode<E>;
    size: number;

    constructor() {
        this.first = this.last = null;
        this.size = 0;
    }

    public getSize(): number {
        return this.size;
    }

    public isEmpty(): boolean {
        return this.size === 0;
    }

    /**
    * 查詢指定索引 index 所在節點的值
    * @param index
    */
    public get(index: number):E {
        if (index < 0 || index >= this.size) {
            throw new Error('get failed, required index >=  0 && index <= array size');
        }
        if (index < this.size / 2) {
            let curr = this.first;
            for (let i = 0; i < index; i++) {
                curr = curr.next;
            }
            return curr.e;
        } else {
            let curr = this.last;
            // 從 0 開始算，需要減 1
            for (let i = 0; i < this.size - index - 1; i++) {
                curr = curr.pre;
            }
            return curr.e;
        }
    }

    public getFirst() {
        return this.first;
    }

    public getLast() {
        return this.last;
    }
}