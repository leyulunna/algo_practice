class MyNode<E> {
    e: E;
    next: MyNode<E>;

    constructor(e: E, next?: MyNode<E>) {
        this.e = e;
        this.next = next;
    }

    public string(): string {
        return this.e.toString();
    }
}

class LinkedList<E> {
    /** 虛擬頭節點 */
    private dummyHead: MyNode<E>;
    /** 長度 */
    private size: number;

    constructor() {
        this.dummyHead = new MyNode<E>(null);
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
        let curr: MyNode<E> = this.dummyHead.next;
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
     * @param el 
     */
    public set(index: number, el: E): void {
        if(index < 0 || index >= this.size) {
            throw new Error('get failed, required index >=  0 && index <= array size');
        }
        let curr: MyNode<E> = this.dummyHead.next;
        for (let i = 0; i < index; i++) {
            curr = curr.next; 
        }
        curr.e = el;
    }

    /** 
     * 在鍊表頭添加節點
     * @param el 新增節點需要儲存的值
     * 
     */
    public addFirst(el: E): void {
        this.add(0, el);
    }

    public addLast(el: E): void {
        this.add(this.size, el);
    }

    /**
     * 在指定索引的位置插入新的節點
     * @param index 需要插入的位置
     * @param el 需要插入的值
     */
    public add(index: number, el: E):void {
        //檢測索引的合法性
        if (index < 0 || index > this.size) {
            throw new Error('get failed, required index >=  0 && index < size');
        }
        
        //從 0 開始 pre 就直接是虛擬節點
        let pre = this.dummyHead;
        for (let i = 0; i < index; i++) {
           pre = pre.next;
        }
        
        pre.next = new MyNode(el, pre.next);

        this.size++;
        
    }

    /** 
     * 刪除鍊表頭節點
     * 
     */
    public removeFirst(): E {
        return this.remove(0);
    }

    /**
     * 刪除指定索引的節點，並返回刪除的節點的值
     * @param index 需要插入的位置
     * @return 
     */
    public remove(index: number): E {
        //檢測索引的合法性
        if (index < 0 || index >= this.size) {
            throw new Error('get failed, required index >=  0 && index < size');
        }
        
        //從 0 開始 pre 就直接是虛擬節點
        let pre = this.dummyHead;
        for (let i = 0; i < index; i++) {
            pre = pre.next;
        }
        //臨時儲存要刪除節點
        const delNode = pre.next;
        pre.next = delNode.next;
        delNode.next = null;

        this.size--;
        return delNode.e;
    }

    public removeLast(): E {
        return this.remove(this.size - 1);
    }

    /**
     * 判斷鍊表中是否存在指定值
     * @param e 指定值
     * @return 
     */
    public contains(el: E): boolean {
        //從真正的頭節點查找
        let curr = this.dummyHead.next;
        while(curr !== null) {
            if(curr.e === el) { return true; }
            curr = curr.next
        }
        //退出 while statement 表示沒有找到
        return false;
    }

    public stringifyList() {
        let curr = this.dummyHead.next;
        for (let i = 0; i < this.size; i++) {
            console.log(curr.e + '=>');
            curr = curr.next;
        }
        console.log('null');
    }
}