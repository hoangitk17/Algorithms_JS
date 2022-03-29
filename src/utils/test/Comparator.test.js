import Comparator from "../Comparator";

describe("Comparator", () => {
  it("should not equal with two number", () => {
    const comparator = new Comparator();
    expect(comparator.equal(1, 2)).toBe(false);
  });

  it("should not equal with two number", () => {
    const comparator = new Comparator();
    expect(comparator.equal(2, 1)).toBe(false);
  });

  it("should equal with two number", () => {
    const comparator = new Comparator();
    expect(comparator.equal(1, 1)).toBe(true);
  });

  it("should a less than b", () => {
    const comparator = new Comparator();
    expect(comparator.lessThan(1, 2)).toBe(true);
  });

  it("should a not less than b", () => {
    const comparator = new Comparator();
    expect(comparator.lessThan(2, 1)).toBe(false);
  });

  it("should a not less than b", () => {
    const comparator = new Comparator();
    expect(comparator.lessThan(1, 1)).toBe(false);
  });

  it("should a greater than b", () => {
    const comparator = new Comparator();
    expect(comparator.greaterThan(1, 0)).toBe(true);
  });

  it("should a not greater than b", () => {
    const comparator = new Comparator();
    expect(comparator.greaterThan(1, 1)).toBe(false);
  });

  it("should a not greater than b", () => {
    const comparator = new Comparator();
    expect(comparator.greaterThan(0, 2)).toBe(false);
  });

  it("should a less than or equal b ", () => {
    const comparator = new Comparator();
    expect(comparator.lessThanOrEqual(1, 2)).toBe(true);
  });

  it("should a less than or equal b", () => {
    const comparator = new Comparator();
    expect(comparator.lessThanOrEqual(1, 1)).toBe(true);
  });

  it("should a not less than or equal b", () => {
    const comparator = new Comparator();
    expect(comparator.lessThanOrEqual(2, 1)).toBe(false);
  });

  it("should a greater than b", () => {
    const comparator = new Comparator();
    expect(comparator.greaterThanOrEqual(3, 2)).toBe(true);
  })

  it("should a greater than b", () => {
    const comparator = new Comparator();
    expect(comparator.greaterThanOrEqual(3, 3)).toBe(true);
  })
  
  it("should a not greater than b", () => {
    const comparator = new Comparator();
    expect(comparator.greaterThanOrEqual(1, 2)).toBe(false);
  })
});
