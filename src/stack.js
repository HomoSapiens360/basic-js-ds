const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement the Stack with a given interface via array.
 *
 * @example
 * const stack = new Stack();
 *
 * stack.push(1); // adds the element to the stack
 * stack.peek(); // returns the peek, but doesn't delete it, returns 1
 * stack.pop(); // returns the top element from stack and deletes it, returns 1
 * stack.pop(); // undefined
 *
 */
class Stack {

  constructor() {
    if (!this.st) {
      this.st = []
    }
  }

  push(element) {
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    if (element) {
      this.st.push(element);
    }
  }

  pop() {
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    if (this.st.length) {
      return this.st.pop();
    }
  }

  peek() {
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    if (this.st.length) {
      return this.st[this.st.length - 1];
    }
    return undefined;
  }
}

module.exports = {
  Stack
};
