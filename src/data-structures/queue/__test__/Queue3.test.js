import Queue3 from "../Queue3";

describe("Queue", () => {
  it("should create empty queue", () => {
    const queue = new Queue3();
    expect(queue).not.toBeNull();
    expect(queue.elements).not.toBeNull();
  });

  it("should enqueue data to queue", () => {
    const queue = new Queue3();

    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);

    expect(queue.toString()).toBe("1,2,3");
  });

  it("should peek data from queue", () => {
    const queue = new Queue3();

    expect(queue.peek()).toBeUndefined();

    queue.enqueue(1);
    queue.enqueue(2);

    expect(queue.peek()).toBe(1);
    expect(queue.peek()).toBe(1);
  });

  it("should check if queue is empty", () => {
    const queue = new Queue3();

    expect(queue.isEmpty).toBe(true);

    queue.enqueue(1);

    expect(queue.isEmpty).toBe(false);
  });

  it("should dequeue from queue in FIFO order", () => {
    const queue = new Queue3();

    queue.enqueue(1);
    queue.enqueue(2);

    expect(queue.dequeue()).toBe(1);
    expect(queue.dequeue()).toBe(2);
    expect(queue.dequeue()).toBeUndefined();
    expect(queue.isEmpty).toBe(true);
  });
  it("should remove all element", () => {
    const queue = new Queue3();

    queue.enqueue(1);
    queue.enqueue(2);

    expect(queue.size).toBe(2);
    queue.clear();
    expect(queue.size).toBe(0);
  });
  it("Add over capacity", () => {
    const queue = new Queue3(4);

    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);
    queue.enqueue(4);
    expect(queue.isFull).toBe(true);
    queue.enqueue(5);

    expect(queue.capacity).toBe(4);
    expect(queue.size).toBe(4);
    expect(queue.toString()).toBe("1,2,3,4");
    expect(queue.dequeue()).toBe(1);
    queue.enqueue(5);
    expect(queue.toString()).toBe("2,3,4,5");
    queue.enqueue(6);
    expect(queue.toString()).toBe("2,3,4,5");
  });
});
