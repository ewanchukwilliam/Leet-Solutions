// @leet start
class Solution {
    public int maxProfit(int[] prices) {
        Integer l = 0;
        Integer r = 0;
        Integer ans = 0;
        while (r < prices.length) {
            if (prices[l] > prices[r]) {
                l = r;
            }
            ans = Math.max(ans, prices[r] - prices[l]);
            r++;
        }
        return ans;
    }
}
// @leet end
