export default class Queue2 {
  constructor() {
    // Chúng ta sẽ triển khai Hàng đợi dựa trên danh sách liên kết vì
    // cấu trúc của chúng khá tương đồng. Cụ thể, chúng đều hoạt động dựa trên
    // phần tử đầu và cuối. So sánh thao tác enqueue/dequeue của hàng đợi
    // với append/deleteHead của danh sách liên kết.
  }

  /**
   * @return {boolean}
   */
  isEmpty() {}

  /**
   * Đọc phần tử đầu tiên của hàng đợi mà không xoá nó.
   * @return {*}
   */
  peek() {}

  /**
   * Thêm một phần tử mới vào hàng đợi (tail của danh sách liên kết)
   * Phần tử đó sẽ được xử lý sau tất cả các phần tử ở trước nó.
   * @param {*} value
   */
  enqueue(value) {}

  /**
   * Xoá phần tử ở vị trí đầu tiên khỏi hàng đợi (head ở danh sách liên kết).
   * Nếu hàng đợi trống trả về null.
   * @return {*}
   */
  dequeue() {}

  /**
   * @param [callback]
   * @return {string}
   */
  toString(callback) {}
}
