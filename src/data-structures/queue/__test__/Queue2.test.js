import Queue2 from "../Queue2";

describe("Queue", () => {
  it("should create empty queue", () => {
    const queue = new Queue2();
    expect(queue).not.toBeNull();
    expect(queue.elements).not.toBeNull();
  });

  it("should enqueue data to queue", () => {
    const queue = new Queue2();

    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);

    expect(queue.toString()).toBe("1,2,3");
  });

  it("should peek data from queue", () => {
    const queue = new Queue2();

    expect(queue.peek()).toBeNull();

    queue.enqueue(1);
    queue.enqueue(2);

    expect(queue.peek()).toBe(1);
    expect(queue.peek()).toBe(1);
  });

  it("should check if queue is empty", () => {
    const queue = new Queue2();

    expect(queue.isEmpty).toBe(true);

    queue.enqueue(1);

    expect(queue.isEmpty).toBe(false);
  });

  it("should dequeue from queue in FIFO order", () => {
    const queue = new Queue2();

    queue.enqueue(1);
    queue.enqueue(2);

    expect(queue.dequeue()).toBe(1);
    expect(queue.dequeue()).toBe(2);
    expect(queue.dequeue()).toBeNull();
    expect(queue.isEmpty).toBe(true);
  });
  it("should remove all element", () => {
    const queue = new Queue2();

    queue.enqueue(1);
    queue.enqueue(2);

    expect(queue.size).toBe(2);
    queue.clear();
    expect(queue.size).toBe(0);
  });
  it("should convert queue to array", () => {
    const queue = new Queue2();

    queue.enqueue(1);
    queue.enqueue(2);

    expect(queue.toArray()).toEqual([1, 2]);
  });
});
