# @leet start
class Solution:
    def maxArea(self, height: List[int]) -> int:
        l = 0
        r = len(height) - 1
        answer = 0
        while l < r:
            answer = max(min(height[l], height[r]) * (r - l), answer)
            if height[r] < height[l]:
                r -= 1
            else:
                l += 1
        return answer


# @leet end
