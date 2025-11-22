export const isAnagram = function (s: string, t: string) {
  const buildHash = (str: string) => {
    const positions = new Array(26).fill(0);
    for (let i = 0; i < str.length; i++) {
      const position = str.charCodeAt(i) - 'a'.charCodeAt(0);
      ++positions[position];
    }

    return positions.toString();
  };

  if (s.length !== t.length) {
    return false;
  }

  const sHash = buildHash(s);
  const tHash = buildHash(t);

  return sHash === tHash;
};
