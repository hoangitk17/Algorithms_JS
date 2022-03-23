import LinkedListNode from "./LinkedListNode";

export default class LinkedList {
  constructor() {
    /** @var LinkedListNode */
    this.head = null;
    /** @var LinkedListNode */
    this.tail = null;
  }

  /**
   * Thêm một phần tử vào đầu danh sách liên kết đơn
   * @param {*} value
   * @return {LinkedList}
   */
  prepend(value) {
    const newNode = new LinkedListNode(value, this.head);
    this.head = newNode;
    if (this.tail === null) {
      this.tail = newNode;
    }
    return this;
  }

  /**
   * Thêm một phần tử vào sau danh sách liên kết đơn
   * @param {*} value
   * @return {LinkedList}
   */
  append(value) {
    const newNode = new LinkedListNode(value);
    // Nếu vẫn chưa có head thì tạo nút mới thành head, tương tự với tail.
    if (this.head === null) {
      this.head = this.tail = newNode;
      return this;
    }
    // Gắn nút mới vào cuối danh sách liên kết.
    this.tail.next = newNode;
    this.tail = newNode;
    return this;
  }

  /**
   * Create a linked list from a given array
   * Tạo một danh sách liên kết đơn dựa trên mảng có sẵn
   * @param {*[]} values
   * @return {LinkedList}
   */
  fromArray(values) {
    values.forEach((value) => this.append(value));
    return this;
  }
}
