export default class Queue3 {
  constructor(capacity) {
    this.capacity = capacity;
    this.elements = [];
    this.rear = -1;
    this.front = -1;
  }

  get size() {
    return this.rear - this.front;
  }

  get isFull() {
    this.size === this.capacity;
  }

  /**
   * @return {boolean}
   */
  get isEmpty() {
    return this.rear === this.front;
  }

  /**
   * Đọc phần tử đầu tiên của hàng đợi mà không xoá nó.
   * @return {*}
   */
  peek() {
    return this.elements[this.front];
  }

  /**
   * Thêm một phần tử mới vào hàng đợi (tail của danh sách liên kết)
   * Phần tử đó sẽ được xử lý sau tất cả các phần tử ở trước nó.
   * @param {*} value
   */
  enqueue(value) {
    if (this.rear == this.capacity)
      // Queue is full
      console.log("OverFlow");
    else {
      this.elements[rear] = value; // Add the element to the back
      rear++;
    }
  }

  /**
   * Xoá phần tử ở vị trí đầu tiên khỏi hàng đợi (head ở danh sách liên kết).
   * Nếu hàng đợi trống trả về null.
   * @return {*}
   */
  dequeue() {
    if (this.isEmpty)
      // Queue is empty
      return undefined;
    else {
      this.elements[front] = undefined; // Delete the front element
      front++;
    }
  }

  /**
   * Xóa hết các phần tử trong queue
   */
  clear() {
    this.elements = [];
    this.rear = -1;
    this.front = -1;
  }
}
