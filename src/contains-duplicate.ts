function containsDuplicate(nums: number[]): boolean {
  const mySet: Set<number> = new Set(nums);
  return mySet.size !== nums.length;
}

console.log(containsDuplicate([1, 2, 3, 1])); // true
