import { containsDuplicate } from './containsDuplicate';

describe('Contains Duplicate', () => {
  it('if the array contains duplicated numbers it should return true', () => {
    const arrayWithDuplicates = [1, 2, 3, 1];
    expect(containsDuplicate(arrayWithDuplicates)).toBe(true);
  });

  it('if the array do not contains duplicated numbers it should return false', () => {
    const arrayWithDuplicates = [1, 2, 3, 4];
    expect(containsDuplicate(arrayWithDuplicates)).toBe(false);
  });

  it('should return true for an array with multiple duplicates', () => {
    const arrayWithMultipleDuplicates = [1, 2, 3, 1, 2, 3];
    expect(containsDuplicate(arrayWithMultipleDuplicates)).toBe(true);
  });

  it('should return false for an empty array', () => {
    const emptyArray: number[] = [];
    expect(containsDuplicate(emptyArray)).toBe(false);
  });

  it('should return false for an array with one element', () => {
    const singleElementArray = [1];
    expect(containsDuplicate(singleElementArray)).toBe(false);
  });

  it('should return true for an array with negative numbers', () => {
    const arrayWithNegatives = [-1, -2, -3, -1];
    expect(containsDuplicate(arrayWithNegatives)).toBe(true);
  });

  it('should return true for an array with mixed positive and negative duplicates', () => {
    const mixedArray = [1, -1, 2, -1];
    expect(containsDuplicate(mixedArray)).toBe(true);
  });

  it('should return false for an array with mixed the same number positive and negative ', () => {
    const mixedArray = [1, -2, 2, -1];
    expect(containsDuplicate(mixedArray)).toBe(false);
  });
});
