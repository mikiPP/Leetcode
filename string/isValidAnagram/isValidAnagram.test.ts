import { isAnagram } from './isValidAnagram';

describe('isAnagram', () => {
  test('basic anagram', () => {
    expect(isAnagram('anagram', 'nagaram')).toBe(true);
  });

  test('different letters', () => {
    expect(isAnagram('rat', 'car')).toBe(false);
  });

  test('empty strings', () => {
    expect(isAnagram('', '')).toBe(true);
  });

  test('one empty, one non-empty', () => {
    expect(isAnagram('', 'a')).toBe(false);
  });

  test('same letters different counts', () => {
    expect(isAnagram('aacc', 'ccac')).toBe(false);
  });

  test('long identical strings', () => {
    const s = 'a'.repeat(1000);
    const t = 'a'.repeat(1000);
    expect(isAnagram(s, t)).toBe(true);
  });

  test('same length but different letters', () => {
    expect(isAnagram('abc', 'abd')).toBe(false);
  });

  test('uppercase letters are not treated as lowercase (not anagrams)', () => {
    expect(isAnagram('Listen', 'Silent')).toBe(false);
  });

  test('non-alphabetic characters do not affect numeric-indexed counts (symmetrical case)', () => {
    expect(isAnagram('ab!', '!ba')).toBe(true);
  });
});
