"use strict";
function isAnagram(s, t) {
    const sortedS = s.split("").sort().join("");
    const sortedT = t.split("").sort().join("");
    return sortedS == sortedT;
}
console.log(isAnagram("anagram", "nagaram")); // true
console.log(isAnagram("rat", "car")); // false
console.log(isAnagram("a", "ab")); // false
console.log(isAnagram("a", "a")); // true
