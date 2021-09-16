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
     * @param el 
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

    /** 
     * 在鍊表頭添加節點
     * @param el 新增節點需要儲存的值
     * 
     */
    public addFirst(el: E): void {
        // newNode.next = this.head;
        this.head = new MyNode(el, this.head);

        this.size++;
    }

    /**
     * 在指定索引的位置插入新的節點
     * @param index 需要插入的位置
     * @param el 需要插入的值
     */
    public add(index: number, el: E):void {
        //檢測索引的合法性
        if (index < 0 || index >= this.size) {
            throw new Error('get failed, required index >=  0 && index <= array size');
        }
        //插入位置 = 0，直接調用 addFirst
        if (index === 0) {
            this.addFirst(el);
        } else {
            //先創建一個新的節點
            const newNode = new MyNode(el);
            //找到指定位置前一個節點 pre, 從 head 開始尋找
            let pre = this.head;
            for (let i = 0; i < index - 1; i++) {
               pre = pre.next;
            }
            //將新節點 node 的指針指向 pre.next
            newNode.next = pre.next;
            //pre.next 的指針指向新節點 node
            pre.next = newNode;

            this.size++;
        }
    }
}