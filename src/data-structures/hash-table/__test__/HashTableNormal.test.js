import HashTable from "../HashTableNormal";

describe("HashTableNormal Test", () => {
  it("Init hash table without params", () => {
    let hashTable = new HashTable();
    console.log(hashTable);
    expect(hashTable.size).toBe(0);
    expect(hashTable.DEFAULT_BUCKET_SIZE).toBe(32);
    expect(hashTable.buckets.length).toBe(32);
  });

  it("Init hash table without bucket size", () => {
    let hashTable = new HashTable(100);
    console.log(hashTable);
    expect(hashTable.size).toBe(0);
    expect(hashTable.DEFAULT_BUCKET_SIZE).toBe(32);
    expect(hashTable.buckets.length).toBe(100);
  });

  it("Get and Set value by key", () => {
    let hashTable = new HashTable(100);
    expect(hashTable.get("a")).toBeUndefined();
    hashTable.set("a", "hoàng");
    expect(hashTable.has("a")).toBe(true);
    expect(hashTable.get("a")).toBe("hoàng");
  });
});
