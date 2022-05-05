export default class HashTableNormal {
  #buckets = null;
  #size = 0;

  /**
   * @param {number} n
   */
  constructor(n = this.DEFAULT_BUCKET_SIZE) {
    this.#buckets = new Array(n);
    this.#size = 0;
  }

  get DEFAULT_BUCKET_SIZE() {
    return 32;
  }

  get size() {
    return this.#size;
  }

  get buckets() {
    return this.#buckets;
  }

  hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash += key.charCodeAt(i);
    }
    return hash % this.#buckets.length;
  }

  /**
   * @param {*} key
   * @param {*} value
   * @returns
   */
  set(key, value) {
    const index = this.hash(key);
    if (this.#buckets[index]) {
      for (let i = 0; i < this.#buckets[index].length; i++) {
        if (this.#buckets[index][i][0] === key) {
          this.#buckets[index][i][1] = value;
          return;
        }
      }
      this.#buckets[index].push([key, value]);
    } else {
      this.#buckets[index] = [];
      this.#buckets[index].push([key, value]);
    }
    this.#size++;
  }

  /**
   * @param {*} key
   * @returns
   */
  get(key) {
    const index = this.hash(key);
    if (this.#buckets[index]) {
      for (let i = 0; i < this.#buckets.length; i++) {
        if (this.#buckets[index][i][0] === key) {
          return this.#buckets[index][i][1];
        }
      }
    }
    return undefined;
  }

  /**
   * @param {*} key
   * @returns {boolean}
   */
  has(key) {
    const index = this.hash(key);
    if (this.#buckets[index]) {
      for (let i = 0; i < this.#buckets.length; i++) {
        if (this.#buckets[index][i][0] === key) {
          return true;
        }
      }
    }
    return false;
  }

  /**
   * @param {*} key
   * @returns
   */
  remove(key) {
    const index = this.hash(key);

    if (this.#buckets[index] && this.#buckets[index].length) {
      for (let i = 0; i < this.#buckets.length; i++) {
        if (this.#buckets[index][i][0] === key) {
          this.#buckets[index].splice(i, 1);
          this.#size--;
          return true;
        }
      }
    } else {
      return false;
    }
  }

  display() {
    this.#buckets.forEach((values, index) => {
      const chainedValues = values.map(
        ([key, value]) => `[ ${key}: ${value} ]`
      );
      console.log(`${index}: ${chainedValues}`);
    });
  }
}
