export default class Queue2 {
  constructor(...args) {
    this.elements = [...args];
  }

  get size() {
    return this.elements.length;
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
    if (this.isEmpty) return null;
    return this.elements[0];
  }

  /**
   * Thêm một phần tử mới vào hàng đợi (tail của danh sách liên kết)
   * Phần tử đó sẽ được xử lý sau tất cả các phần tử ở trước nó.
   * @param {*} value
   */
  enqueue(value) {
    this.elements.push(value);
  }

  /**
   * Xoá phần tử ở vị trí đầu tiên khỏi hàng đợi (head ở danh sách liên kết).
   * Nếu hàng đợi trống trả về null.
   * @return {*}
   */
  dequeue() {
    if (this.isEmpty) return null;
    return this.elements.shift();
  }

  /**
   * @param [callback]
   * @return {string}
   */
  toString(callback) {
    return callback ? callback(this.elements) : this.elements.toString();
  }

  toArray() {
    return this.elements;
  }

  /**
   * Xóa hết các phần tử trong queue
   */
  clear() {
    this.elements = [];
  }
}
