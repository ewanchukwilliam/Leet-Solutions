// @leet imports start
import java.util.*;
import java.math.*;
// @leet imports end

// @leet start
class Solution {
    public int climbStairs(int n) {
		int previous=2;
		int current=3;
		if(n<=2)return n;
		for (int i = 3; i < n; i++) {
			int next = previous+current;
			previous=current;
			current=next;
		}
		return current;
    }
}
// @leet end
