// @leet start
function threeSum(nums: number[]): number[][] {
	nums = nums.sort((a, b) => a - b);
	let solution: number[][] = [];
	for (let i = 0; i < nums.length - 1; i++) {
		const num = nums[i];
		if (i > 0 && num === nums[i - 1]) continue
		let left = i + 1;
		let right = nums.length - 1;
		while (left < right) {
			const target = nums[left] + nums[right] + num;
			if (target === 0) {
				solution.push([nums[left]!, nums[right]!, num])
				right--
				left++
				while (left < right && nums[right + 1] === nums[right]) right--;
				while (left < right && nums[left - 1] === nums[left]) left++;
			}
			else if (target > 0) {
				right--
			} else {
				left++
			}
		}
	}
	return solution;
}
// @leet end
