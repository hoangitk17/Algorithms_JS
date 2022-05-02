import Stack2 from "../Stack2";

describe("Stack2", () => {
  it("init stack", () => {
    let stack = new Stack2();
    expect(stack.isEmpty).toBe(true);
    expect(stack.isFull).toBe(false);
    let stack1 = new Stack2(0);
    expect(stack1.isEmpty).toBe(true);
    expect(stack1.isFull).toBe(true);
    let stack2 = new Stack2(2);
    expect(stack2.isEmpty).toBe(true);
    expect(stack2.isFull).toBe(false);
  });

  it("Add element to stack", () => {
    let stack = new Stack2();
    stack.push(1);
    stack.push(2);
    expect(stack.size).toBe(2);
    expect(stack.toArray()).toEqual([1, 2]);
  });

  it("Add element with capacity", () => {
    let stack = new Stack2(2);
    stack.push(1);
    stack.push(2);
    expect(stack.toArray()).toEqual([1, 2]);
    stack.push(3);
    expect(stack.toArray()).toEqual([1, 2]);
    expect(stack.isFull).toBe(true);
  });

  it("Pop stack", () => {
    let stack = new Stack2();
    stack.push(1);
    stack.push(2);
    stack.push(3);
    stack.push(4);
    expect(stack.pop()).toBe(4);
    expect(stack.size).toBe(3);
    expect(stack.peek()).toBe(3);
    expect(stack.size).toBe(3);
  });

  it("Clear stack", () => {
    let stack = new Stack2();
    stack.push(100);
    stack.push(101);
    stack.push(102);
    expect(stack.size).toBe(3);
    stack.clear();
    expect(stack.size).toBe(0);
  });
});
