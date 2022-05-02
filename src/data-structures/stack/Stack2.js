export default class Stack2 {
  static UNLIMITED_CAPACITY = -1;
  #elements = [];
  #capacity = null;

  /**
   * @param {number} capacity
   */
  constructor(capacity = Stack2.UNLIMITED_CAPACITY) {
    this.setCapacity(capacity);
  }

  /**
   * @param {*} value
   * @returns {boolean}
   */
  #isInt(value) {
    return !isNaN(value) && parseInt(value) === value;
  }

  /**
   * @param {number} capacity
   */
  setCapacity(capacity) {
    if (!this.#isInt(capacity)) throw Error("Capacity is not a number");
    if (capacity < 0 && capacity !== Stack2.UNLIMITED_CAPACITY)
      throw Error("Capacity is not negative number");
    this.#capacity = capacity;
  }

  /**
   * @return {boolean}
   */
  get isEmpty() {
    return this.size === 0;
  }

  /**
   * @return {boolean}
   */
  get isFull() {
    return this.size === this.#capacity;
  }

  /**
   * @return {number}
   */
  get size() {
    return this.#elements.length;
  }

  /**
   * @return {*}
   */
  peek() {
    if (this.isEmpty) return undefined;
    return this.#elements[this.size - 1];
  }

  /**
   * @param {*} value
   */
  push(value) {
    if (this.isFull) return undefined;
    return this.#elements.push(value);
  }

  /**
   * @return {*}
   */
  pop() {
    return this.#elements.pop();
  }

  /**
   * @returns {*} elements
   */
  toArray() {
    return this.#elements;
  }

  clear() {
    this.#elements = [];
  }
}
