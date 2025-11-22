export const twoSum = function (nums: Array<number>, target: number) {
  const complementaries = new Map();

  for (let i = 0; i < nums.length; i++) {
    const currentNumber = nums[i];
    if (complementaries.get(currentNumber) !== undefined) {
      return [complementaries.get(currentNumber), i];
    }
    complementaries.set(target - currentNumber, i);
  }

  return [];
};
