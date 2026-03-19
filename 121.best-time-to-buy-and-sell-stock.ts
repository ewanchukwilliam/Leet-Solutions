// @leet start
function maxProfit(prices: number[]): number {
	let l = 0;
	let r = 0;
	let best = 0;
	while (r < prices.length) {
		if (prices[r] < prices[l]) l = r;

		best = Math.max(best, prices[r] - prices[l]);
		r++;
	}
	return best;
}
// @leet end
