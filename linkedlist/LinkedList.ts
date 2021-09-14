class MyNode<E> {
    e: E;
    next: MyNode<E>;

    // public node(e: E, next: MyNode<E>) {
    //     this.e = e;
    //     this.next = next;
    // }

    constructor(e: E, next?: MyNode<E>) {
        this.e = e;
        this.next = next;
    }

    public string(): string {
        return this.e.toString();
    }
}

class LinkedList<E> {
    /** 頭節點 */
    private head: MyNode<E>;
    /** 長度 */
    private size: number;

    constructor() {
        this.head = null;
        this.size = 0;
    }

    public getSize(): number {
        return this.size;
    }

    public isEmpty(): boolean {
        return this.size === 0;
    }

    /**
     * 查詢指定索引的節點的值
     * @param index 
     * @returns 
     */
    public get(index: number): E {
        if(index < 0 || index >= this.size) {
            throw new Error('get failed, required index >=  0 && index <= array size');
        }
        let curr: MyNode<E> = this.head;
        for (let i = 0; i < index; i++) {
            curr = curr.next; 
        }
        return curr.e;
    }

    public getFirst() {
        return this.get(0);
    }

    public getLast() {
        return this.get(this.size - 1);
    }

    /**
     * 修改指定索引的節點的值
     * @param index 
     * @param e 
     */
    public set(index: number, el: E): void {
        if(index < 0 || index >= this.size) {
            throw new Error('get failed, required index >=  0 && index <= array size');
        }
        let curr: MyNode<E> = this.head;
        for (let i = 0; i < index; i++) {
            curr = curr.next; 
        }
        curr.e = el;
    }
}