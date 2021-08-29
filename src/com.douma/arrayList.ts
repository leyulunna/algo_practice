class ArrayList {
    private data: number[];
    private capacity: number;
    private size: number;

    public arrayList(capacity: number) {
        this.data = new Array(capacity);
        this.capacity = capacity;
        this.size = 0;
    }

    public initArrayList() {
        this.arrayList(15);
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

    public add(index: number, el: number): void {
        if(this.size === this.data.length) {
            throw new Error('add failed, Array is full');
        }
        if(this.size < 0 || index > this.size) {
            throw new Error('add failed, required index >=  0 && index <= array size');
        }
        for (let i = this.size - 1; i >= index ; i--) {
            this.data[i + 1] = this.data[i];
        }
        this.data[index] = el;
        this.size++;
    }

    public addFirst(el: number): void {
        this.add(0, el);
    }

    public addLast(el: number): void {
        this.add(this.size, el);
    }
}