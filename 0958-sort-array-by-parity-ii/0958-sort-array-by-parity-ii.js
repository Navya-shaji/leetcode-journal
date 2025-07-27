/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParityII = function(nums) {
   let result=new Array(nums.length)
   let left=0;
   let right=1;

   for(let i=0;i<nums.length;i++){
    if(nums[i]%2==0){
        result[left]=nums[i];
        left+=2
    }else{
        result[right]=nums[i]
        right+=2
    }
   }
   return result
};