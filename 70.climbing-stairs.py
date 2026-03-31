# @leet start
class Solution:
    def climbStairs(self, n: int) -> int:
        previous = 2
        current = 3
        if n <= 2:
            return n
        for i in range(n - 3):
            next = previous + current
            previous = current
            current = next
        return current


# @leet end

