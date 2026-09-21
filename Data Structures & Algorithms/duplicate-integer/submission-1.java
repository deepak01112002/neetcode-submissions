class Solution {
    public boolean hasDuplicate(int[] nums) {
        Set<Integer> obj = new HashSet<>();
        for(int x : nums){
           if(!obj.add(x)){
            return true;
           }
        }
        return false;
    }
}