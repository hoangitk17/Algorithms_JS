import LinkedList from "../LinkedList";
import LinkedListNode from "../LinkedListNode";

describe("LinkedList Test", () => {
  it("Init linked list", () => {
    let list = new LinkedList();
    expect(list.head).toBeNull();
    expect(list.tail).toBeNull();
    list.head = list.tail = new LinkedListNode();
    expect(list.head).not.toBeNull();
    expect(list.tail).not.toBeNull();
  })

  it("Append linked list node to list", () => {
    let list = new LinkedList();
    list.append(5);
    expect(list.head.value).toBe(5);
    expect(list.tail.value).toBe(5);
    list.append(6);
    expect(list.head.value).not.toBe(6);
    expect(list.tail.value).toBe(6);
    list.append(undefined);
    expect(list.tail.value).toBeUndefined();
    expect(list.tail.next).toBeNull();
    list.append(null);
    expect(list.tail.value).toBeNull();
    expect(list.tail.next).toBeNull();
  })
})