/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function(nums) {
  let max=Math.max(...nums)
  for(let i=0;i<nums.length;i++){
    if(nums[i]==max){
        return i
    }
  }
};