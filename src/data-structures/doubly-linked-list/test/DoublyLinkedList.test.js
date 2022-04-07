import DoublyLinkedList from "../DoublyLinkedList";

describe("DoublelyLinkedList", () => {
  it("Append list", () => {
    let list = new DoublyLinkedList();
    list.append(5);
    list.append(6);
    list.append(7).append(8);
  })
})