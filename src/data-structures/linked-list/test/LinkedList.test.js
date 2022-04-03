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

  it("Prepend value to linked list", () => {
    let list = new LinkedList();
    list.prepend(5);
    expect(list.head.value).toBe(5);
    expect(list.tail.value).toBe(5);
    expect(list.head.next).toBeNull();
    expect(list.tail.next).toBeNull();
    list.prepend(6);
    expect(list.head.value).toBe(6);
    expect(list.head.next).toBe(list.tail);
    expect(list.tail.value).toBe(5);
    expect(list.tail.next).toBeNull();
  })

  it("Init list from array", () => {
    let list = new LinkedList();
    list.fromArray([1, 2, 3, 4, 5]);
    expect(list.toString()).toBe("1,2,3,4,5");
    let list1 = new LinkedList();
    list1.fromArray([]);
    expect(list1.toString()).toBe("");
    let list2 = new LinkedList();
    list2.fromArray(null);
    expect(list2.toString()).toBe("");
    let list3 = new LinkedList();
    list3.fromArray(undefined);
    expect(list3.toString()).toBe("");
    let list4 = new LinkedList();
    expect(() => list4.fromArray(1)).toThrow("You should pass an array");
    let list5 = new LinkedList();
    expect(() => list5.fromArray(true)).toThrow();
    let list6 = new LinkedList();
    expect(() => list6.fromArray("hehe")).toThrow();
  })
})