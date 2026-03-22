// @leet start

class Solution {
	public List<List<Integer>> threeSum(int[] nums) {
		Arrays.sort(nums);
		List<List<Integer>> ans = new ArrayList<>();
		for (int i = 0; i < nums.length - 1; i++) {
			if (i > 0 && nums[i] == nums[i - 1])
				continue;
			int l = i + 1;
			int r = nums.length - 1;
			while (l < r) {
				int sum = nums[i] + nums[r] + nums[l];
				if (sum == 0) {
					ans.add(List.of(nums[i], nums[r], nums[l]));
					r--;
					l++;
					while (l < r && nums[l] == nums[l - 1])
						l++;
					while (l < r && nums[r] == nums[r + 1])
						r--;
				} else if (sum > 0) {
					r--;
				} else {
					l++;
				}
			}
		}
		return ans;
	}
}
// @leet end
