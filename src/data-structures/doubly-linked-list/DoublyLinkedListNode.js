export default class DoublyLinkedListNode {
  #value = undefined;

  #next = null;

  #previous = null;

  constructor(value = undefined, next = null, previous = null) {
    this.#value = value;
    this.#next = next;
    this.#previous = previous;
  }

  toString(callback) {
    return callback ? callback(this.#value) : `${this.#value}`;
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
