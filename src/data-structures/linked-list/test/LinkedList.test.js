import LinkedList from "../LinkedList";
import LinkedListNode from "../LinkedListNode";

describe("LinkedList Test", () => {
  it("Init linked list", () => {
    const list = new LinkedList();
    expect(list.head).toBeNull();
    expect(list.tail).toBeNull();
    list.head = list.tail = new LinkedListNode();
    expect(list.head).not.toBeNull();
    expect(list.tail).not.toBeNull();
  });

  it("Append linked list node to list", () => {
    const list = new LinkedList();
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
  });

  it("Prepend value to linked list", () => {
    const list = new LinkedList();
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
  });

  it("Init list from array", () => {
    const list = new LinkedList();
    list.fromArray([1, 2, 3, 4, 5]);
    expect(list.toString()).toBe("1,2,3,4,5");
    const list1 = new LinkedList();
    list1.fromArray([]);
    expect(list1.toString()).toBe("");
    const list2 = new LinkedList();
    list2.fromArray(null);
    expect(list2.toString()).toBe("");
    const list3 = new LinkedList();
    list3.fromArray(undefined);
    expect(list3.toString()).toBe("");
    const list4 = new LinkedList();
    expect(() => list4.fromArray(1)).toThrow("You should pass an array");
    const list5 = new LinkedList();
    expect(() => list5.fromArray(true)).toThrow();
    const list6 = new LinkedList();
    expect(() => list6.fromArray("hehe")).toThrow();
  });

  it("Reverse linked list", () => {
    const list = new LinkedList();
    list.fromArray([1, 2, 3, 4, 5]);
    expect(list.toString()).toBe("1,2,3,4,5");
    list.reverse();
    expect(list.toString()).toBe("5,4,3,2,1");
  });

  it("Delete by value", () => {
    const list = new LinkedList().fromArray([1, 2, 3, 4, 5, 2, 1, 3]);
    expect(list.toString()).toBe("1,2,3,4,5,2,1,3");
    list.delete(2);
    expect(list.toString()).toBe("1,3,4,5,1,3");
    expect(list.delete(1)).not.toBeNull();
    expect(list.toString()).toBe("3,4,5,3");
    const deletedNode = list.delete(5);
    expect(deletedNode.length).toBe(1);
    const deletedNode2 = list.delete(3);
    expect(deletedNode2.length).toBe(2);
  });

  it("Delete head and tail", () => {
    const list = new LinkedList().fromArray([1, 2, 3, 4, 5]);
    list.deleteHead();
    expect(list.toString()).toBe("2,3,4,5");
    list.deleteTail();
    expect(list.toString()).toBe("2,3,4");
  });

  it("Find element in a list", () => {
    const list = new LinkedList();
    list.append(1);
    list.append(2);
    list.append(3);
    list.append(4);
    list.append(5);
    list.append(6);
    expect(list.find(5)).not.toBeNull();
    expect(list.find(7)).toBeNull();
    expect(list.find((value) => value > 2)).not.toBeNull();
    const foundNode = list.find((value) => value % 2 === 0);
    expect(foundNode.value).toBe(2);
  });

  it("Sort linked list", () => {
    const list = new LinkedList();
    list.append(1).append(2).append(5).append(4)
      .append(3);
    expect(list.sort("").toString()).toBe("1,2,5,4,3");
    expect(list.sort(null).toString()).toBe("1,2,5,4,3");
    expect(list.sort().toString()).toBe("1,2,3,4,5");
    expect(list.sort("asc").toString()).toBe("1,2,3,4,5");
    expect(list.sort("desc").toString()).toBe("5,4,3,2,1");
  });
});
