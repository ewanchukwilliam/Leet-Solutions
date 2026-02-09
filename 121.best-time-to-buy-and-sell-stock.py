# @leet start
class Solution:
    def maxProfit(self, prices: List[int]) -> int:
        l=0
        r=0
        ans = 0
        while r < len(prices):
            if prices[r] < prices[l]:
                l = r
            ans = max(ans, prices[r] - prices[l])
            r += 1
        return ans


# @leet end
