/**
 * @param {string} s
 * @return {number}
 */
var maxDistinct = function(s) {
    let count=0
    let res=""
    for(let i=0;i<s.length;i++){
        if(!res.includes(s[i])){
            count++
            res+=s[i]
        }
    }
   return count
};