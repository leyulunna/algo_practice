class ValidParentheses {
  public isValid(str: string): boolean {
    const sb = String(str);
    const count = sb.length / 2;
    for (let i = 0; i < count; i++) {
      for (let j = 0; j < sb.length -1; j++) {
        let c1 = sb.charAt(j);
        let c2 = sb.charAt(j + 1);
        // 字符與鄰邊字符的反向相同，則刪除
        if (this.isMatched(c1, c2)) {
          sb.slice(j, j + 2);
          // 退出這層循環，繼續遍歷比對
          break
        }
      }
    }
    // 如果字符串留有字符，表示字符串為無效
    return sb.length === 0;
  }

  private isMatched(c1: string, c2: string): boolean {
    if (c1 === '(') {
      return c2 === ')'
    } else if (c1 === '[') {
      return c2 === ']'
    } else if (c1 === '{') {
      return c2 === '}'
    } else {
      return false;
    }
  }
}