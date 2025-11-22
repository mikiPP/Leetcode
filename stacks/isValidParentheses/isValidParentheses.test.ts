import { isValidParentheses } from './isValidparentheses';

describe('is Valid Parentheses', () => {
  it('Basic parentheses should return true', () => {
    expect(isValidParentheses('()')).toBe(true);
  });

  it('All the combinations of Parentheses in the correct order should return true', () => {
    expect(isValidParentheses('(){}[]')).toBe(true);
  });

  it('Empty string should return true', () => {
    expect(isValidParentheses('')).toBe(true);
  });

  it('Single opening should return false', () => {
    expect(isValidParentheses('(')).toBe(false);
  });

  it('Single closing should return false', () => {
    expect(isValidParentheses(']')).toBe(false);
  });

  it('Mismatched pair should return false', () => {
    expect(isValidParentheses('(]')).toBe(false);
  });

  it('Cross-nested parentheses should return false', () => {
    expect(isValidParentheses('([)]')).toBe(false);
  });

  it('Properly nested different types should return true', () => {
    expect(isValidParentheses('({[]})')).toBe(true);
  });

  it('Long valid sequence should return true', () => {
    expect(isValidParentheses('(((()))){}[]')).toBe(true);
  });

  it('Unbalanced odd length should return false', () => {
    expect(isValidParentheses('(({})')).toBe(false);
  });
});
