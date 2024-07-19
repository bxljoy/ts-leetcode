function isAnagram(s: string, t: string): boolean {
  const sortedS: string = s.split("").sort().join("");
  const sortedT: string = t.split("").sort().join("");
  return sortedS == sortedT;
}

console.log(isAnagram("anagram", "nagaram")); // true
console.log(isAnagram("rat", "car")); // false
console.log(isAnagram("a", "ab")); // false
console.log(isAnagram("a", "a")); // true
