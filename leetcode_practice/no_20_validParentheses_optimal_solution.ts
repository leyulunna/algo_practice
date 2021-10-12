import { DynamicArrayStack } from './../stack/dynamicArrayStack';
import { Stack } from './../stack/stack';

class ValidParentheses {
  public isValid(str: string): boolean {
    if(str === null) return true;
    const stack = [];
    for (const c of str.split('')) {
      // 空字符串可被认为是有效字符串
      if (c === ' ') continue;
      if (c === '(' || c === '[' || c === '{') {
        // 如果是左括號，將左括號壓入棧
        stack.push(c);
      } else {
        // 棧裡沒有與右括號匹配的左括號
        if (stack.length === 0) { return false; }
        // 判斷棧頂元素是否等於左括號對應的右括號
        let topElemnt: string = stack.pop();
        this.isMatched(c, topElemnt);
      }
    }
    // 如果棧不為空，也算沒有匹配好
    return stack.length === 0;
  }

  private isMatched(c1: string, c2: string): boolean {
    if (c1 === ')') {
      return c2 === '('
    } else if (c1 === ']') {
      return c2 === '['
    } else if (c1 === '}') {
      return c2 === '{'
    } else {
      return false;
    }
  }
}