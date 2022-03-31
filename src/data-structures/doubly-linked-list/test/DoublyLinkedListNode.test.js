import DoublyLinkedListNode from '../DoublyLinkedListNode';

describe('DoublyLinkedListNode', () => {
  it("Init double linked list node", () => {
    let node = new DoublyLinkedListNode();
    expect(node.value).toBeUndefined();
  })
});
