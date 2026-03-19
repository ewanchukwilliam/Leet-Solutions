// @leet start
class Solution {
	public int maxSubArray(int[] nums) {
		int running =0;
		int max = nums[0];
		for (int i = 0; i < nums.length; i++) {
			int num = nums[i];
			running += num;
			max = Math.max(max, running);
			if (running < 0) running = 0;
		}
		return max;
	}
}
// @leet end
