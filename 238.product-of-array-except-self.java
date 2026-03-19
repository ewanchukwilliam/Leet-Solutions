// @leet start

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

class Solution {
	public int[] productExceptSelf(int[] nums) {
		List<Integer> left = new ArrayList<>(Collections.nCopies(nums.length, 1));
		List<Integer> right = new ArrayList<>(Collections.nCopies(nums.length, 1));
		for (int i = 1; i < nums.length; i++) {
			left.set(i, (left.get(i - 1) * nums[i - 1]));
		}
		for (int i = nums.length - 2; i >= 0; i--) {
			right.set(i, (right.get(i + 1) * nums[i + 1]));
		}
		int[] answer = new int[nums.length];
		for (int i = 0; i < nums.length; i++) {
			answer[i] = left.get(i) * right.get(i);
		}
		return answer;
	}
}
// @leet end
