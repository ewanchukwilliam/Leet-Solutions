// @leet start
function threeSum(nums: number[]): number[][] {
	nums = nums.sort((a, b) => a - b);
	const answer: number[][] = []
	for (let i = 0; i < nums.length - 2; i++) {
		if (i > 0 && nums[i] == nums[i - 1]) continue;
		let l = i + 1
		let r = nums.length - 1
		while (l < r) {
			const sum = nums[i] + nums[r] + nums[l];
			if (sum == 0) {
				answer.push([nums[i], nums[r], nums[l]]);
				l++
				r--
				while (l < r && nums[l] == nums[l - 1]) l++;
				while (l < r && nums[r] == nums[r + 1]) r--;
			} else if (sum > 0) {
				r--;
			} else {
				l++
			}

		}

	}
	return answer;
};
// @leet end
