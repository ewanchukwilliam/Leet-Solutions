# @leet start
class Solution:
    def containsDuplicate(self, nums: List[int]) -> bool:
        hash={}
        for num in nums:
            if num in hash:
                return True
            hash[num]=0
        return False

        
# @leet end
