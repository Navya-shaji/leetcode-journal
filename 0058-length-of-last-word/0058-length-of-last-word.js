/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    let c=s.trim()
    let arr=c.split(" ")
    let b=[]
    b.push(arr[arr.length-1])
    return b.join("").length


};