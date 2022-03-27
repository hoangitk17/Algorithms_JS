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
   * @return {LinkedListNode}
   */
  deleteHead() {
    if (this.head === null) {
      return null;
    }

    const deletedHead = this.head;
    if (this.head.next) {
      this.head = this.head.next;
    } else {
      this.head = null;
      this.tail = null;
    }
    return deletedHead;
  }

  /**
   * @return {LinkedListNode}
   */
  deleteTail() {
    const deletedTail = this.tail;

    if (this.head === this.tail) {
      // Nếu chỉ có một nút trong danh sách liên kết.
      this.head = null;
      this.tail = null;

      return deletedTail;
    }

    // Nếu có nhiều nút trong danh sách liên kết.

    // Duyệt danh sách đến nút cuối cùng và xoá liên kết "next" của nút trước tail.
    let currentNode = this.head;
    while (currentNode.next) {
      if (!currentNode.next.next) {
        currentNode.next = null;
      } else {
        currentNode = currentNode.next;
      }
    }

    this.tail = currentNode;

    return deletedTail;
  }

  /**
   * @param {*} value
   * @return {LinkedListNode}
   */
  delete(value) {
    if (this.head === null) {
      return null;
    }

    let deletedNode = null;

    // Nếu nút bị xoá là head thì biến nút kế tiếp head trở thành một head mới.
    while (this.head && this.compare.equal(this.head.value, value)) {
      deletedNode = this.head;
      this.head = this.head.next;
    }

    let currentNode = this.head;

    if (currentNode !== null) {
      // Nếu nút tiếp theo là nút bị xoá thì làm hãy nút tiếp theo trở thành nút tiếp theo nữa (next next node).
      while (currentNode.next) {
        if (this.compare.equal(currentNode.next.value, value)) {
          deletedNode = currentNode.next;
          currentNode.next = currentNode.next.next;
        } else {
          currentNode = currentNode.next;
        }
      }
    }

    // Kiểm tra nếu tail là nút bị xoá.
    if (this.compare.equal(this.tail.value, value)) {
      this.tail = currentNode;
    }

    return deletedNode;
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

  /**
   * @return {LinkedListNode[]}
   */
  toArray() {
    const nodes = [];

    let currentNode = this.head;
    while (currentNode) {
      nodes.push(currentNode);
      currentNode = currentNode.next;
    }

    return nodes;
  }

  /**
   * @param {function} [callback]
   * @return {string}
   */
  toString(callback) {
    return this.toArray()
      .map((node) => node.toString(callback))
      .toString();
  }

  /**
   * Đảo ngược danh sách liên kết.
   * @returns {LinkedList}
   */
  reverse() {
    let currNode = this.head;
    let prevNode = null;
    let nextNode = null;

    while (currNode) {
      // Nơi lưu trữ nút kế tiếp.
      nextNode = currNode.next;

      // Thay đổi tham chiếu kế tiếp của nút hiện tại để nó liên kết với nút trước đó.
      currNode.next = prevNode;

      // Dịch chuyển nút prevNode và currNode về trước một bước.
      prevNode = currNode;
      currNode = nextNode;
    }

    // Cập nhật lại head và tail.
    this.tail = this.head;
    this.head = prevNode;

    return this;
  }
}
