// @leet start

class Solution {
	public List<List<Integer>> threeSum(int[] nums) {
		Arrays.sort(nums);
		List<List<Integer>> answer = new ArrayList<>();
		for (int i = 0; i < nums.length - 1; i++) {
			int num = nums[i];
			if (i > 0 && nums[i] == nums[i - 1])
				continue;
			int l = i + 1;
			int r = nums.length - 1;
			while (l < r) {
				int sum = nums[l] + nums[r] + num;
				if (sum == 0) {
					answer.add(new ArrayList<>(List.of(nums[l], nums[r], num)));
					l++;
					r--;
					while (l < r && nums[r] == nums[r + 1])
						r--;
					while (l < r && nums[l] == nums[l - 1])
						l++;
				} else if (sum > 0) {
					r--;
				} else {
					l++;
				}
			}
		}
		return answer;
	}
}
// @leet end
