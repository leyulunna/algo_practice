export interface Queue<E> {
  /**
    * 查看隊列中的元素個數
    * @return 
    */
   getSize(): number;

   /**
    * 判斷隊列是否為空
    * @return 
    */
   isEmpty(): boolean;

   /**
    * enqueue
    * 入隊
    * @param el
    */
    enqueue(el: E): void;

    /**
    * dequeue
    * 出隊
    * @return
    */
    dequeue(): E;

    /**
    * 查看隊首元素
    * @return
    */
    getFront(): E;
}