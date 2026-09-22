class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    
    groupAnagrams(strs) {
       let obj = new Map();
       for(let stri of strs){
          let b = stri.split('').sort().join('')
          if(!obj.get(b)){
              obj.set(b, [])
          }
          obj.set(b, ([...obj.get(b),stri]))
       }
       let a = [...obj.values()]
       return a;
    }

    
}
