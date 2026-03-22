// @leet start
function maxArea(height: number[]): number {
	let l = 0;
	let r = height.length - 1;
	let max = 0;
	while (l < r) {
		max = Math.max(Math.min(height[l], height[r]) * (r - l), max);
		if (height[r] < height[l]) {
			r--;
		} else {
			l++;
		}
	}
	return max


};
// @leet end
