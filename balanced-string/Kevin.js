const check = str => {
  const compareMap = {
    '}': '{',
    ']': '[',
    ')': '(',
  };
  const stack = [];
  for (let i = 0; i < str.length; i++) {
    const char = str.charAt(i);
    if (char === '(' || char === '{' || char === '[') stack.push(char);
    else if (char === ')' || char === '}' || char === ']') {
      if (stack.pop() !== compareMap[char]) return false;
    }
  }
  return stack.length === 0;
};
