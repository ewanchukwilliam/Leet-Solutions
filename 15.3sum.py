# @leet start
class Solution:
    def threeSum(self, nums: list[int]) -> list[list[int]]:
        nums.sort()
        ans = []
        for i in range(len(nums) - 2):
            num = nums[i]
            if i > 0 and num == nums[i - 1]:
                continue
            l = i + 1
            r = len(nums) - 1
            while l < r:
                sum = nums[l] + nums[r] + num
                if sum == 0:
                    ans.append([nums[l], nums[r], num])
                    l += 1
                    r -= 1
                    while l < r and nums[l] == nums[l - 1]:
                        l += 1
                    while l < r and nums[r] == nums[r + 1]:
                        r -= 1
                elif sum > 0:
                    r -= 1
                else:
                    l += 1
        return ans


# @leet end
