# @leet start
class Solution:
    def isPalindrome(self, s: str) -> bool:
        s = s.replace("/[^0-9A-Za-z]/g", "").lower()
        l=0
        r= len(s)
        while l<r:
            if s[l] != s[r]:
                return False
            l++
            r--
        return True




# @leet end
