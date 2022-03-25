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
}
