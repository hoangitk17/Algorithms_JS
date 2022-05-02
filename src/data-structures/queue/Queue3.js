/**
 * Hàng đợi vòng
 * https://www.geeksforgeeks.org/circular-queue-set-1-introduction-array-implementation/
 */
export default class Queue3 {
  constructor(capacity = 500) {
    this.capacity = capacity;
    this.elements = [];
    this.rear = -1;
    this.front = 0;
    this.size = 0;
  }

  get isFull() {
    return this.size === this.capacity;
  }

  /**
   * @return {boolean}
   */
  get isEmpty() {
    return this.size === 0;
  }

  /**
   * Đọc phần tử đầu tiên của hàng đợi mà không xoá nó.
   * @return {*}
   */
  peek() {
    if (this.isEmpty) return console.log("Queue empty");
    return this.elements[this.front];
  }

  /**
   * @param {*} value
   */
  enqueue(value) {
    if (this.isFull)
      // Queue is full
      return console.log("OverFlow");
    else {
      this.rear = (this.rear + 1) % this.capacity;
      this.elements[this.rear] = value; // Add the element to the back
      this.size++;
    }
  }

  /**
   * @return {*}
   */
  dequeue() {
    if (this.isEmpty) {
      // Queue is empty
      console.log("Queue is empty");
      return undefined;
    } else {
      let deletedValue = this.elements[this.front];
      this.front = (this.front + 1) % this.capacity; // Delete the front element
      this.size--;
      return deletedValue;
    }
  }

  toString(callback) {
    if (this.isEmpty) return "";
    if (callback) return callback(this.elements);
    let result = [];
    if (this.front <= this.rear) {
      for (let i = this.front; i <= this.rear; i++) {
        result.push(this.elements[i]);
      }
    } else {
      for (let i = this.front; i < this.capacity; i++) {
        result.push(this.elements[i]);
      }
      for (let j = 0; j <= this.rear; j++) {
        result.push(this.elements[j]);
      }
    }
    return result.join(",");
  }

  /**
   * Xóa hết các phần tử trong queue
   */
  clear() {
    this.elements = [];
    this.rear = -1;
    this.front = 0;
    this.size = 0;
  }
}
