/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
var findKthPositive = function(arr, k) {
    let result=[]
    for(let i=1;i<=arr.length+k;i++){
     if(!arr.includes(i)){
        result.push(i)
     }
    }
return result[k-1]
};