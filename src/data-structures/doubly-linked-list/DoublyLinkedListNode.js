export default class DoublyLinkedListNode {
  constructor(value, next = null, previous = null) {
    this.#value = value;
    this.#next = next;
    this.#previous = previous;
  }

  toString(callback) {
    return callback ? callback(this.value) : `${this.value}`;
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

  get previous() {
    return this.#previous;
  }

  set previous(previous) {
    this.#previous = previous;
  }
}
