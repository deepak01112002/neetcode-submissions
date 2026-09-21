class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const obj = new Set();
        for(let x of nums){
            if(obj.has(x)){
                return true
            }
            obj.add(x)
        }
        return false
    }
}
