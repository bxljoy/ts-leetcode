"use strict";
function topKFrequent(nums, k) {
    let res = [];
    const map = new Map();
    for (let num of nums) {
        if (map.has(num)) {
            let count = map.get(num);
            map.set(num, count + 1);
        }
        else {
            map.set(num, 1);
        }
    }
    const mapReverse = new Map();
    map.forEach((value, key) => {
        if (mapReverse.has(value)) {
            const keys = mapReverse.get(value);
            keys.push(key);
            mapReverse.set(value, keys);
        }
        else {
            mapReverse.set(value, [key]);
        }
    });
    const frequency = Array.from(mapReverse.keys());
    frequency.sort((a, b) => b - a);
    for (let i = 0; i < frequency.length; i++) {
        res = res.concat(mapReverse.get(frequency[i]));
    }
    return res.slice(0, k);
}
console.log(topKFrequent([
    5, 1, -1, -8, -7, 8, -5, 0, 1, 10, 8, 0, -4, 3, -1, -1, 4, -5, 4, -3, 0,
    2, 2, 2, 4, -2, -4, 8, -7, -7, 2, -8, 0, -8, 10, 8, -8, -2, -9, 4, -7, 6,
    6, -1, 4, 2, 8, -3, 5, -9, -3, 6, -8, -5, 5, 10, 2, -5, -1, -5, 1, -3, 7,
    0, 8, -2, -3, -1, -5, 4, 7, -9, 0, 2, 10, 4, 4, -4, -1, -1, 6, -8, -9, -1,
    9, -9, 3, 5, 1, 6, -1, -2, 4, 2, 4, -6, 4, 4, 5, -5,
], 7));
