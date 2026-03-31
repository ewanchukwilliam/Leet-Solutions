// @leet start
function climbStairs(n: number): number {
	let previous = 2
	if (n === 1) return 1
	if (n === 2) return 2
	let current = 3
	for (let i = 3; i < n; i++) {
		let next = previous + current
		previous = current
		current = next
	}
	return current

};
// @leet end
