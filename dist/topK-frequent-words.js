"use strict";
function topKFrequentWords(words, k) {
    let res = [];
    const map = new Map();
    for (let word of words) {
        if (map.has(word)) {
            const count = map.get(word);
            map.set(word, count + 1);
        }
        else {
            map.set(word, 1);
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
        const group = mapReverse.get(frequency[i]);
        group.sort();
        res = res.concat(group);
    }
    return res.slice(0, k);
}
