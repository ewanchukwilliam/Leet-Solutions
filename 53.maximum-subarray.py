# @leet start
class Solution:
    def maxSubArray(self, nums: List[int]) -> int:
        best = nums[0]
        running = 0
        for num in nums:
            running += num
            best = max(best, running)
            if running < 0:
                running = 0
        return best
# @leet end
