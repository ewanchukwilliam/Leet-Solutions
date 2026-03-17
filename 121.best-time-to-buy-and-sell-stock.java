// @leet start
class Solution {
    private int left = 0;
    private int right = 0;
    private int answer = 0;
    public int maxProfit(int[] prices) {
        while (right < prices.length) {
            if (prices[left] > prices[right]) {
                left = right;
            }
            answer = Math.max(answer, prices[right] - prices[left]);
            right++;
        }
        return answer;
    }
}
// @leet end
