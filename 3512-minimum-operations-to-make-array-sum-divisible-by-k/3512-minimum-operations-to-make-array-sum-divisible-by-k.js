/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minOperations = function(nums, k) {
    let sum=nums.reduce((acc,item)=>{
        acc+=item
        return acc
    },0)
    return sum%k
};