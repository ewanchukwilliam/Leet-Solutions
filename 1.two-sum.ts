// @leet start
function twoSum(nums: number[], target: number): number[] {
	const map: Map<number, number> = new Map();
	for (let i = 0; i < nums.length; i++) {
		const num = nums[i];
		if (map.has(target - num)) {
			return [map.get(target-num)!, i]
		}
		map.set(num, i)
	}
	return []
}
// @leet end
