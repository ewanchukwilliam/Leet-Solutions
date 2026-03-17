// @leet start
function maxProfit(prices: number[]): number {

	let left =0 ;
	let right =0 ;
	let answer=0;
	while (right<prices.length) {
		if(prices[right]<prices[left]){
			left=right;
		}
		answer= Math.max(answer, prices[right]-prices[left])
		right++;
	}
	return answer;
};
// @leet end
