export default class LinkedListNode {
  #value = undefined;
  #next = null;

  constructor(value, next = null) {
    this.#value = value;
    this.#next = next;
  }

  get value() {
    return this.#value;
  }

  set value(value) {
    this.#value = value;
  }

  get next() {
    return this.#next;
  }

  set next(next) {
    this.#next = next;
  }

  toString(callback) {
    return callback ? callback(this.#value) : `${this.#value}`;
  }

}
