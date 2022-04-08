import DoublyLinkedListNode from "../DoublyLinkedListNode";

describe("DoublyLinkedListNode", () => {
  it("Init double linked list node", () => {
    const node = new DoublyLinkedListNode();
    expect(node.value).toBeUndefined();
    expect(node.previous).toBeNull();
    expect(node.next).toBeNull();
  });

  it("Init double linked list node 2", () => {
    const node = new DoublyLinkedListNode(5);
    expect(node.value).toBe(5);
    expect(node.previous).toBeNull();
    expect(node.next).toBeNull();
    expect(node.toString()).toBe("5");
  });

  it("Init double linked list node with next and previous", () => {
    const node1 = new DoublyLinkedListNode(6);
    const node2 = new DoublyLinkedListNode(7);
    node1.next = node2;
    node2.previous = node1;
    expect(node1.previous).toBeNull();
    expect(node1.next).toBe(node2);
    expect(node2.previous).toBe(node1);
    expect(node2.next).toBeNull();
  });
});
