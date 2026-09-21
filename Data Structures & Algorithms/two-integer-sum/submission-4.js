class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let obj = new Map();
        for(let x=0; x<nums.length; x++){
            let needed = target - nums[x]
              if(obj.has(needed)){
                 return [obj.get(needed), x]
              }
                obj.set(nums[x], x)

            }
            return []
        }
       
}
