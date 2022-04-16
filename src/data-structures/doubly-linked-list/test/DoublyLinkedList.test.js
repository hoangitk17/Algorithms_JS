import DoublyLinkedList from "../DoublyLinkedList";

describe("DoublelyLinkedList", () => {
  it("Append list", () => {
    const list = new DoublyLinkedList();
    list.append(5);
    list.append(6);
    list.append(7).append(8);
    expect(list.toString()).toBe("5,6,7,8");
    list.append(9);
    expect(list.toString()).toBe("5,6,7,8,9");
    expect(list.append(5).toString()).toBe("5,6,7,8,9,5");
  });

  it("Import a double linked list from an array", () => {
    const list = new DoublyLinkedList();
    list.fromArray([1, 2, 3]);
    expect(list.toString()).toBe("1,2,3");
  });

  it("Delete head", () => {
    const list = new DoublyLinkedList();
    list.append(5);
    list.append(6);
    list.append(7);
    expect(list.toString()).toBe("5,6,7");
    list.deleteHead();
    expect(list.toString()).toBe("6,7");
    expect(list.deleteHead().value).toBe(6);
    expect(list.deleteHead().value).toBe(7);
    expect(list.deleteHead()).toBeNull();
  });
});
