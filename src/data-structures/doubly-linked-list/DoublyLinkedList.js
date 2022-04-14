import DoublyLinkedListNode from "./DoublyLinkedListNode";
import Comparator from "../../utils/Comparator";

export default class DoublyLinkedList {
  /**
   * @param {Function} [comparatorFunction]
   */
  constructor(comparatorFunction) {
    /** @var DoublyLinkedListNode */
    this.head = null;
    /** @var DoublyLinkedListNode */
    this.tail = null;
    this.compare = new Comparator(comparatorFunction);
  }

  /**
   * @param {*} value
   * @return {DoublyLinkedList}
   */
  prepend(value) {
    // Biến nút mới thành head.
    const newNode = new DoublyLinkedListNode(value, this.head);

    // Nếu đã có head, thì nút này không còn là head nữa.
    // Do dó, tham chiếu previous của nó sẽ hướng đến nút mới (head mới).
    // Đồng thời nút mới sẽ là head.
    if (this.head) {
      this.head.previous = newNode;
    }
    this.head = newNode;
    // Nếu vẫn chưa có tail thì nó sẽ là tail.
    if (this.tail === null) {
      this.tail = newNode;
    }
    return this;
  }

  /**
   * @param {*} value
   * @return {DoublyLinkedList}
   */
  append(value) {
    const newNode = new DoublyLinkedListNode(value);

    // Nếu vẫn chưa có head thì tạo nút mới thành head, tương tự với tail.
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
      return this;
    }
    // Gắn tham chiếu next của tail thành nút mới.
    this.tail.next = newNode;
    // Gán tham chiếu previous của nút mới vào tail
    newNode.previous = this.tail;
    // Nút mới trở thành tail trong danh sách liên kết
    this.tail = newNode;
    return this;
  }

  /**
   * @return {DoublyLinkedListNode}
   */
  deleteHead() {
    if (this.head === null) {
      return null;
    }

    const deletedHead = this.head;

    if (this.head.next) {
      this.head = this.head.next;
      this.head.previous = null;
    } else {
      this.head = null;
      this.tail = null;
    }

    return deletedHead;
  }

  /**
   * @return {DoublyLinkedListNode}
   */
  deleteTail() {
    if (this.tail === null) {
      // Không có tail để xoá.
      return null;
    }
    const deletedTail = this.tail;
    if (this.head === this.tail) {
      // Danh sách chỉ có một phần tử.

      this.head = null;
      this.tail = null;

      return deletedTail;
    }
    // Danh sách có nhiều phần tử...
    this.tail = this.tail.previous;
    this.tail.next = null;

    return deletedTail;
  }

  /**
   * Đảo ngược danh sách liên kết.
   * @returns {DoublyLinkedList}
   */
  reverse() {
    let currNode = this.head;
    let prevNode = null;
    let nextNode = null;

    while (currNode) {
      // Nơi lưu trữ nút kế tiếp.
      nextNode = currNode.next;
      prevNode = currNode.previous;
      // Thay đổi tham chiếu kế tiếp của nút hiện tại để nó liên kết với nút trước đó.
      currNode.next = prevNode;
      currNode.previous = nextNode;
      // Dịch chuyển nút prevNode và currNode về trước một bước.
      prevNode = currNode;
      currNode = nextNode;
    }
    // Cập nhật lại head và tail.
    this.tail = this.head;
    this.head = prevNode;

    return this;
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
   * @param {*[]} values - Mảng giá trị cần chuyển thành danh sách liên kết.
   * @return {DoublyLinkedList}
   */
  fromArray(values) {
    values.forEach((value) => this.append(value));

    return this;
  }

  /**
   * @return {DoublyLinkedListNode[]}
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
