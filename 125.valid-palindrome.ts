// @leet start
function isPalindrome(s: string): boolean {
  let l = 0;
  let r = s.length - 1;
  const isAlphaNum = (c: number) =>
    (c >= 48 && c <= 57) ||    // 0-9
    (c >= 65 && c <= 90) ||    // A-Z
    (c >= 97 && c <= 122);     // a-z
  const toLowerCode = (c: number) =>
    (c >= 65 && c <= 90) ? (c + 32) : c; // A-Z -> a-z
  while (l < r) {
    let cl = s.charCodeAt(l);
    let cr = s.charCodeAt(r);
    while (l < r && !isAlphaNum(cl)) cl = s.charCodeAt(++l);
    while (l < r && !isAlphaNum(cr)) cr = s.charCodeAt(--r);
    if (toLowerCode(cl) !== toLowerCode(cr)) return false;
    l++;
    r--;
  }
  return true;
}
// @leet end
