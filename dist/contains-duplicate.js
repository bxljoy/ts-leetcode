"use strict";
function containsDuplicate(nums) {
    const mySet = new Set(nums);
    return mySet.size !== nums.length;
}
console.log(containsDuplicate([1, 2, 3, 1])); // true
