// @leet start
function productExceptSelf(nums: number[]): number[] {
	const forward = Array(nums.length).fill(1);
	const backward = Array(nums.length).fill(1);
	for (let i = 1; i < nums.length; i++) {
		forward[i] = forward[i - 1] * nums[i-1];
	}
	for (let i = nums.length - 2; i >= 0; i--) {
		backward[i] = backward[i + 1] * nums[i + 1];
	}
	const answer = Array(nums.length);
	for (let i = 0; i < nums.length; i++) {
		answer[i] = forward[i] * backward[i];
	}
	return answer;
}
// @leet end
