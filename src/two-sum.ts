function twoSum(nums: number[], target: number): number[] {
  let arr: number[] = [];
  for (let i: number = 0; i < nums.length; i++) {
    let newTarget: number = target - nums[i];
    if (nums.slice(i + 1).includes(newTarget)) {
      arr = [i, nums.lastIndexOf(newTarget)];
      break;
    }
  }
  return arr;
}

function twoSum2(nums: number[], target: number): number[] {
  let arr: number[] = [];
  let map: Map<number, number> = new Map<number, number>();
  for (let i: number = 0; i < nums.length; i++) {
    let newTarget: number = target - nums[i];
    if (map.has(newTarget) && map.get(newTarget)) {
      arr = [i, map.get(newTarget) as number];
      break;
    }
    map.set(nums[i], i);
  }
  return arr;
}
