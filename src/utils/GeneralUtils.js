export function countOccurencesOfCharInString(string, char) {
  let re = new RegExp(char, 'g');
  return (string.match(re) || []).length;
}

export function doPatternTestForInputField(e, pattern) {
  if (pattern) {
    let str = e.target.value;
    pattern = new RegExp(pattern);
    let matched = pattern.test(str);
    return matched;
  }
  return true;
}
