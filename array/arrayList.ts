export class ArrayList<E> {
    private data: E[];
    private capacity: number;
    private size: number;

    public constructor(capacity: number) {
        this.data = new Array(capacity); 
        this.capacity = capacity;
        this.size = 0;
    }

    public isEmpty():boolean {
        return this.size === 0;
    }

    public getSize(): number {
        return this.size;
    }

    public getCapacity(): number {
        return this.capacity;
    }

    public add(index: number, el: E): void {
        if(index < 0 || index > this.size) {
            throw new Error('add failed, required index >=  0 && index <= array size');
        }
        // 擴容
        if(this.size === this.data.length) {
            this.resize(this.data.length * 2);
        }
        for (let i = this.size - 1; i >= index ; i--) {
            this.data[i + 1] = this.data[i];
        }
        this.data[index] = el;
        this.size++;
    }

    public addFirst(el: E): void {
        this.add(0, el);
    }

    public addLast(el: E): void {
        this.add(this.size, el);
    }

    public resize(newCapacity: number): void {
        //1. 創建一個 newCapacity 的臨時數組
        const newData: E[] = new Array(newCapacity);
        //2. 將原本數組裡的元素 copy 至臨時數組
        for (let i = 0; i < this.size; i++) {
            newData[i] = this.data[i]; 
        }
        //3. 將原先數組指向新數組
        this.data = newData;
        this.capacity = newCapacity;
    }

    /** 修改操作 */
    /** 將 index 索引位置的元素修改為新元素 e */
    public set(index: number, el: E):void {
        if(index < 0 || index >= this.size) {
            throw new Error('add failed, required index >=  0 && index <= array size');
        }
        this.data[index] = el;
    }

    /** 查詢操作 */
    /** 獲取 index 索引位置的元素 */
    public get(index: number): E {
        if(index < 0 || index > this.size) {
            throw new Error('get failed, required index >=  0 && index <= array size');
        }
        return this.data[index];
    }

    public getFirst(): E {
        return this.get(0);
    }

    public getLast(): E {
        return this.get(this.size - 1);
    }

    /** 查找數組元素 el 所在的索引, 如果不存在元素 el, 則返回 -1 */
    public find(el: E): number {
        for (let i = 0; i < this.size; i++) {
            if(this.data[i] === el) {
                return i;
            }
        }
        return -1;
    }

    /** 查找數組元素 target 是否存在數組, 如果不存在元素 target, 則返回 false */
    public contains(target: E): boolean {
        for (let i = 0; i < this.size; i++) {
            if(this.data[i] === target) {
                return true;
            }
        }
        return false;
    }

    /** 刪除指定索引位置的元素 */
    public remove(index: number) {
        if(index < 0 || index >= this.size) {
            throw new Error('remove failed, required index >=  0 && index <= array size');
        }
        const res = this.data[index];
        for (let i = index + 1; i < this.size; i++) {
           this.data[i - 1] = this.data[i];
        }
        this.size--;
        this.data[this.size] = null;
        // 如果 size 等於總容量的 1/4，則進行縮容
        if(this.size === this.data.length / 4 && this.data.length / 2 !== 0) {
            this.resize(this.data.length / 2);
        }
        return res;
    }

    /** 刪除第一個元素 */
    public removeFirst(): E {
        return this.remove(0);
    }

    /** 刪除最後一個元素 */
    public removeLast(): E {
        return this.remove(this.size - 1);
    }

    /** 刪除指定元素 */
    public removeElement(el: E): void {
        const index = this.find(el);
        if(index !== -1) {
            this.remove(index);
        }
    }

    public toString(): void {
        console.log(`Array: size: ${this.size}, capacity: ${this.capacity}`);
        for (let i = 0; i < this.size; i++) {
            console.log(this.data[i] + ',')
            if(i !== this.size - 1) {
                console.log(this.data[i])
            }
        }
    }
}

// const arrayList1: ArrayList<number> = new ArrayList(5);
// arrayList1.addLast(22);
// arrayList1.addLast(13);
// arrayList1.addLast(5);
// arrayList1.addLast(78);
// arrayList1.addLast(54);
// arrayList1.addLast(43);
// console.log(arrayList1);

// arrayList1.removeLast();
// arrayList1.removeLast();
// console.log(arrayList1);
