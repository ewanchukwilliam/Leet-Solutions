// @leet start
class Solution {
	public int maxProfit(int[] prices) {
		int l = 0;
		int r = 0;
		int best = 0;
		while (r < prices.length) {
			if (prices[r] < prices[l]) {
				l = r;
			}
			best = Math.max(best, prices[r] - prices[l]);
			r++;
		}
		return best;
	}
}
// @leet end
