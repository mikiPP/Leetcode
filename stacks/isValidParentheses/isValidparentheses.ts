type Parentheses = {
  '(': ')';
  '{': '}';
  '[': ']';
};

export const isValidParentheses = (s: string) => {
  const parentheses: Parentheses = { '(': ')', '{': '}', '[': ']' };
  const stack = [];

  for (let i = 0; i < s.length; i++) {
    if (s[i] in parentheses) {
      stack.push(s[i]);
      continue;
    }

    if (!stack.length) return false;

    const lastOpenParentheses = stack.pop();
    if (parentheses[lastOpenParentheses as keyof Parentheses] !== s[i]) {
      return false;
    }
  }

  return stack.length === 0;
};
