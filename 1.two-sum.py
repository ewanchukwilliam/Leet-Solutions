# @leet start
class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        hash = {}
        for i in range(0,len(nums)):
            num=nums[i]
            if target - num in hash:
                return [i, hash[target - num]]
            hash[num]=i
        return []


# @leet end
