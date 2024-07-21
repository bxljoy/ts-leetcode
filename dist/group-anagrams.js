"use strict";
function groupAnagrams(strs) {
    var _a;
    const map = new Map();
    for (let str of strs) {
        const sortedStr = str.split("").sort().join("");
        if (map.has(sortedStr)) {
            (_a = map.get(sortedStr)) === null || _a === void 0 ? void 0 : _a.push(str);
        }
        else {
            map.set(sortedStr, [str]);
        }
    }
    return Array.from(map.values());
}
