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
       const node = this.node(index);
       if(node === null) { throw new Error('get failed, required index >=  0 && index <= array size'); }
       return node.e;
    }

    public getFirst() {
        return this.first;
    }

    public getLast() {
        return this.last;
    }

    private node(index: number): MyNode<E> {
        //改回傳 null
        if (index < 0 || index >= this.size) {
            return null;
        }
        if (index < this.size / 2) {
            let curr = this.first;
            for (let i = 0; i < index; i++) {
                curr = curr.next;
            }
            return curr;
        } else {
            let curr = this.last;
            // 從 0 開始算，需要減 1
            for (let i = 0; i < this.size - index - 1; i++) {
                curr = curr.pre;
            }
            return curr;
        }
    }

    public set(index: number, el: E): void {
        const node = this.node(index);
       if(node === null) { throw new Error('get failed, required index >=  0 && index <= array size'); }
       node.e = el;
    }

    /**
     * 加入錶頭節點
     * @param el    
     */
    public addFirst(el: E): void {
        const newNode = new MyNode(el);
        //先檢查是否為空鍊表
        if (this.first === null) {
            this.last = newNode;
        } else {
            this.first.pre = newNode;
            newNode.next = this.first;
        }
        this.first = newNode;
	    this.size++;
    }

    /**
     * 加入尾節點
     * @param el
     */
    public addLast(el:E): void {
        const newNode = new MyNode(el);
        //先檢查是否為空鍊表
        if(this.last === null) {
            this.first = newNode;
        } else {
            newNode.pre = this.last;
            this.last.next = newNode
        }
        this.last = newNode;
        this.size++;
    }

    /**
     * 雙向鍊表中間加入節點
     * @param el
     * @param index
     */
    public add(index: number, el: E) {
        if (index < 0 || index > this.size) {
            throw new Error('add failed, required index >=  0 && index < linked list size');
        }
        if (index === this.size) {
            this.addLast(el);
        } else if (index === 0) {
            this.addFirst(el)
        } else {
            const oldNode = this.node(index);
            const preNode = oldNode.pre;
            const newNode = new MyNode(el, preNode, oldNode);
            oldNode.pre = newNode;
            preNode.next = newNode;
            this.size++;
        }
    }

    /**
     * 刪除錶頭節點
     * @return 被刪除節點 
     */
    public removeFirst(): E {
        if(this.first === null) {
            throw new Error('No such element');
        }
        //要刪除節點先記下來
        const e: E = this.first.e;
        //要刪除節點的下一個節點記下來
        const next = this.first.next;
        //next = null, 說明鍊表只有一個節點
        if (next === null) {
            this.first = null;
            this.last = null;
        } else {
            this.first.next = null;
            next.pre = null;
            this.first = next;
        }
        this.size--;
        return e;
    }

    /**
     * 刪除錶尾節點
     * @return 被刪除節點 
     */
    public removeLast(): E {
        if(this.last === null) {
            throw new Error('No such element');
        }
        //要刪除節點先記下來
        const e: E = this.last.e;
        //要刪除節點的前一個節點記下來
        const pre = this.last.pre;
        //pre = null, 說明鍊表只有一個節點
        if (pre === null) {
            this.first = null;
            this.last = null;
        } else {
            this.last.pre = null;
            pre.next = null;
            this.last = pre;
        }
        this.size--;
        return e;
    }

    /**
     * 刪除鍊表中間節點
     * @return 被刪除節點
     */
    public remove(index: number): E {
        if (index < 0 || index >= this.size) {
            throw new Error('remove failed, required index >=  0 && index < linked list size');
        }
        if (index === this.size - 1) {
            return this.removeLast();
        } else if (index === 0) {
            return this.removeFirst();
        }
        const delNode = this.node(index);
        const preNode = delNode.pre;
        const nextNode = delNode.next;

        preNode.next = nextNode;
        nextNode.pre = preNode;

        delNode.next = null;
        delNode.pre = null;
        
        this.size--;
        return delNode.e;
    }
}