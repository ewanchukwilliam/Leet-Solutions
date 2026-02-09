// @leet start
class Solution {
    public boolean containsDuplicate(int[] nums) {
        Map<Integer, Integer> map = new HashMap<>();
        for (int i = 0; i < nums.length; i++) {
            Integer num = nums[i];
            if (map.containsKey(num)) {
                return true;
            }
			map.put(num,num);
        }
		return false;
    }
}
// @leet end
