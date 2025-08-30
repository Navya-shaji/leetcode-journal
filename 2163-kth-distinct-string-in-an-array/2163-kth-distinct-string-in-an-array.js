/**
 * @param {string[]} arr
 * @param {number} k
 * @return {string}
 */
var kthDistinct = function(arr, k) {
    let result=arr.filter((item,index,arr)=>arr.indexOf(item)==arr.lastIndexOf(item))
    if(result.length<k) {
        return ""
    }else{
        return result[k-1]
    }
};