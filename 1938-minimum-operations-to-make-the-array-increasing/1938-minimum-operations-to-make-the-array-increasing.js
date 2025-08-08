/**
 * @param {number[]} nums
 * @return {number}
 */
var minOperations = function (nums) {

  let sum=nums.reduce((acc,item)=>{
    acc+=item
    return acc
  },0)
    for (let i = 1; i < nums.length; i++) {
        nums[i] = Math.max(nums[i - 1] + 1, nums[i])
    }
    let sum2=nums.reduce((acc,item)=>{
        acc+=item
        return acc
    },0)
    return sum2-sum

};