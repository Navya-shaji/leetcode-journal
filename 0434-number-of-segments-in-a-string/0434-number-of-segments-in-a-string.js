/**
 * @param {string} s
 * @return {number}
 */
var countSegments = function(s) {
    let count=0
    let str=s.split(" ")
    let out=str.length
    for(let i=0;i<str.length;i++){
        if(str[i]!==""){
            count++
        }
    }
    return count
};