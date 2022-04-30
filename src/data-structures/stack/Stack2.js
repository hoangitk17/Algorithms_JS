export default class Stack2 {
  constructor() {
    this.elements = [];
  }

  /**
   * @return {boolean}
   */
  isEmpty() {
    return this.size === 0;
  }

  /**
   * @return {*}
   */
  peek() {
    return this.elements[this.size - 1];
  }

  /**
   * @return {number}
   */
  get size() {
    return this.elements.length;
  }

  /**
   * @param {*} value
   */
  push(value) {
    return this.elements.push(value);
  }

  /**
   * @return {*}
   */
  pop() {
    return this.elements.pop();
  }
}
