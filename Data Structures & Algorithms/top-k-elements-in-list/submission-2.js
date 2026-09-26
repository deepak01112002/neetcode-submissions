class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        
        let obj = {};
        for(let x of nums){
           if(obj[x] == undefined){
              obj[x] = 1
           }else{
              obj[x]++
           }
        }
        let arr = []
        for(let key in obj){
            
                arr.push(key)
            
        }
        arr.sort((a,b)=>obj[b] - obj[a])
        return arr.slice(0,k);
    }
}
