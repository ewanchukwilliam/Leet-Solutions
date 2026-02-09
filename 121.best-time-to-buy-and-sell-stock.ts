// @leet start
function maxProfit(prices: number[]): number {
	let l = 0;
	let r = 0;
	let ans = 0;
	while (r < prices.length) {
		if (prices[r] < prices[l]) {
			l = r;
		}
		ans = Math.max(ans, prices[r] - prices[l]);
		r++;
	}
	return ans;
}
// @leet end
