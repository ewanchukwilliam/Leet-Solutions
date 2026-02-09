// @leet start
function twoSum(nums: number[], target: number): number[] {
	let map = new Map<number, number>();
	for (let i = 0; i < nums.length; i++) {
		const num = nums[i];
		if (map.has(target - num)) {
			return [i, map.get(target - num)!];
		}
		map.set(num, i);
	}
	return [];
}
// @leet end
