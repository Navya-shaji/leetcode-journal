/**
 * @param {number[]} nums
 * @return {boolean}
 */

 var containsDuplicate = function(nums) {
 let a=new Set(nums)
 let b=Array.from(a)
 if(b.length==nums.length){
    return false
 }
return true
};


