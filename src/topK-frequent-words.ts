function topKFrequentWords(words: string[], k: number): string[] {
  let res: string[] = [];
  const map: Map<string, number> = new Map<string, number>();
  for (let word of words) {
    if (map.has(word)) {
      const count: number = map.get(word) as number;
      map.set(word, count + 1);
    } else {
      map.set(word, 1);
    }
  }

  const mapReverse: Map<number, string[]> = new Map<number, string[]>();
  map.forEach((value, key) => {
    if (mapReverse.has(value)) {
      const keys: string[] = mapReverse.get(value) as string[];
      keys.push(key);
      mapReverse.set(value, keys);
    } else {
      mapReverse.set(value, [key]);
    }
  });

  const frequency: number[] = Array.from(mapReverse.keys());
  frequency.sort((a, b) => b - a);

  for (let i = 0; i < frequency.length; i++) {
    const group: string[] = mapReverse.get(frequency[i]) as string[];
    group.sort();
    res = res.concat(group);
  }
  return res.slice(0, k);
}
