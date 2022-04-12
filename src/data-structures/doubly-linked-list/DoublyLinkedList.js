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
