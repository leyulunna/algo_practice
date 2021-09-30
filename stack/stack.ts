export interface Stack<E> {
    /**
     * 查看棧中的元素個數
     * @return 
     */
    getSize(): number;

    /**
     * 判斷是否為空
     * @return 
     */
    isEmpty(): boolean;

    /**
     * 進棧
     * 將元素 el 壓入棧
     * @param el 
     */
    push(el: E): void;

    /**
     * 出棧
     * 將棧頂的元素 el 出棧
     * @return 
     */
    pop(): void;

    /**
     * 查看棧頂的元素
     * @return 
     */
    peek(): E;
}