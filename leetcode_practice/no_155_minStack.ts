import { DynamicArrayStack } from './../stack/dynamicArrayStack';
import { Stack } from './../stack/stack';

class MinStack1 {
  private dataStack: Stack<number>;
  private minStack: Stack<number>;

  constructor() {
    this.dataStack = new DynamicArrayStack();
    this.minStack = new DynamicArrayStack(); 
  }

  public push(x: number) {
    this.dataStack.push(x);
    // 如果去掉等於，可能會出現 dataStack 不為空，但 minStack 是空的
    // 使 getMin 異常
    if (this.minStack.isEmpty() || x <= this.minStack.peek()) {
      this.minStack.push(x);
    }
  }

  public pop() {
    const top = this.dataStack.pop();
    if (this.minStack.peek() === top) {
      this.minStack.pop();
    }
  }

  public top() {
    return this.dataStack.peek();
  }

  public getMin() {
    return this.minStack.peek();
  }
}

class MinNode {
	val: number;
	min: number;
  next: MinNode;

	constructor(val?: number, min?: number) {
		this.val = val;
		this.min = min;
	}
}

class MinStack2 {
  private stack: Stack<MinNode>;

  constructor() {
    this.stack = new DynamicArrayStack();
  }

  public push(x: number) {
    const node = new MinNode();
    node.val = x;
    let min = x;
    if (!this.stack.isEmpty() && this.stack.peek().min < x) {
      min = this.stack.peek().min;
    }
    node.min = min;
    this.stack.push(node);
  }

  public pop() {
    this.stack.pop().val;
  }

  public top() {
    return this.stack.peek().val;
  }

  public getMin() {
    return this.stack.peek().min;
  }
}

class MinStack3 {
  private dummyhead: MinNode;

  constructor() {
    this.dummyhead = new MinNode();
  }

  public push(x: number) {
    let min = x;
    const head = this.dummyhead.next;
    if (head !== null && head.min < x) {
      min = head.min;
    }
    const node = new MinNode(x, min);
    // 新增的節點從錶頭新增
    node.next = this.dummyhead.next;
    this.dummyhead.next = node;
  }

  public pop() {
    // 從錶頭刪除節點
    const head = this.dummyhead.next;
    if (head !== null) {
      this.dummyhead.next = head.next;
      head.next = null;
    }
  }

  public top() {
    return this.dummyhead.next.val;
  }

  public getMin() {
    return this.dummyhead.next.min;
  }
} 