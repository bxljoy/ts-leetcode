"use strict";
function twoSum(nums, target) {
    let arr = [];
    for (let i = 0; i < nums.length; i++) {
        let newTarget = target - nums[i];
        if (nums.slice(i + 1).includes(newTarget)) {
            arr = [i, nums.lastIndexOf(newTarget)];
            break;
        }
    }
    return arr;
}
function twoSum2(nums, target) {
    let arr = [];
    let map = new Map();
    for (let i = 0; i < nums.length; i++) {
        let newTarget = target - nums[i];
        if (map.has(newTarget) && map.get(newTarget)) {
            arr = [i, map.get(newTarget)];
            break;
        }
        map.set(nums[i], i);
    }
    return arr;
}
