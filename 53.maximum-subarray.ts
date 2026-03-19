// @leet start
function maxSubArray(nums: number[]): number {
	let running:number = 0;
	let max = nums[0];
	for (const num of nums) {
		running += num;
		max = Math.max(max, running);
		if (running < 0) running = 0;
	}
	return max;
}
// @leet end
