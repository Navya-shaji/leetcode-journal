/**
 * @param {number[]} nums
 * @return {number}
 */
var findClosestNumber = function(nums) {
  let closest=nums[0]

  for(let num of nums){
    if(Math.abs(num)<Math.abs(closest)){
        closest=num
    }else if(Math.abs(num)==Math.abs(closest) && num>closest){
        closest=num
    }
  }
  return closest
};