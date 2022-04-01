import DoublyLinkedListNode from '../DoublyLinkedListNode';

describe('DoublyLinkedListNode', () => {
  it("Init double linked list node", () => {
    let node = new DoublyLinkedListNode();
    expect(node.value).toBeUndefined();
    expect(node.previous).toBeNull();
    expect(node.next).toBeNull();
  })

  it("Init double linked list node 2", () => {
    let node = new DoublyLinkedListNode(5);
    expect(node.value).toBe(5);
    expect(node.previous).toBeNull();
    expect(node.next).toBeNull();
    expect(node.toString()).toBe("5");
  })
});
