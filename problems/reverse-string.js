module.exports = function reverseString(string) {
  if (typeof string !== 'string') {
    throw new TypeError;
  }
  let newStr = '';
  let n = string.length - 1
  for (let i = n; i >= 0; i--) {
    newStr += string[i];
  }
  return newStr;
};
