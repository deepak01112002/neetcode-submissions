class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        let obj = new Map();
        if(s.length != t.length){
            return false;
        }
        for(const ch of s){
            obj.set(ch,(obj.get(ch) || 0) + 1 )
        }
        for(const ch of t){
            if(!obj.get(ch)){
                return false
            }
            obj.set(ch, (obj.get(ch) || 0) - 1)
        }
        return true
    }
}
