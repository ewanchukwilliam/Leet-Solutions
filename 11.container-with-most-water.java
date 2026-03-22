// @leet start
class Solution {
	public int maxArea(int[] height) {
		int l = 0;
		int r = height.length - 1;
		int answer = 0;
		while (l < r) {
			answer = Math.max(Math.min(height[l], height[r]) * (r - l), answer);
			if (height[r] < height[l]) {
				r--;
			} else {
				l++;
			}
		}
		return answer;
	}
}
// @leet end
