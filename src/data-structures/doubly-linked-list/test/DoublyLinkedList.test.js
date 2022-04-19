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

  it("Prepend element", () => {
    const list = new DoublyLinkedList();
    list.prepend(1);
    expect(list.toString()).toBe("1");
    list.prepend(2);
    expect(list.toString()).toBe("2,1");
    list.prepend(3);
    expect(list.head.value).toBe(3);
    expect(list.tail.value).toBe(1);
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

  it("Delete tail", () => {
    const list = new DoublyLinkedList();
    list.append(1);
    list.append(2);
    list.append(3);
    list.append(4);
    list.append(5);
    expect(list.toString()).toBe("1,2,3,4,5");
    list.deleteTail();
    expect(list.toString()).toBe("1,2,3,4");
    expect(list.deleteTail().value).toBe(4);
    expect(list.deleteTail().value).toBe(3);
    expect(list.toString()).toBe("1,2");
  });

  it("Reverse list", () => {
    const list = new DoublyLinkedList();
    list.append(1);
    list.append(2);
    list.append(3);
    list.append(4);
    list.append(5);
    expect(list.toString()).toBe("1,2,3,4,5");
    expect(list.reverse().toString()).toBe("5,4,3,2,1");
    const list2 = new DoublyLinkedList();
    list2.append("a");
    list2.append("b");
    list2.append("c");
    expect(list2.toString()).toBe("a,b,c");
    expect(list2.reverse().toString()).toBe("c,b,a");
  });
});
